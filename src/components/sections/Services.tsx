import React from 'react';
import { TrendingUp, BarChart3, Bitcoin, DollarSign, Globe, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <DollarSign className="text-yellow-500" size={48} />,
      title: "Forex Trading",
      description: "Master the world's largest financial market with advanced currency trading strategies.",
      features: [
        "Major & Minor Currency Pairs",
        "Technical & Fundamental Analysis",
        "Risk Management Strategies",
        "Market Session Timing"
      ],
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <BarChart3 className="text-yellow-500" size={48} />,
      title: "Futures Trading",
      description: "Learn to trade commodities, indices, and financial futures with professional techniques.",
      features: [
        "Commodity Futures (Gold, Oil, Grains)",
        "Index Futures (S&P 500, NASDAQ)",
        "Interest Rate Futures",
        "Seasonal Trading Patterns"
      ],
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Bitcoin className="text-yellow-500" size={48} />,
      title: "Cryptocurrency Trading",
      description: "Navigate the volatile crypto markets with proven strategies and risk management.",
      features: [
        "Bitcoin & Altcoin Trading",
        "DeFi & NFT Market Analysis",
        "Crypto Technical Analysis",
        "Portfolio Diversification"
      ],
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Trading Services & Expertise
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Comprehensive trading education across the world's most profitable financial markets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Target className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Master All Three Markets?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join Gary Robinson's comprehensive training program and learn to trade Forex, Futures, and Crypto with confidence and consistency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              View Courses
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;