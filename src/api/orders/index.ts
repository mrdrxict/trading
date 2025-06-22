// API route for managing orders

interface Order {
  id: string;
  product_id: string;
  product_name: string;
  product_type: string;
  amount: number;
  currency: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  payment_method: string;
  status: string;
  created_at: string;
  updated_at?: string;
  payment_data?: any;
}

// In-memory store for orders (in a real app, this would be a database)
let orders: Order[] = [];

export default async function handler(req: any, res: any) {
  // GET /api/orders - List all orders
  if (req.method === 'GET') {
    // Check if there's an order ID in the query params
    const { id } = req.query;
    
    if (id) {
      // Return a specific order
      const order = orders.find(o => o.id === id);
      
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      
      return res.status(200).json(order);
    }
    
    // Return all orders
    return res.status(200).json(orders);
  }
  
  // POST /api/orders - Create a new order
  if (req.method === 'POST') {
    const { 
      id, 
      product_id, 
      product_name, 
      product_type, 
      amount, 
      currency, 
      customer_name, 
      customer_email, 
      customer_phone, 
      payment_method 
    } = req.body;
    
    // Validate required fields
    if (!id || !product_id || !product_name || !amount || !customer_email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Create new order
    const newOrder: Order = {
      id,
      product_id,
      product_name,
      product_type,
      amount,
      currency: currency || 'GBP',
      customer_name,
      customer_email,
      customer_phone,
      payment_method,
      status: 'pending',
      created_at: new Date().toISOString()
    };
    
    // Add to orders
    orders.push(newOrder);
    
    return res.status(201).json(newOrder);
  }
  
  // PATCH /api/orders/:id - Update an order
  if (req.method === 'PATCH') {
    const { id } = req.query;
    const { status, payment_data } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: 'Order ID is required' });
    }
    
    // Find the order
    const orderIndex = orders.findIndex(o => o.id === id);
    
    if (orderIndex === -1) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    // Update the order
    orders[orderIndex] = {
      ...orders[orderIndex],
      status: status || orders[orderIndex].status,
      payment_data: payment_data || orders[orderIndex].payment_data,
      updated_at: new Date().toISOString()
    };
    
    return res.status(200).json(orders[orderIndex]);
  }
  
  // Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}