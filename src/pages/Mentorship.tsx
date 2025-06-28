import React, { useState } from 'react';
import { Check, Calendar, Users, Video, MessageCircle, BarChart3, Target, Star, Clock, Award } from 'lucide-react';
import Button from '../components/ui/Button';
import PaymentModal from '../components/payment/PaymentModal';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'course' | 'mentorship' | 'consultation';
}

const Mentorship = () => {
  const [selectedProgram, setSelectedProgram] = useState('quarterly');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const programs = [
    {
      id: 'monthly',
      name: "Monthly Mentorship",
      price: 100,
      period: "per month",
      description: "Perfect for traders who want regular guidance and support",
      commitment: "Month-to-month",
      features: [
        "2 x 1-on-1 Sessions per Month (60 min each)",
        "Weekly Group Coaching Calls",
        "Trading Room Access (5 days/week)",
        "Real-time Trade Alerts",
        "Performance Review & Feedback",
        "Direct Chat Access",
        "Trading Plan Optimization",
        "Risk Management Coaching",
        "Email Support",
        "Community Forum Access"
      ],
      benefits: [
        "Personalized strategy development",
        "Regular performance tracking",
        "Immediate support when needed",
        "Community of serious traders",
        "Flexible monthly commitment"
      ],
      ideal: [
        "New to professional trading",
        "Want to test mentorship approach",
        "Prefer flexible commitment",
        "Need regular guidance"
      ],
      popular: false
    },
    {
      id: 'quarterly',
      name: "Quarterly Mentorship",
      price: 250,
      period: "per quarter",
      savings: "Save $50",
      originalPrice: 300,
      description: "Intensive 3-month program for accelerated growth",
      commitment: "3-month commitment",
      features: [
        "8 x 1-on-1 Sessions per Quarter (60 min each)",
        "Daily Group Coaching Calls",
        "VIP Trading Room Access",
        "Priority Trade Alerts",
        "Weekly Performance Analysis",
        "24/7 Chat Support",
        "Custom Strategy Development",
        "Portfolio Management Guidance",
        "Monthly Goal Setting Sessions",
        "Advanced Risk Assessment",
        "Market Analysis Reports",
        "Trading Psychology Coaching"
      ],
      benefits: [
        "Accelerated learning curve",
        "Comprehensive skill development",
        "Consistent accountability",
        "Advanced strategy implementation",
        "Significant cost savings"
      ],
      ideal: [
        "Serious about trading success",
        "Want intensive coaching",
        "Ready for commitment",
        "Seeking rapid improvement"
      ],
      popular: true
    },
    {
      id: 'annual',
      name: "Annual Mentorship",
      price: 1200,
      period: "per year",
      savings: "Save $300",
      originalPrice: 1500,
      description: "Complete transformation program for serious traders",
      commitment: "12-month commitment",
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
        "Lifetime Alumni Network Access",
        "Annual Trading Retreat Invitation",
        "Custom Trading Software Access",
        "Tax Optimization Guidance"
      ],
      benefits: [
        "Complete trading mastery",
        "Professional-level skills",
        "Long-term success planning",
        "Exclusive networking opportunities",
        "Maximum value and savings"
      ],
      ideal: [
        "Committed to trading career",
        "Want maximum value",
        "Serious about mastery",
        "Long-term perspective"
      ],
      popular: false
    }
  ];

  const mentorshipFeatures = [
    {
      icon: <Video className="text-blue-900" size={32} />,
      title: "1-on-1 Video Sessions",
      description: "Personal coaching sessions tailored to your specific needs and trading goals with screen sharing and real-time analysis."
    },
    {
      icon: <Users className="text-blue-900\" size={32} />,
      title: "Group Coaching Calls",
      description: "Learn alongside other serious traders in our exclusive group coaching calls with Q&A sessions and peer learning."
    },
    {
      icon: <MessageCircle className="text-blue-900" size={32} />,
      title: "Direct Access",
      description: "Get immediate support and guidance through our private communication channels with priority response times."
    },
    {
      icon: <BarChart3 className="text-blue-900\" size={32} />,
      title: "Performance Tracking",
      description: "Comprehensive analysis of your trading performance with detailed reports and improvement recommendations."
    },
    {
      icon: <Target className="text-blue-900" size={32} />,
      title: "Custom Strategies",
      description: "Develop personalized trading strategies based on your risk tolerance, capital, and market preferences."
    },
    {
      icon: <Award className="text-blue-900\" size={32} />,
      title: "Professional Development",
      description: "Build institutional-level trading skills with advanced techniques and professional market insights."
    }
  ];

  const successMetrics = [
    {
      metric: "87%",
      description: "of mentorship students become consistently profitable within 6 months"
    },
    {
      metric: "156%",
      description: "average improvement in risk-adjusted returns after 3 months"
    },
    {
      metric: "92%",
      description: "student satisfaction rate with personalized mentorship approach"
    },
    {
      metric: "£47K",
      description: "average annual profit increase for annual mentorship graduates"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      program: "Quarterly Mentorship",
      result: "Achieved 34% annual return",
      quote: "Gary's mentorship transformed my trading completely. The personalized attention and real-time feedback helped me develop discipline and consistency I never had before.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Michael Chen",
      program: "Annual Mentorship",
      result: "Became full-time trader",
      quote: "The annual program gave me everything I needed to transition from part-time to full-time trading. Gary's guidance was invaluable in developing my professional approach.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Emma Rodriguez",
      program: "Monthly Mentorship",
      result: "Improved win rate to 78%",
      quote: "The monthly sessions kept me accountable and helped me refine my strategy continuously. Gary's insights into market psychology were game-changing.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const handlePurchase = (program: any) => {
    setSelectedProduct({
      id: program.id,
      name: program.name,
      price: program.price,
      description: program.description,
      type: 'mentorship'
    });
    setIsPaymentModalOpen(true);
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedProduct(null);
  };

  const selectedProgramData = programs.find(p => p.id === selectedProgram);

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Mentorship Programs - Gary Robinson Trading</title>
      <meta name="description" content="Personal trading mentorship with Gary Robinson. Choose from monthly, quarterly, or annual programs with 1-on-1 sessions, group coaching, and direct access." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Personal Trading Mentorship
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Work directly with Gary Robinson to accelerate your trading journey with personalized coaching, strategy development, and ongoing support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Users className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">1-on-1</div>
              <p className="text-gray-200">Personal Sessions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Star className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">87%</div>
              <p className="text-gray-200">Success Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Clock className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">24/7</div>
              <p className="text-gray-200">Support Access</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Award className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Expert</div>
              <p className="text-gray-200">Guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Choose Your Mentorship Program
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Select the program that best fits your commitment level and trading goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer ${
                  program.popular ? 'ring-2 ring-yellow-500 scale-105' : ''
                } ${selectedProgram === program.id ? 'ring-2 ring-blue-500' : ''}`}
                onClick={() => setSelectedProgram(program.id)}
              >
                {program.popular && (
                  <div className="bg-yellow-500 text-blue-900 text-center py-2 font-bold text-sm">
                    MOST POPULAR
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
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-medium text-sm">{program.savings}</span>
                        <span className="text-gray-500 line-through text-sm">${program.originalPrice}</span>
                      </div>
                    )}
                    <div className="text-sm text-gray-600 mt-1">{program.commitment}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      {program.features.length > 5 && (
                        <li className="text-sm text-gray-500">
                          +{program.features.length - 5} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <Button 
                    variant={program.popular ? "secondary" : "primary"}
                    fullWidth
                    size="lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePurchase(program);
                    }}
                  >
                    Buy Now - ${program.price}
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Cancel anytime • No long-term commitment required
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Program Information */}
          {selectedProgramData && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                {selectedProgramData.name} - Detailed Information
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold text-blue-900 mb-4">Complete Feature List:</h4>
                  <ul className="space-y-2">
                    {selectedProgramData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {selectedProgramData.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Target className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-blue-900 mb-4">Ideal For:</h4>
                  <ul className="space-y-2">
                    {selectedProgramData.ideal.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Users className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mentorship Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              What Makes Our Mentorship Unique?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive support designed to accelerate your trading success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentorshipFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Proven Results from Our Mentorship Programs
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-200 max-w-3xl mx-auto text-lg">
              Real data from our mentorship students showing measurable improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">{metric.metric}</div>
                <p className="text-gray-200">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Student Success Stories
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Hear from students who have transformed their trading through our mentorship programs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-blue-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.program}</p>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium mt-1">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500" size={16} fill="#EAB308" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How to Get Started
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Simple steps to begin your mentorship journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Choose Program</h3>
              <p className="text-gray-600 text-sm">Select the mentorship program that fits your goals and commitment level</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Complete Payment</h3>
              <p className="text-gray-600 text-sm">Secure your spot with our easy payment process</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">Schedule your first session to discuss your needs and expectations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-900 font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-blue-900 mb-2">Begin Mentorship</h3>
              <p className="text-gray-600 text-sm">Start your personalized mentorship journey with your first session</p>
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
              Join our exclusive mentorship program and work directly with Gary Robinson to achieve your trading goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => handlePurchase(programs.find(p => p.id === 'monthly'))}
              >
                Start Mentorship Now
              </Button>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-300">
              <p>Limited spots available • Applications reviewed within 24 hours</p>
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

export default Mentorship;