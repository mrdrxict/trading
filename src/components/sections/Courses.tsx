import React, { useState } from 'react';
import { Check, Star, Clock, Users, BookOpen, Award } from 'lucide-react';
import Button from '../ui/Button';
import PaymentModal from '../payment/PaymentModal';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'course' | 'mentorship' | 'consultation';
}

const Courses = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const courses = [
    {
      id: "beginner-package",
      name: "Beginner Package",
      price: 200,
      originalPrice: 300,
      duration: "8 Weeks",
      students: "500+",
      rating: 4.9,
      description: "Perfect for new traders looking to build a solid foundation across all markets",
      features: [
        "Forex, Futures & Crypto Fundamentals",
        "50+ Video Lessons (20+ Hours)",
        "Trading Psychology Masterclass",
        "Risk Management Framework",
        "Basic Technical Analysis",
        "Trading Plan Templates",
        "Private Community Access",
        "Email Support",
        "Certificate of Completion"
      ],
      outcomes: [
        "Understand market mechanics",
        "Execute your first profitable trades",
        "Develop proper risk management",
        "Build trading confidence"
      ],
      popular: false
    },
    {
      id: "advanced-package",
      name: "Advanced Package",
      price: 350,
      originalPrice: 450,
      duration: "12 Weeks",
      students: "300+",
      rating: 4.9,
      description: "For experienced traders ready to take their performance to the next level",
      features: [
        "Everything in Beginner Package",
        "Advanced Technical Analysis",
        "3 Proprietary Trading Strategies",
        "Market Structure & Order Flow",
        "Multi-Timeframe Analysis",
        "Advanced Risk Management",
        "Live Trading Sessions (4 per month)",
        "Weekly Group Q&A Calls",
        "Trading Journal & Analytics Tools",
        "Priority Support"
      ],
      outcomes: [
        "Master advanced trading strategies",
        "Achieve consistent profitability",
        "Trade multiple markets confidently",
        "Develop institutional-level skills"
      ],
      popular: true
    },
    {
      id: "elite-package",
      name: "Elite Package",
      price: 500,
      originalPrice: 650,
      duration: "16 Weeks",
      students: "100+",
      rating: 5.0,
      description: "The ultimate trading education for serious traders seeking mastery",
      features: [
        "Everything in Advanced Package",
        "5 Professional Trading Strategies",
        "Algorithmic Trading Introduction",
        "Portfolio Management Techniques",
        "Institutional Trading Insights",
        "Custom Strategy Development",
        "Daily Live Trading Room Access",
        "Monthly 1-on-1 Coaching Call",
        "Professional Trading Tools",
        "Lifetime Course Updates",
        "VIP Support & Direct Access"
      ],
      outcomes: [
        "Trade like a professional",
        "Develop your own strategies",
        "Manage large portfolios",
        "Achieve financial independence"
      ],
      popular: false
    }
  ];

  const handlePurchase = (course: any) => {
    setSelectedProduct({
      id: course.id,
      name: course.name,
      price: course.price,
      description: course.description,
      type: 'course'
    });
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="courses" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Professional Trading Courses
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive trading education designed to take you from beginner to professional trader
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                course.popular ? 'ring-2 ring-yellow-500 scale-105' : ''
              }`}
            >
              {course.popular && (
                <div className="bg-yellow-500 text-blue-900 text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-900">{course.name}</h3>
                  <div className="flex items-center">
                    <Star className="text-yellow-500 mr-1" size={16} fill="#EAB308" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-end mb-2">
                    <span className="text-3xl font-bold text-blue-900">${course.price}</span>
                    <span className="text-gray-500 line-through ml-2">${course.originalPrice}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                      <Clock className="mr-1" size={14} />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="mr-1" size={14} />
                      {course.students}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <BookOpen className="mr-2" size={16} />
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Award className="mr-2" size={16} />
                    Learning Outcomes:
                  </h4>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Star className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={course.popular ? "secondary" : "primary"}
                  fullWidth
                  size="lg"
                  onClick={() => handlePurchase(course)}
                >
                  Buy Now - ${course.price}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  30-day money-back guarantee
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            🔒 Secure Payment Processing
          </h3>
          <p className="text-gray-600">
            All payments are processed securely through Stripe. Your financial information is protected with bank-level security.
          </p>
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

export default Courses;