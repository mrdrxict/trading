import React from 'react';
import { Check, Calendar, Users, Video, MessageCircle, BarChart3, Target } from 'lucide-react';
import Button from '../ui/Button';

const Mentorship = () => {
  const programs = [
    {
      name: "Monthly Mentorship",
      price: 100,
      period: "per month",
      description: "Perfect for traders who want regular guidance and support",
      features: [
        "2 x 1-on-1 Sessions per Month (60 min each)",
        "Weekly Group Coaching Calls",
        "Trading Room Access (5 days/week)",
        "Real-time Trade Alerts",
        "Performance Review & Feedback",
        "Direct Chat Access",
        "Trading Plan Optimization",
        "Risk Management Coaching"
      ],
      benefits: [
        "Personalized strategy development",
        "Regular performance tracking",
        "Immediate support when needed",
        "Community of serious traders"
      ],
      popular: false
    },
    {
      name: "Quarterly Mentorship",
      price: 250,
      period: "per quarter",
      savings: "Save $50",
      description: "Intensive 3-month program for accelerated growth",
      features: [
        "8 x 1-on-1 Sessions per Quarter (60 min each)",
        "Daily Group Coaching Calls",
        "VIP Trading Room Access",
        "Priority Trade Alerts",
        "Weekly Performance Analysis",
        "24/7 Chat Support",
        "Custom Strategy Development",
        "Portfolio Management Guidance",
        "Monthly Goal Setting Sessions"
      ],
      benefits: [
        "Accelerated learning curve",
        "Comprehensive skill development",
        "Consistent accountability",
        "Advanced strategy implementation"
      ],
      popular: true
    },
    {
      name: "Annual Mentorship",
      price: 1200,
      period: "per year",
      savings: "Save $300",
      description: "Complete transformation program for serious traders",
      features: [
        "36 x 1-on-1 Sessions per Year (60 min each)",
        "Daily Group Coaching Calls",
        "Elite Trading Room Access",
        "Instant Trade Alerts",
        "Weekly Performance Deep Dives",
        "Direct Phone/Text Access",
        "Proprietary Strategy Development",
        "Advanced Portfolio Management",
        "Quarterly Business Reviews",
        "Trading Psychology Coaching",
        "Lifetime Alumni Network Access"
      ],
      benefits: [
        "Complete trading mastery",
        "Professional-level skills",
        "Long-term success planning",
        "Exclusive networking opportunities"
      ],
      popular: false
    }
  ];

  const handlePurchase = (programName: string, price: number) => {
    // This would integrate with Stripe for subscription billing
    alert(`Redirecting to Stripe checkout for ${programName} - $${price}`);
  };

  return (
    <section id="mentorship" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Personal Mentorship Programs
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Work directly with Gary Robinson to accelerate your trading journey with personalized coaching and support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                program.popular ? 'ring-2 ring-yellow-500 scale-105' : ''
              }`}
            >
              {program.popular && (
                <div className="bg-yellow-500 text-blue-900 text-center py-2 font-bold text-sm">
                  BEST VALUE
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{program.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-end mb-1">
                    <span className="text-3xl font-bold text-blue-900">${program.price}</span>
                    <span className="text-gray-600 ml-2">{program.period}</span>
                  </div>
                  {program.savings && (
                    <div className="text-green-600 font-medium text-sm">{program.savings}</div>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Calendar className="mr-2" size={16} />
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Target className="mr-2" size={16} />
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <BarChart3 className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={program.popular ? "secondary" : "primary"}
                  fullWidth
                  size="lg"
                  onClick={() => handlePurchase(program.name, program.price)}
                >
                  Start Mentorship - ${program.price}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  Cancel anytime • No long-term commitment
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="text-blue-900" size={32} />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">1-on-1 Video Sessions</h3>
            <p className="text-gray-600">Personal coaching sessions tailored to your specific needs and trading goals.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-blue-900" size={32} />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">Group Coaching</h3>
            <p className="text-gray-600">Learn alongside other serious traders in our exclusive group coaching calls.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="text-blue-900" size={32} />
            </div>
            <h3 className="font-bold text-blue-900 mb-2">Direct Access</h3>
            <p className="text-gray-600">Get immediate support and guidance through our private communication channels.</p>
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work Directly with Gary?
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Our mentorship programs are limited to ensure quality. Apply today to secure your spot and start your transformation.
          </p>
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Apply for Mentorship
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;