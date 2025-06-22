import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Download, Mail, ArrowRight, Calendar } from 'lucide-react';
import Button from '../components/ui/Button';

interface OrderDetails {
  orderId: string;
  productName: string;
  productType: string;
  amount: number;
  currency: string;
  customerEmail: string;
  status: string;
}

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const orderId = searchParams.get('order_id');
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // In a real application, you would fetch order details from your API
    // For now, we'll simulate the data
    const fetchOrderDetails = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock order details
        setOrderDetails({
          orderId: orderId || 'ORDER_123456',
          productName: 'Advanced Trading Course',
          productType: 'course',
          amount: 1997,
          currency: 'GBP',
          customerEmail: 'customer@example.com',
          status: 'completed'
        });
      } catch (error) {
        console.error('Failed to fetch order details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId, sessionId]);

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Payment Successful!
            </h1>
            <p className="text-gray-600 text-lg">
              Thank you for your purchase. Your order has been confirmed and you'll receive access details shortly.
            </p>
          </div>

          {/* Order Details */}
          {orderDetails && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-6">Order Details</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium text-blue-900">{orderDetails.orderId}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Product:</span>
                  <span className="font-medium">{orderDetails.productName}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-bold text-green-600">
                    £{orderDetails.amount} {orderDetails.currency}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-600">Status:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {orderDetails.status.charAt(0).toUpperCase() + orderDetails.status.slice(1)}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">{orderDetails.customerEmail}</span>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-6">What Happens Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-blue-900 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-blue-900">Confirmation Email</h3>
                  <p className="text-gray-700 text-sm">
                    You'll receive a confirmation email with your receipt and access details within the next few minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Download className="text-blue-900 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-blue-900">Course Access</h3>
                  <p className="text-gray-700 text-sm">
                    Your course materials and login credentials will be sent to your email address.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="text-blue-900 mr-3 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-blue-900">Schedule Sessions</h3>
                  <p className="text-gray-700 text-sm">
                    If your package includes mentorship sessions, you can schedule them through your member portal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/" className="flex-1">
              <Button variant="outline" fullWidth>
                Return to Home
              </Button>
            </Link>
            
            <Link to="/contact" className="flex-1">
              <Button variant="secondary" fullWidth>
                <ArrowRight className="mr-2" size={16} />
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Support Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Need help? Contact our support team at{' '}
              <a href="mailto:support@garyrobinsontrading.com" className="text-blue-900 hover:underline">
                support@garyrobinsontrading.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;