import React from 'react';
import { Calendar, CreditCard, User, Package } from 'lucide-react';
import PaymentStatusBadge from './PaymentStatusBadge';

interface Order {
  id: string;
  productName: string;
  productType: string;
  amount: number;
  currency: string;
  customerName: string;
  customerEmail: string;
  paymentMethod: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled' | 'refunded' | 'processing';
  createdAt: string;
}

interface OrderSummaryProps {
  order: Order;
  className?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ order, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-blue-900">Order Summary</h3>
        <PaymentStatusBadge status={order.status} />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <Package className="text-blue-900 mr-3 mt-1" size={18} />
          <div>
            <div className="text-sm text-gray-600">Product</div>
            <div className="font-medium">{order.productName}</div>
            <div className="text-xs text-gray-500 capitalize">{order.productType}</div>
          </div>
        </div>
        
        <div className="flex items-start">
          <CreditCard className="text-blue-900 mr-3 mt-1" size={18} />
          <div>
            <div className="text-sm text-gray-600">Payment</div>
            <div className="font-medium">
              {order.currency} {order.amount}
            </div>
            <div className="text-xs text-gray-500 capitalize">
              via {order.paymentMethod.replace('_', ' ')}
            </div>
          </div>
        </div>
        
        <div className="flex items-start">
          <User className="text-blue-900 mr-3 mt-1" size={18} />
          <div>
            <div className="text-sm text-gray-600">Customer</div>
            <div className="font-medium">{order.customerName}</div>
            <div className="text-xs text-gray-500">{order.customerEmail}</div>
          </div>
        </div>
        
        <div className="flex items-start">
          <Calendar className="text-blue-900 mr-3 mt-1" size={18} />
          <div>
            <div className="text-sm text-gray-600">Order Date</div>
            <div className="font-medium">
              {new Date(order.createdAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </div>
            <div className="text-xs text-gray-500">
              {new Date(order.createdAt).toLocaleTimeString('en-GB')}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Order ID:</span>
          <span className="font-mono text-sm text-gray-800">{order.id}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;