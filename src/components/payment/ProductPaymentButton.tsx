import React, { useState } from 'react';
import Button from '../ui/Button';
import PaymentModal from './PaymentModal';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'course' | 'mentorship' | 'consultation';
}

interface ProductPaymentButtonProps {
  product: Product;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const ProductPaymentButton: React.FC<ProductPaymentButtonProps> = ({
  product,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children
}) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleOpenPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
        onClick={handleOpenPaymentModal}
      >
        {children || `Buy Now - £${product.price}`}
      </Button>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleClosePaymentModal}
        product={product}
      />
    </>
  );
};

export default ProductPaymentButton;