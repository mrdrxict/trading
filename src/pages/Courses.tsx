import React, { useState } from 'react';
import { Check, Star, Clock, Users, BookOpen, Award, Target, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';
import PaymentModal from '../components/payment/PaymentModal';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  type: 'course' | 'mentorship' | 'consultation';
}

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Courses', count: 6 },
    { id: 'beginner', name: 'Beginner', count: 2 },
    { id: 'intermediate', name: 'Intermediate', count: 2 },
    { id: 'advanced', name: 'Advanced', count: 2 }
  ];

  const courses = [
    {
      id: 'forex-fundamentals',
      name: "Forex Trading Fundamentals",
      category: "beginner",
      price: 200,
      originalPrice: 300,
      duration: "6 Weeks",
      students: "1,200+",
      rating: 4.9,
      level: "Beginner",
      description: "Master the basics of forex trading with comprehensive lessons covering currency pairs, market analysis, and risk management.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "30+ Video Lessons (15+ Hours)",
        "Forex Market Fundamentals",
        "Currency Pair Analysis",
        "Basic Technical Analysis",
        "Risk Management Basics",
        "Trading Psychology Introduction",
        "Practice Trading Account",
        "Email Support",
        "Certificate of Completion",
        "Lifetime Access"
      ],
      outcomes: [
        "Understand forex market mechanics",
        "Analyze currency pairs effectively",
        "Execute your first profitable trades",
        "Implement basic risk management",
        "Develop trading discipline"
      ],
      curriculum: [
        {
          module: "Module 1: Forex Basics",
          lessons: ["What is Forex?", "Major Currency Pairs", "Market Sessions", "Pip Values"]
        },
        {
          module: "Module 2: Technical Analysis",
          lessons: ["Chart Types", "Support & Resistance", "Trend Analysis", "Basic Indicators"]
        },
        {
          module: "Module 3: Fundamental Analysis",
          lessons: ["Economic Indicators", "Central Bank Policies", "News Trading", "Economic Calendar"]
        },
        {
          module: "Module 4: Risk Management",
          lessons: ["Position Sizing", "Stop Losses", "Risk-Reward Ratios", "Money Management"]
        },
        {
          module: "Module 5: Trading Psychology",
          lessons: ["Emotional Control", "Trading Discipline", "Common Mistakes", "Mental Preparation"]
        },
        {
          module: "Module 6: Practical Trading",
          lessons: ["Platform Tutorial", "Live Trading Demo", "Trade Analysis", "Performance Review"]
        }
      ],
      popular: false
    },
    {
      id: 'crypto-trading-mastery',
      name: "Cryptocurrency Trading Mastery",
      category: "beginner",
      price: 497,
      originalPrice: 597,
      duration: "8 Weeks",
      students: "800+",
      rating: 4.8,
      level: "Beginner",
      description: "Complete guide to cryptocurrency trading covering Bitcoin, altcoins, DeFi, and advanced crypto strategies.",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "40+ Video Lessons (20+ Hours)",
        "Cryptocurrency Fundamentals",
        "Bitcoin & Altcoin Analysis",
        "DeFi Trading Strategies",
        "NFT Market Understanding",
        "Crypto Technical Analysis",
        "Portfolio Management",
        "Security Best Practices",
        "Tax Implications Guide",
        "Community Access"
      ],
      outcomes: [
        "Navigate crypto markets confidently",
        "Trade Bitcoin and altcoins profitably",
        "Understand DeFi protocols",
        "Manage crypto portfolios",
        "Implement security measures"
      ],
      curriculum: [
        {
          module: "Module 1: Crypto Fundamentals",
          lessons: ["Blockchain Basics", "Bitcoin Overview", "Altcoin Categories", "Market Structure"]
        },
        {
          module: "Module 2: Trading Platforms",
          lessons: ["Exchange Selection", "Wallet Security", "Order Types", "Fee Structures"]
        },
        {
          module: "Module 3: Technical Analysis",
          lessons: ["Crypto Chart Patterns", "Volume Analysis", "Momentum Indicators", "Market Cycles"]
        },
        {
          module: "Module 4: DeFi Trading",
          lessons: ["Decentralized Exchanges", "Yield Farming", "Liquidity Mining", "Staking Strategies"]
        },
        {
          module: "Module 5: Risk Management",
          lessons: ["Volatility Management", "Portfolio Allocation", "Stop Loss Strategies", "Position Sizing"]
        },
        {
          module: "Module 6: Advanced Strategies",
          lessons: ["Arbitrage Opportunities", "Futures Trading", "Options Strategies", "Market Making"]
        }
      ],
      popular: false
    },
    {
      id: 'advanced-technical-analysis',
      name: "Advanced Technical Analysis",
      category: "intermediate",
      price: 600,
      originalPrice: 700,
      duration: "10 Weeks",
      students: "600+",
      rating: 4.9,
      level: "Intermediate",
      description: "Deep dive into advanced technical analysis techniques used by professional traders and institutions.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "50+ Video Lessons (25+ Hours)",
        "Advanced Chart Patterns",
        "Multi-Timeframe Analysis",
        "Volume Profile Trading",
        "Market Structure Analysis",
        "Institutional Order Flow",
        "Custom Indicator Development",
        "Backtesting Strategies",
        "Live Trading Sessions",
        "Priority Support"
      ],
      outcomes: [
        "Master advanced chart patterns",
        "Understand institutional trading",
        "Develop custom indicators",
        "Implement multi-timeframe analysis",
        "Trade like a professional"
      ],
      curriculum: [
        {
          module: "Module 1: Advanced Patterns",
          lessons: ["Complex Chart Patterns", "Harmonic Patterns", "Elliott Wave Theory", "Fibonacci Applications"]
        },
        {
          module: "Module 2: Market Structure",
          lessons: ["Order Flow Analysis", "Market Profile", "Volume Analysis", "Institutional Footprints"]
        },
        {
          module: "Module 3: Multi-Timeframe",
          lessons: ["Timeframe Correlation", "Top-Down Analysis", "Entry Timing", "Exit Strategies"]
        },
        {
          module: "Module 4: Custom Indicators",
          lessons: ["Indicator Development", "Coding Basics", "Strategy Automation", "Alert Systems"]
        },
        {
          module: "Module 5: Backtesting",
          lessons: ["Historical Analysis", "Strategy Testing", "Performance Metrics", "Optimization"]
        },
        {
          module: "Module 6: Live Application",
          lessons: ["Real-Time Analysis", "Trade Execution", "Risk Management", "Performance Review"]
        }
      ],
      popular: true
    },
    {
      id: 'futures-trading-strategies',
      name: "Futures Trading Strategies",
      category: "intermediate",
      price: 500,
      originalPrice: 600,
      duration: "12 Weeks",
      students: "400+",
      rating: 4.8,
      level: "Intermediate",
      description: "Comprehensive course on futures trading covering commodities, indices, and advanced futures strategies.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "60+ Video Lessons (30+ Hours)",
        "Commodity Futures Trading",
        "Index Futures Strategies",
        "Spread Trading Techniques",
        "Seasonal Trading Patterns",
        "Options on Futures",
        "Margin Management",
        "Risk Control Systems",
        "Weekly Group Calls",
        "Trading Room Access"
      ],
      outcomes: [
        "Trade commodity futures profitably",
        "Master index futures strategies",
        "Implement spread trading",
        "Understand seasonal patterns",
        "Manage margin effectively"
      ],
      curriculum: [
        {
          module: "Module 1: Futures Basics",
          lessons: ["Contract Specifications", "Margin Requirements", "Settlement Types", "Market Hours"]
        },
        {
          module: "Module 2: Commodity Trading",
          lessons: ["Agricultural Futures", "Energy Markets", "Metals Trading", "Supply & Demand"]
        },
        {
          module: "Module 3: Index Futures",
          lessons: ["Stock Index Futures", "Trading Strategies", "Arbitrage Opportunities", "Risk Management"]
        },
        {
          module: "Module 4: Spread Trading",
          lessons: ["Calendar Spreads", "Inter-commodity Spreads", "Crack Spreads", "Butterfly Spreads"]
        },
        {
          module: "Module 5: Seasonal Patterns",
          lessons: ["Agricultural Cycles", "Energy Seasonality", "Holiday Effects", "Weather Patterns"]
        },
        {
          module: "Module 6: Advanced Strategies",
          lessons: ["Options on Futures", "Complex Spreads", "Volatility Trading", "Portfolio Hedging"]
        }
      ],
      popular: false
    },
    {
      id: 'professional-trading-psychology',
      name: "Professional Trading Psychology",
      category: "advanced",
      price: 500,
      originalPrice: 600,
      duration: "8 Weeks",
      students: "300+",
      rating: 5.0,
      level: "Advanced",
      description: "Master the psychological aspects of trading with advanced techniques for emotional control and mental performance.",
      image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "40+ Video Lessons (20+ Hours)",
        "Trading Psychology Framework",
        "Emotional Control Techniques",
        "Performance Psychology",
        "Stress Management",
        "Cognitive Bias Training",
        "Mental Rehearsal Methods",
        "1-on-1 Psychology Sessions",
        "Mindfulness Training",
        "Performance Tracking"
      ],
      outcomes: [
        "Control trading emotions",
        "Overcome cognitive biases",
        "Develop mental resilience",
        "Improve decision making",
        "Achieve consistent performance"
      ],
      curriculum: [
        {
          module: "Module 1: Psychology Foundations",
          lessons: ["Trading Mindset", "Emotional Intelligence", "Cognitive Biases", "Mental Models"]
        },
        {
          module: "Module 2: Emotional Control",
          lessons: ["Fear Management", "Greed Control", "Anger Management", "Stress Reduction"]
        },
        {
          module: "Module 3: Performance Psychology",
          lessons: ["Peak Performance", "Flow States", "Concentration", "Mental Rehearsal"]
        },
        {
          module: "Module 4: Decision Making",
          lessons: ["Rational Thinking", "Probability Assessment", "Risk Perception", "Intuition vs Logic"]
        },
        {
          module: "Module 5: Resilience Building",
          lessons: ["Handling Losses", "Comeback Strategies", "Mental Toughness", "Confidence Building"]
        },
        {
          module: "Module 6: Optimization",
          lessons: ["Performance Tracking", "Habit Formation", "Continuous Improvement", "Mental Maintenance"]
        }
      ],
      popular: false
    },
    {
      id: 'algorithmic-trading-development',
      name: "Algorithmic Trading Development",
      category: "advanced",
      price: 600,
      originalPrice: 700,
      duration: "16 Weeks",
      students: "200+",
      rating: 4.9,
      level: "Advanced",
      description: "Learn to develop, test, and deploy algorithmic trading systems with professional-grade tools and techniques.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: [
        "80+ Video Lessons (40+ Hours)",
        "Python Programming for Trading",
        "Algorithm Development",
        "Backtesting Frameworks",
        "Machine Learning Applications",
        "API Integration",
        "Risk Management Systems",
        "Live Trading Deployment",
        "Code Review Sessions",
        "Lifetime Updates"
      ],
      outcomes: [
        "Develop trading algorithms",
        "Implement machine learning",
        "Build backtesting systems",
        "Deploy live trading bots",
        "Create risk management systems"
      ],
      curriculum: [
        {
          module: "Module 1: Programming Basics",
          lessons: ["Python Fundamentals", "Data Structures", "Financial Libraries", "API Basics"]
        },
        {
          module: "Module 2: Data Management",
          lessons: ["Data Collection", "Data Cleaning", "Database Management", "Real-time Feeds"]
        },
        {
          module: "Module 3: Strategy Development",
          lessons: ["Algorithm Design", "Signal Generation", "Entry/Exit Logic", "Parameter Optimization"]
        },
        {
          module: "Module 4: Backtesting",
          lessons: ["Testing Frameworks", "Historical Simulation", "Performance Metrics", "Bias Avoidance"]
        },
        {
          module: "Module 5: Machine Learning",
          lessons: ["ML Fundamentals", "Feature Engineering", "Model Training", "Prediction Systems"]
        },
        {
          module: "Module 6: Deployment",
          lessons: ["Live Trading Setup", "Risk Controls", "Monitoring Systems", "Performance Tracking"]
        }
      ],
      popular: true
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

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
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Courses - Gary Robinson Trading</title>
      <meta name="description" content="Professional trading courses from beginner to advanced level. Learn forex, cryptocurrency, futures trading, technical analysis, psychology, and algorithmic trading." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Trading Courses
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive trading education designed to take you from beginner to professional trader with proven strategies and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BookOpen className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">6</div>
              <p className="text-gray-200">Expert Courses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Users className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">3,500+</div>
              <p className="text-gray-200">Students Enrolled</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Star className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">4.9</div>
              <p className="text-gray-200">Average Rating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Award className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Lifetime</div>
              <p className="text-gray-200">Access Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Choose Your Learning Path
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Progress through our structured course levels designed for every stage of your trading journey
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  course.popular ? 'ring-2 ring-yellow-500 scale-105' : ''
                }`}
              >
                {course.popular && (
                  <div className="bg-yellow-500 text-blue-900 text-center py-2 font-bold text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      course.level === 'Beginner' ? 'bg-green-500 text-white' :
                      course.level === 'Intermediate' ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <Star className="text-yellow-500 mr-1" size={14} fill="#EAB308" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-blue-900">{course.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-end mb-2">
                      <span className="text-3xl font-bold text-blue-900">${course.price}</span>
                      <span className="text-gray-500 line-through ml-2">${course.originalPrice}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold ml-2">
                        Save ${course.originalPrice - course.price}
                      </span>
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
                      <Target className="mr-2" size={16} />
                      Learning Outcomes:
                    </h4>
                    <ul className="space-y-1">
                      {course.outcomes.slice(0, 3).map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <TrendingUp className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-700">{outcome}</span>
                        </li>
                      ))}
                      {course.outcomes.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{course.outcomes.length - 3} more outcomes
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                      <BookOpen className="mr-2" size={16} />
                      What's Included:
                    </h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 5).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                      {course.features.length > 5 && (
                        <li className="text-sm text-gray-500">
                          +{course.features.length - 5} more features
                        </li>
                      )}
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
                    30-day money-back guarantee • Lifetime access
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Why Choose Our Courses?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">Expert Instruction</h3>
              <p className="text-gray-600">Learn from Gary Robinson's 10+ years of professional trading experience and proven track record.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">Community Support</h3>
              <p className="text-gray-600">Join a community of serious traders with access to forums, group calls, and peer support.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-900" size={32} />
              </div>
              <h3 className="font-bold text-blue-900 mb-3">Lifetime Access</h3>
              <p className="text-gray-600">All courses include lifetime access with regular updates and new content additions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              🔒 30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600 mb-6">
              We're confident in the quality of our courses. If you're not completely satisfied within 30 days, we'll refund your money, no questions asked.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Secure Payments</h4>
                <p className="text-gray-600">All payments processed securely through Stripe with bank-level encryption.</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Instant Access</h4>
                <p className="text-gray-600">Get immediate access to your course materials after successful payment.</p>
              </div>
              <div>
                <h4 className="font-bold text-blue-900 mb-2">Expert Support</h4>
                <p className="text-gray-600">Direct access to instructors and priority customer support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Trading Journey Today
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of successful traders who have transformed their financial future with our comprehensive courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => handlePurchase({
                  id: 'beginner-bundle',
                  name: 'Beginner Trading Bundle',
                  price: 200,
                  description: 'Complete beginner package with all essential trading courses',
                  type: 'course'
                })}
              >
                Get Started Now
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

export default Courses;