import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

// Update order status in database
async function updateOrderStatus(orderId: string, status: string, paymentData?: any) {
  // This would typically update your database
  // For now, we'll simulate the database operation
  const updateData = {
    order_id: orderId,
    status: status,
    payment_data: paymentData,
    updated_at: new Date().toISOString(),
  };

  console.log('Order status updated:', updateData);
  
  // In a real application, you would update your database here
  // await db.orders.update(orderId, updateData);
  
  return updateData;
}

// Send confirmation email
async function sendConfirmationEmail(customerEmail: string, orderData: any) {
  // This would typically send an email using a service like SendGrid, Mailgun, etc.
  console.log('Sending confirmation email to:', customerEmail);
  console.log('Order data:', orderData);
  
  // In a real application, you would send an email here
  // await emailService.send({
  //   to: customerEmail,
  //   template: 'order-confirmation',
  //   data: orderData
  // });
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session;
        const orderId = session.metadata?.order_id;
        
        if (orderId) {
          await updateOrderStatus(orderId, 'completed', {
            stripe_session_id: session.id,
            payment_intent_id: session.payment_intent,
            amount_total: session.amount_total,
            currency: session.currency,
          });

          // Send confirmation email
          if (session.customer_email) {
            await sendConfirmationEmail(session.customer_email, {
              order_id: orderId,
              product_name: session.metadata?.product_name,
              amount: session.amount_total ? session.amount_total / 100 : 0,
              currency: session.currency?.toUpperCase(),
            });
          }
        }
        break;

      case 'checkout.session.expired':
        const expiredSession = event.data.object as Stripe.Checkout.Session;
        const expiredOrderId = expiredSession.metadata?.order_id;
        
        if (expiredOrderId) {
          await updateOrderStatus(expiredOrderId, 'expired');
        }
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent;
        // You might want to extract order_id from metadata if available
        console.log('Payment failed:', failedPayment.id);
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}