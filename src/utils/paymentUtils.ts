/**
 * Utility functions for payment processing
 */

// Generate a unique order ID
export const generateOrderId = (): string => {
  return `order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

// Format currency amount
export const formatCurrency = (amount: number, currency: string = 'GBP'): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone number format (basic validation)
export const isValidPhone = (phone: string): boolean => {
  // This is a simple validation - in production, you might want more sophisticated validation
  return phone.length >= 8 && /^[+\d\s()-]+$/.test(phone);
};

// Calculate transaction fee (example)
export const calculateTransactionFee = (amount: number, paymentMethod: string): number => {
  if (paymentMethod === 'stripe') {
    // Stripe typically charges 2.9% + 30p
    return (amount * 0.029) + 0.3;
  } else if (paymentMethod === 'cryptomus') {
    // Cryptomus might have different fee structure
    return amount * 0.01; // 1% example fee
  }
  return 0;
};

// Sanitize input to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Mock function to simulate payment processing (for testing)
export const mockProcessPayment = async (
  amount: number, 
  paymentMethod: string
): Promise<{ success: boolean; transactionId?: string; error?: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate success/failure (90% success rate)
  const isSuccessful = Math.random() < 0.9;
  
  if (isSuccessful) {
    return {
      success: true,
      transactionId: `tx_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
    };
  } else {
    return {
      success: false,
      error: 'Payment processing failed. Please try again.'
    };
  }
};

// Get payment method display name
export const getPaymentMethodName = (method: string): string => {
  const methodMap: Record<string, string> = {
    'stripe': 'Credit/Debit Card',
    'cryptomus': 'Cryptocurrency',
    'bank_transfer': 'Bank Transfer',
    'paypal': 'PayPal'
  };
  
  return methodMap[method] || method;
};