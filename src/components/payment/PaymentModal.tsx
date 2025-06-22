import React, { useState } from 'react';
import { X, CreditCard, Bitcoin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'course' | 'mentorship' | 'consultation';
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
}

interface PaymentResponse {
  success: boolean;
  paymentUrl?: string;
  orderId?: string;
  error?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, product }) => {
  const [step, setStep] = useState<'info' | 'payment' | 'processing' | 'success' | 'error'>('info');
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'cryptomus'>('stripe');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    fullName: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen || !product) return null;

  const validateCustomerInfo = (): boolean => {
    const newErrors: Partial<CustomerInfo> = {};
    
    if (!customerInfo.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!customerInfo.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!customerInfo.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCustomerInfoSubmit = () => {
    if (validateCustomerInfo()) {
      setStep('payment');
    }
  };

  const handlePayment = async () => {
    setIsLoading(true);
    setStep('processing');

    try {
      const response = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product,
          customerInfo,
          paymentMethod,
        }),
      });

      const data: PaymentResponse = await response.json();

      if (data.success && data.paymentUrl) {
        // Redirect to payment processor
        window.location.href = data.paymentUrl;
      } else {
        setErrorMessage(data.error || 'Payment failed. Please try again.');
        setStep('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStep('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const resetModal = () => {
    setStep('info');
    setPaymentMethod('stripe');
    setCustomerInfo({ fullName: '', email: '', phone: '' });
    setErrors({});
    setIsLoading(false);
    setOrderId('');
    setErrorMessage('');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-blue-900">Complete Your Purchase</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product Summary */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-blue-900 mb-2">{product.name}</h3>
            <p className="text-gray-700 text-sm mb-3">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total:</span>
              <span className="text-2xl font-bold text-blue-900">£{product.price}</span>
            </div>
          </div>

          {/* Step Content */}
          {step === 'info' && (
            <div className="space-y-4">
              <h3 className="font-bold text-blue-900 mb-4">Customer Information</h3>
              
              <Input
                label="Full Name"
                value={customerInfo.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                placeholder="John Doe"
                error={errors.fullName}
                required
              />
              
              <Input
                label="Email Address"
                type="email"
                value={customerInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@example.com"
                error={errors.email}
                required
              />
              
              <Input
                label="Phone Number"
                value={customerInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+44 20 7123 4567"
                error={errors.phone}
                required
              />
              
              <Button
                variant="secondary"
                fullWidth
                onClick={handleCustomerInfoSubmit}
                className="mt-6"
              >
                Continue to Payment
              </Button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <h3 className="font-bold text-blue-900 mb-4">Choose Payment Method</h3>
              
              {/* Payment Method Selection */}
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('stripe')}
                  className={`w-full p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'stripe'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <CreditCard className="text-blue-900 mr-3" size={24} />
                    <div className="text-left">
                      <div className="font-medium text-blue-900">Credit/Debit Card</div>
                      <div className="text-sm text-gray-600">Visa, Mastercard, American Express</div>
                    </div>
                  </div>
                </button>
                
                <button
                  onClick={() => setPaymentMethod('cryptomus')}
                  className={`w-full p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === 'cryptomus'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <Bitcoin className="text-blue-900 mr-3" size={24} />
                    <div className="text-left">
                      <div className="font-medium text-blue-900">Cryptocurrency</div>
                      <div className="text-sm text-gray-600">Bitcoin, USDT, Ethereum, and more</div>
                    </div>
                  </div>
                </button>
              </div>
              
              {/* Payment Method Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                {paymentMethod === 'stripe' ? (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Secure Card Payment</h4>
                    <p className="text-sm text-gray-600">
                      Your payment will be processed securely through Stripe. You'll be redirected to complete your payment.
                    </p>
                  </div>
                ) : (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cryptocurrency Payment</h4>
                    <p className="text-sm text-gray-600">
                      Pay with Bitcoin, USDT, Ethereum, or other cryptocurrencies. You'll receive a QR code to complete your payment.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setStep('info')}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  variant="secondary"
                  onClick={handlePayment}
                  disabled={isLoading}
                  className="flex-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={16} />
                      Processing...
                    </>
                  ) : (
                    `Pay £${product.price}`
                  )}
                </Button>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="text-center py-8">
              <Loader2 className="mx-auto mb-4 animate-spin text-blue-900" size={48} />
              <h3 className="font-bold text-blue-900 mb-2">Processing Payment</h3>
              <p className="text-gray-600">Please wait while we redirect you to complete your payment...</p>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8">
              <CheckCircle className="mx-auto mb-4 text-green-500" size={48} />
              <h3 className="font-bold text-green-800 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-4">
                Your order #{orderId} has been confirmed. You'll receive an email with your access details shortly.
              </p>
              <Button variant="secondary" onClick={handleClose}>
                Continue
              </Button>
            </div>
          )}

          {step === 'error' && (
            <div className="text-center py-8">
              <AlertCircle className="mx-auto mb-4 text-red-500" size={48} />
              <h3 className="font-bold text-red-800 mb-2">Payment Failed</h3>
              <p className="text-gray-600 mb-4">{errorMessage}</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleClose} className="flex-1">
                  Cancel
                </Button>
                <Button variant="secondary" onClick={() => setStep('payment')} className="flex-1">
                  Try Again
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;