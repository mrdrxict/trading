import Stripe from 'stripe';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'course' | 'mentorship' | 'consultation';
}

interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}

interface PaymentRequest {
  product: Product;
  customerInfo: CustomerInfo;
  paymentMethod: 'stripe' | 'cryptomus';
}

interface CryptomusPaymentData {
  amount: string;
  currency: string;
  order_id: string;
  url_return: string;
  url_success: string;
  url_callback: string;
  is_payment_multiple: boolean;
  lifetime: number;
  to_currency: string;
}

// Cryptomus API configuration
const CRYPTOMUS_MERCHANT_ID = process.env.CRYPTOMUS_MERCHANT_ID || '';
const CRYPTOMUS_API_KEY = process.env.CRYPTOMUS_API_KEY || '';
const CRYPTOMUS_API_URL = 'https://api.cryptomus.com/v1';

// Generate signature for Cryptomus
function generateCryptomusSignature(data: any): string {
  const crypto = require('crypto');
  const jsonString = JSON.stringify(data);
  const base64Data = Buffer.from(jsonString).toString('base64');
  return crypto.createHash('md5').update(base64Data + CRYPTOMUS_API_KEY).digest('hex');
}

// Create Cryptomus payment
async function createCryptomusPayment(product: Product, customerInfo: CustomerInfo, orderId: string) {
  const paymentData: CryptomusPaymentData = {
    amount: product.price.toString(),
    currency: 'GBP',
    order_id: orderId,
    url_return: `${process.env.FRONTEND_URL}/payment/cancelled`,
    url_success: `${process.env.FRONTEND_URL}/payment/success?order_id=${orderId}`,
    url_callback: `${process.env.BACKEND_URL}/api/webhooks/cryptomus`,
    is_payment_multiple: false,
    lifetime: 3600, // 1 hour
    to_currency: 'USDT', // Default to USDT
  };

  const signature = generateCryptomusSignature(paymentData);

  const response = await fetch(`${CRYPTOMUS_API_URL}/payment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'merchant': CRYPTOMUS_MERCHANT_ID,
      'sign': signature,
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    throw new Error('Failed to create Cryptomus payment');
  }

  return await response.json();
}

// Create order in database
async function createOrder(product: Product, customerInfo: CustomerInfo, paymentMethod: string, orderId: string) {
  // This would typically save to your database
  // For now, we'll simulate the database operation
  const orderData = {
    id: orderId,
    product_id: product.id,
    product_name: product.name,
    product_type: product.type,
    amount: product.price,
    currency: 'GBP',
    customer_name: customerInfo.fullName,
    customer_email: customerInfo.email,
    customer_phone: customerInfo.phone,
    payment_method: paymentMethod,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  // In a real application, you would save this to your database
  console.log('Order created:', orderData);
  
  return orderData;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { product, customerInfo, paymentMethod }: PaymentRequest = req.body;

    // Validate input
    if (!product || !customerInfo || !paymentMethod) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Generate unique order ID
    const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create order in database
    await createOrder(product, customerInfo, paymentMethod, orderId);

    if (paymentMethod === 'stripe') {
      // Create Stripe Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'gbp',
              product_data: {
                name: product.name,
                description: product.description,
              },
              unit_amount: Math.round(product.price * 100), // Convert to pence
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        customer_email: customerInfo.email,
        metadata: {
          order_id: orderId,
          product_id: product.id,
          product_type: product.type,
          customer_name: customerInfo.fullName,
          customer_phone: customerInfo.phone,
        },
        success_url: `${process.env.FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}&order_id=${orderId}`,
        cancel_url: `${process.env.FRONTEND_URL}/payment/cancelled?order_id=${orderId}`,
      });

      return res.status(200).json({
        success: true,
        paymentUrl: session.url,
        orderId: orderId,
      });
    } else if (paymentMethod === 'cryptomus') {
      // Create Cryptomus payment
      const cryptomusResponse = await createCryptomusPayment(product, customerInfo, orderId);

      if (cryptomusResponse.state === 0 && cryptomusResponse.result) {
        return res.status(200).json({
          success: true,
          paymentUrl: cryptomusResponse.result.url,
          orderId: orderId,
        });
      } else {
        throw new Error('Failed to create Cryptomus payment');
      }
    } else {
      return res.status(400).json({ error: 'Invalid payment method' });
    }
  } catch (error) {
    console.error('Payment creation error:', error);
    return res.status(500).json({ 
      success: false,
      error: 'Failed to create payment. Please try again.' 
    });
  }
}