import React from 'react';
import { CheckCircle, XCircle, Clock, AlertTriangle, RefreshCw } from 'lucide-react';

type PaymentStatus = 'pending' | 'completed' | 'failed' | 'cancelled' | 'refunded' | 'processing';

interface PaymentStatusBadgeProps {
  status: PaymentStatus;
  className?: string;
}

const PaymentStatusBadge: React.FC<PaymentStatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'completed':
        return {
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          icon: <CheckCircle size={14} className="mr-1" />,
          label: 'Completed'
        };
      case 'pending':
        return {
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          icon: <Clock size={14} className="mr-1" />,
          label: 'Pending'
        };
      case 'processing':
        return {
          bgColor: 'bg-blue-100',
          textColor: 'text-blue-800',
          icon: <RefreshCw size={14} className="mr-1" />,
          label: 'Processing'
        };
      case 'failed':
        return {
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          icon: <XCircle size={14} className="mr-1" />,
          label: 'Failed'
        };
      case 'cancelled':
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          icon: <XCircle size={14} className="mr-1" />,
          label: 'Cancelled'
        };
      case 'refunded':
        return {
          bgColor: 'bg-purple-100',
          textColor: 'text-purple-800',
          icon: <AlertTriangle size={14} className="mr-1" />,
          label: 'Refunded'
        };
      default:
        return {
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          icon: <Clock size={14} className="mr-1" />,
          label: status.charAt(0).toUpperCase() + status.slice(1)
        };
    }
  };

  const { bgColor, textColor, icon, label } = getStatusConfig();

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} ${textColor} ${className}`}>
      {icon}
      {label}
    </span>
  );
};

export default PaymentStatusBadge;