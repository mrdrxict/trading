import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Fundamentals Course",
      description: "Perfect for beginners looking to build a solid foundation",
      monthlyPrice: 297,
      annualPrice: 247 * 12,
      features: [
        "100+ video lessons",
        "Basic technical analysis",
        "Introduction to risk management",
        "Trading psychology foundations",
        "Private community access",
        "3 months support",
        "Trading plan template",
      ],
      notIncluded: [
        "1-on-1 coaching",
        "Advanced strategies",
        "Live trading sessions",
        "Real-time trade alerts",
      ],
      buttonText: "Get Started",
      highlighted: false,
    },
    {
      name: "Advanced Strategy",
      description: "For serious traders ready to level up their performance",
      monthlyPrice: 497,
      annualPrice: 397 * 12,
      features: [
        "Everything in Fundamentals",
        "3 proprietary trading strategies",
        "Advanced technical analysis",
        "Pro risk management techniques",
        "6 months priority support",
        "Trade journal templates",
        "Weekly group Q&A calls",
        "Real-time trade setups",
      ],
      notIncluded: [
        "1-on-1 coaching",
        "Daily live trading sessions",
      ],
      buttonText: "Level Up Now",
      highlighted: true,
    },
    {
      name: "VIP Mentorship",
      description: "Personalized coaching tailored to your specific needs",
      monthlyPrice: 997,
      annualPrice: 897 * 12,
      features: [
        "Everything in Advanced Strategy",
        "Weekly 1-on-1 coaching calls",
        "Custom strategy development",
        "Personal trade reviews",
        "Direct access via private chat",
        "Lifetime course access",
        "12 months priority support",
        "Portfolio optimization",
        "Monthly performance review",
      ],
      notIncluded: [],
      buttonText: "Apply Now",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Transparent, Value-Based Pricing
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Invest in your trading education with plans designed to help you achieve consistent profitability
          </p>
          
          {/* Pricing toggle */}
          <div className="flex items-center justify-center mt-8 mb-8">
            <span className={`mr-3 text-lg ${!isAnnual ? 'text-blue-900 font-medium' : 'text-gray-500'}`}>
              Monthly
            </span>
            <div 
              className="relative w-14 h-7 bg-blue-200 rounded-full cursor-pointer"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div 
                className={`absolute top-1 w-5 h-5 rounded-full bg-blue-900 transition-all duration-300 ${
                  isAnnual ? 'left-8' : 'left-1'
                }`}
              ></div>
            </div>
            <div className="ml-3 flex items-center">
              <span className={`text-lg ${isAnnual ? 'text-blue-900 font-medium' : 'text-gray-500'}`}>
                Annual
              </span>
              <span className="ml-2 bg-yellow-500 text-blue-900 text-xs font-bold px-2 py-1 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} highlighted={plan.highlighted} className="flex flex-col h-full">
              <CardHeader className={`${plan.highlighted ? 'bg-blue-900 text-white' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-blue-900'} mb-2`}>
                  {plan.name}
                </h3>
                <p className={`${plan.highlighted ? 'text-gray-200' : 'text-gray-600'} mb-6`}>
                  {plan.description}
                </p>
                <div className="flex items-end mb-1">
                  <span className={`text-3xl font-bold ${plan.highlighted ? 'text-yellow-500' : 'text-blue-900'}`}>
                    ${isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                    /month
                  </span>
                </div>
                <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {isAnnual ? `$${plan.annualPrice} billed annually` : 'Billed monthly'}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-medium text-gray-700 mb-4">What's included:</h4>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="text-green-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-medium text-gray-700 mb-4">Not included:</h4>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <X className="text-red-500 mt-0.5 mr-2 flex-shrink-0" size={16} />
                          <span className="text-gray-500">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.highlighted ? 'secondary' : 'primary'}
                  fullWidth
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Money-back guarantee */}
        <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-600">
            If you're not completely satisfied with your purchase, simply contact us within 30 days for a full refund.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;