import React, { useState } from 'react';
import { TrendingUp, BarChart3, Bitcoin, DollarSign, Globe, Target, Users, Clock, Award, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import PaymentModal from '../components/payment/PaymentModal';

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
      price: 797
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
      price: 797
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
      price: 797
    }
  ];

  const additionalServices = [
    {
      id: 'personal-mentorship',
      icon: <Users className="text-blue-900" size={32} />,
      title: "Personal Mentorship",
      description: "One-on-one coaching with Gary Robinson for accelerated learning and personalized strategy development.",
      features: ["1-on-1 Sessions", "Custom Strategies", "Performance Review", "Direct Access"],
      price: 499
    },
    {
      id: 'trading-room',
      icon: <Globe className="text-blue-900" size={32} />,
      title: "Trading Room Access",
      description: "Join live trading sessions and see professional strategies in action with real-time market analysis.",
      features: ["Live Trading", "Real-time Analysis", "Q&A Sessions", "Community Access"],
      price: 199
    },
    {
      id: 'strategy-development',
      icon: <Target className="text-blue-900" size={32} />,
      title: "Strategy Development",
      description: "Custom trading strategy creation based on your risk tolerance, capital, and trading goals.",
      features: ["Custom Strategies", "Backtesting", "Optimization", "Implementation Guide"],
      price: 1997
    },
    {
      id: 'certification',
      icon: <Award className="text-blue-900" size={32} />,
      title: "Certification Program",
      description: "Earn professional trading certification recognized by industry professionals and institutions.",
      features: ["Comprehensive Curriculum", "Practical Exams", "Industry Recognition", "Continuing Education"],
      price: 2997
    }
  ];

  const servicePackages = [
    {
      id: 'starter-package',
      name: "Starter Package",
      price: 797,
      description: "Perfect for beginners starting their trading journey",
      includes: [
        "Forex Trading Fundamentals",
        "Basic Technical Analysis",
        "Risk Management Basics",
        "Trading Psychology",
        "Email Support",
        "Community Access"
      ],
      popular: false
    },
    {
      id: 'professional-package',
      name: "Professional Package",
      price: 1597,
      description: "Comprehensive training for serious traders",
      includes: [
        "All Starter Package Content",
        "Advanced Technical Analysis",
        "Futures Trading Education",
        "Crypto Trading Strategies",
        "Live Trading Sessions",
        "Priority Support",
        "Trading Tools Access"
      ],
      popular: true
    },
    {
      id: 'elite-package',
      name: "Elite Package",
      price: 2397,
      description: "Complete mastery program with personal mentorship",
      includes: [
        "All Professional Package Content",
        "Personal Mentorship Sessions",
        "Custom Strategy Development",
        "Advanced Risk Management",
        "Institutional Techniques",
        "Lifetime Updates",
        "VIP Support"
      ],
      popular: false
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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Trading Services
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive trading education and mentorship across Forex, Futures, and Cryptocurrency markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">15+</div>
              <p className="text-gray-200">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">2,500+</div>
              <p className="text-gray-200">Students Trained</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-2">92%</div>
              <p className="text-gray-200">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-white">
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
                      £{service.price}
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
                          <Target className="text-yellow-500 mr-2" size={16} />
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
                      Buy Now - £{service.price}
                    </Button>
                    <Button variant="outline" size="lg">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Additional Services
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Specialized services to accelerate your trading journey and maximize your potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                
                <h3 className="font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm">Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 text-xs flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-lg font-bold text-blue-900 mb-3">£{service.price}{service.id === 'personal-mentorship' ? '/month' : ''}</div>
                  <Button 
                    variant="secondary" 
                    fullWidth 
                    size="sm"
                    onClick={() => handleBuyNow({
                      id: service.id,
                      name: service.title,
                      price: service.price,
                      description: service.description,
                      type: service.id === 'personal-mentorship' ? 'mentorship' : 'course'
                    })}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Service Packages
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose the perfect package for your trading education needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  pkg.popular ? 'ring-2 ring-yellow-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="bg-yellow-500 text-blue-900 text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-900 mb-2">£{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3">Package Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={pkg.popular ? "secondary" : "primary"}
                    fullWidth
                    size="lg"
                    onClick={() => handleBuyNow({
                      id: pkg.id,
                      name: pkg.name,
                      price: pkg.price,
                      description: pkg.description,
                      type: 'course'
                    })}
                  >
                    Buy Now - £{pkg.price}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Gary Robinson Trading?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">15+ years of professional trading experience with verified results and thousands of successful students.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">Personal Attention</h3>
              <p className="text-gray-600">Small class sizes and personal mentorship ensure you get the individual attention needed to succeed.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">Lifetime Support</h3>
              <p className="text-gray-600">Ongoing support and updates ensure you stay current with market changes and new strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
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
                  id: 'free-consultation',
                  name: 'Free Trading Consultation',
                  price: 0,
                  description: 'One-on-one consultation to discuss your trading goals and challenges',
                  type: 'consultation'
                })}
              >
                Book Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                View All Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={handleClosePaymentModal} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default Services;