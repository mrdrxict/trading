import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { XCircle, ArrowLeft, RefreshCw, MessageCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const PaymentCancelled = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Cancellation Header */}
          <div className="mb-8">
            <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="text-red-600" size={40} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Payment Cancelled
            </h1>
            <p className="text-gray-600 text-lg">
              Your payment was cancelled and no charges were made to your account.
            </p>
          </div>

          {/* Order Information */}
          {orderId && (
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-xl font-bold text-blue-900 mb-4">Order Information</h2>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium text-blue-900">{orderId}</span>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                This order has been cancelled and is no longer active.
              </p>
            </div>
          )}

          {/* What Happened */}
          <div className="bg-yellow-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-6">What Happened?</h2>
            
            <div className="text-left space-y-4">
              <p className="text-gray-700">
                Your payment was cancelled for one of the following reasons:
              </p>
              
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                  <span>You clicked the "Cancel" or "Back" button during payment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                  <span>The payment session expired due to inactivity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                  <span>There was a technical issue with the payment processor</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-2"></div>
                  <span>Your browser or internet connection was interrupted</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-bold text-blue-900 mb-6">What Can You Do?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <RefreshCw className="text-blue-900 mx-auto mb-3" size={32} />
                <h3 className="font-medium text-blue-900 mb-2">Try Again</h3>
                <p className="text-gray-700 text-sm">
                  Return to the product page and attempt your purchase again
                </p>
              </div>
              
              <div>
                <MessageCircle className="text-blue-900 mx-auto mb-3" size={32} />
                <h3 className="font-medium text-blue-900 mb-2">Contact Support</h3>
                <p className="text-gray-700 text-sm">
                  Get help from our support team if you're experiencing issues
                </p>
              </div>
              
              <div>
                <ArrowLeft className="text-blue-900 mx-auto mb-3" size={32} />
                <h3 className="font-medium text-blue-900 mb-2">Browse Products</h3>
                <p className="text-gray-700 text-sm">
                  Explore our other courses and services
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link to="/services" className="flex-1">
              <Button variant="secondary" fullWidth>
                <RefreshCw className="mr-2" size={16} />
                Try Purchase Again
              </Button>
            </Link>
            
            <Link to="/contact" className="flex-1">
              <Button variant="outline" fullWidth>
                <MessageCircle className="mr-2" size={16} />
                Contact Support
              </Button>
            </Link>
          </div>

          {/* Return Home */}
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2" size={16} />
              Return to Home
            </Button>
          </Link>

          {/* Support Information */}
          <div className="mt-8">
            <p className="text-gray-600 text-sm">
              Need immediate assistance? Email us at{' '}
              <a href="mailto:support@garyrobinsontrading.com" className="text-blue-900 hover:underline">
                support@garyrobinsontrading.com
              </a>{' '}
              or call{' '}
              <a href="tel:+442071234567" className="text-blue-900 hover:underline">
                +44 20 7123 4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancelled;