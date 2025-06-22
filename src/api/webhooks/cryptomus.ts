// Cryptomus webhook handler
interface CryptomusWebhookData {
  uuid: string;
  order_id: string;
  amount: string;
  payment_amount: string;
  payment_amount_usd: string;
  merchant_amount: string;
  commission: string;
  is_final: boolean;
  status: string;
  from: string;
  wallet_address_uuid: string;
  network: string;
  currency: string;
  payer_currency: string;
  additional_data: string;
  convert: string;
  txid: string;
  sign: string;
}

// Verify Cryptomus webhook signature
function verifyCryptomusSignature(data: any, signature: string): boolean {
  const crypto = require('crypto');
  const apiKey = process.env.CRYPTOMUS_API_KEY || '';
  
  // Remove sign from data for verification
  const { sign, ...dataWithoutSign } = data;
  
  const jsonString = JSON.stringify(dataWithoutSign);
  const base64Data = Buffer.from(jsonString).toString('base64');
  const expectedSignature = crypto.createHash('md5').update(base64Data + apiKey).digest('hex');
  
  return expectedSignature === signature;
}

// Update order status in database
async function updateOrderStatus(orderId: string, status: string, paymentData?: any) {
  // This would typically update your database
  const updateData = {
    order_id: orderId,
    status: status,
    payment_data: paymentData,
    updated_at: new Date().toISOString(),
  };

  console.log('Order status updated:', updateData);
  
  // In a real application, you would update your database here
  return updateData;
}

// Send confirmation email
async function sendConfirmationEmail(orderId: string, orderData: any) {
  // This would typically send an email
  console.log('Sending confirmation email for order:', orderId);
  console.log('Order data:', orderData);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const webhookData: CryptomusWebhookData = req.body;
    
    // Verify webhook signature
    if (!verifyCryptomusSignature(webhookData, webhookData.sign)) {
      console.error('Invalid Cryptomus webhook signature');
      return res.status(400).json({ error: 'Invalid signature' });
    }

    const { order_id, status, is_final, payment_amount, currency, txid } = webhookData;

    // Map Cryptomus status to our internal status
    let orderStatus = 'pending';
    switch (status) {
      case 'paid':
        orderStatus = 'completed';
        break;
      case 'paid_over':
        orderStatus = 'completed';
        break;
      case 'fail':
        orderStatus = 'failed';
        break;
      case 'cancel':
        orderStatus = 'cancelled';
        break;
      case 'system_fail':
        orderStatus = 'failed';
        break;
      case 'refund_process':
        orderStatus = 'refunding';
        break;
      case 'refund_fail':
        orderStatus = 'refund_failed';
        break;
      case 'refund_paid':
        orderStatus = 'refunded';
        break;
      default:
        orderStatus = 'pending';
    }

    // Update order status
    await updateOrderStatus(order_id, orderStatus, {
      cryptomus_uuid: webhookData.uuid,
      payment_amount: payment_amount,
      currency: currency,
      txid: txid,
      network: webhookData.network,
      is_final: is_final,
    });

    // Send confirmation email if payment is completed
    if (orderStatus === 'completed' && is_final) {
      await sendConfirmationEmail(order_id, {
        order_id: order_id,
        payment_amount: payment_amount,
        currency: currency,
        txid: txid,
      });
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Cryptomus webhook processing error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}