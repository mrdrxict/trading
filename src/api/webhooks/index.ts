import stripeWebhook from './stripe';
import cryptomusWebhook from './cryptomus';

export default async function handler(req: any, res: any) {
  // Determine which webhook handler to use based on the path or headers
  const webhookType = req.url.includes('/cryptomus') ? 'cryptomus' : 'stripe';
  
  try {
    if (webhookType === 'cryptomus') {
      return await cryptomusWebhook(req, res);
    } else {
      return await stripeWebhook(req, res);
    }
  } catch (error) {
    console.error(`Error processing ${webhookType} webhook:`, error);
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}