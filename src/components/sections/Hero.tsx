import React, { useState } from 'react';
import Button from '../ui/Button';
import { TrendingUp, Award, Users, Clock, BarChart3, DollarSign } from 'lucide-react';
import PaymentModal from '../payment/PaymentModal';

const Hero = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleConsultation = () => {
    setSelectedProduct({
      id: 'one-on-one-consultation',
      name: 'One-on-One Trading Consultation',
      price: 50,
      description: 'One-on-one consultation to discuss your trading goals and challenges',
      type: 'consultation'
    });
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="mr-2" size={16} />
              10+ Years Trading Experience
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Master <span className="text-yellow-500">Forex</span>, <span className="text-yellow-500">Futures</span> & <span className="text-yellow-500">Crypto</span> Trading
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Learn from Gary Robinson, a professional trader with over 10 years of experience. Transform your trading with proven strategies that work across all markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
                onClick={handleConsultation}
              >
                $50 Consultation
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="text-yellow-500 mr-2" size={24} />
                  <span className="text-2xl font-bold">92%</span>
                </div>
                <p className="text-gray-300 text-sm">Success Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <Users className="text-yellow-500 mr-2" size={24} />
                  <span className="text-2xl font-bold">2,500+</span>
                </div>
                <p className="text-gray-300 text-sm">Students</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <BarChart3 className="text-yellow-500 mr-2" size={24} />
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <p className="text-gray-300 text-sm">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="text-yellow-500 mr-2" size={24} />
                  <span className="text-2xl font-bold">$50M+</span>
                </div>
                <p className="text-gray-300 text-sm">Traded Volume</p>
              </div>
            </div>
          </div>
          
          {/* Trading Dashboard Mockup */}
          <div className="hidden lg:block relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-900 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium">Gary Robinson Trading Platform</span>
              </div>
              <img 
                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Trading Platform" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <TrendingUp className="mr-2" size={20} />
                <div>
                  <div className="font-bold">+$12,450</div>
                  <div className="text-sm opacity-90">Today's P&L</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center">
                <BarChart3 className="mr-2" size={20} />
                <div>
                  <div className="font-bold">Live Trading</div>
                  <div className="text-sm opacity-90">3 Active Positions</div>
                </div>
              </div>
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

export default Hero;