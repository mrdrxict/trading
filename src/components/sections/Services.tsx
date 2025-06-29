import React, { useState } from 'react';
import { TrendingUp, BarChart3, Bitcoin, DollarSign, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import PaymentModal from '../payment/PaymentModal';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'course' | 'mentorship' | 'consultation';
}

const Services = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const mainServices = [
    {
      id: 'forex-education',
      icon: <DollarSign className="text-yellow-500" size={48} />,
      title: "Forex Trading Education",
      description: "Master the world's largest financial market with comprehensive currency trading strategies and analysis techniques.",
      features: [
        "Major & Minor Currency Pairs Analysis",
        "Technical & Fundamental Analysis",
        "Risk Management Strategies",
        "Market Session Timing",
        "Economic Calendar Integration",
        "Live Trading Sessions"
      ],
      benefits: [
        "Trade 24/5 global markets",
        "High liquidity and tight spreads",
        "Leverage opportunities",
        "Multiple trading strategies"
      ],
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 200
    },
    {
      id: 'futures-mastery',
      icon: <BarChart3 className="text-yellow-500" size={48} />,
      title: "Futures Trading Mastery",
      description: "Learn to trade commodities, indices, and financial futures with professional institutional techniques.",
      features: [
        "Commodity Futures (Gold, Oil, Grains)",
        "Index Futures (FTSE, S&P 500, NASDAQ)",
        "Interest Rate Futures",
        "Seasonal Trading Patterns",
        "Spread Trading Strategies",
        "Options on Futures"
      ],
      benefits: [
        "Leverage and margin efficiency",
        "Transparent pricing",
        "Regulated markets",
        "Diverse asset exposure"
      ],
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 200
    },
    {
      id: 'crypto-trading',
      icon: <Bitcoin className="text-yellow-500" size={48} />,
      title: "Cryptocurrency Trading",
      description: "Navigate the volatile crypto markets with proven strategies, risk management, and technical analysis.",
      features: [
        "Bitcoin & Altcoin Trading",
        "DeFi & NFT Market Analysis",
        "Crypto Technical Analysis",
        "Portfolio Diversification",
        "Yield Farming Strategies",
        "Security Best Practices"
      ],
      benefits: [
        "24/7 market availability",
        "High volatility opportunities",
        "Emerging market potential",
        "Decentralized finance access"
      ],
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 200
    }
  ];

  const handleBuyNow = (product: Product) => {
    setSelectedProduct(product);
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Core Trading Services
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Master the three most profitable financial markets with expert guidance and proven strategies
          </p>
        </div>

        <div className="space-y-16">
          {mainServices.map((service, index) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-bold">
                    ${service.price}
                  </div>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3">What You'll Learn:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <TrendingUp className="text-yellow-500 mr-2" size={16} />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => handleBuyNow({
                      id: service.id,
                      name: service.title,
                      price: service.price,
                      description: service.description,
                      type: 'course'
                    })}
                  >
                    Buy Now - ${service.price}
                  </Button>
                  <Link to={`/courses`}>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of successful traders who have achieved financial independence with our proven strategies and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => handleBuyNow({
                  id: 'one-on-one-consultation',
                  name: 'One-on-One Trading Consultation',
                  price: 50,
                  description: 'One-on-one consultation to discuss your trading goals and challenges',
                  type: 'consultation'
                })}
              >
                Book $50 Consultation
              </Button>
              <Link to="/courses">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={handleClosePaymentModal} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default Services;