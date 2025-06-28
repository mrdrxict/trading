import React from 'react';
import { Calculator, BookOpen, TrendingUp, Shield, Target, BarChart3 } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const TradingResources = () => {
  const resources = [
    {
      icon: <Calculator className="text-yellow-500" size={32} />,
      title: "Position Size Calculator",
      description: "Calculate optimal position sizes based on your risk tolerance and account size.",
      features: ["Risk percentage input", "Stop loss calculator", "Lot size optimization"],
      link: "/trading-calculators#position-size"
    },
    {
      icon: <TrendingUp className="text-yellow-500" size={32} />,
      title: "Profit/Loss Calculator",
      description: "Determine potential profits and losses before entering any trade.",
      features: ["Multi-currency support", "Pip value calculator", "Risk-reward ratios"],
      link: "/trading-calculators#profit-loss"
    },
    {
      icon: <BarChart3 className="text-yellow-500" size={32} />,
      title: "Market Analysis Tools",
      description: "Professional-grade tools for technical and fundamental analysis.",
      features: ["Economic calendar", "Technical indicators", "Market sentiment"],
      link: "/market-analysis"
    },
    {
      icon: <Shield className="text-yellow-500" size={32} />,
      title: "Risk Management Guide",
      description: "Comprehensive guide to protecting your trading capital.",
      features: ["Risk assessment", "Portfolio diversification", "Stop loss strategies"],
      link: "/risk-management"
    },
    {
      icon: <Target className="text-yellow-500" size={32} />,
      title: "Trading Strategies",
      description: "Proven strategies for Forex, Futures, and Crypto markets.",
      features: ["Entry/exit rules", "Backtesting results", "Implementation guides"],
      link: "/trading-strategies"
    },
    {
      icon: <BookOpen className="text-yellow-500" size={32} />,
      title: "Educational Library",
      description: "Extensive collection of trading education materials.",
      features: ["Video tutorials", "Trading glossary", "Market guides"],
      link: "/educational-blog"
    }
  ];

  const strategies = [
    {
      name: "Trend Following Strategy",
      market: "Forex",
      timeframe: "H4 - Daily",
      winRate: "68%",
      riskReward: "1:2.5",
      description: "A robust trend-following system that captures major market moves across all currency pairs."
    },
    {
      name: "Breakout Trading",
      market: "Futures",
      timeframe: "H1 - H4",
      winRate: "72%",
      riskReward: "1:3",
      description: "High-probability breakout strategy for commodity and index futures."
    },
    {
      name: "Momentum Scalping",
      market: "Crypto",
      timeframe: "M15 - H1",
      winRate: "65%",
      riskReward: "1:2",
      description: "Fast-paced momentum strategy designed for volatile cryptocurrency markets."
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Trading Resources & Tools
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Professional trading tools and educational resources to enhance your trading performance
          </p>
        </div>

        {/* Trading Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {resource.icon}
              </div>
              
              <h3 className="font-bold text-blue-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              
              <ul className="space-y-1 mb-4">
                {resource.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to={resource.link}>
                <Button variant="outline" fullWidth>
                  Access Tool
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Featured Strategies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            Featured Trading Strategies
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-blue-900">{strategy.name}</h4>
                  <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                    {strategy.market}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Timeframe</div>
                    <div className="font-semibold text-blue-900">{strategy.timeframe}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Win Rate</div>
                    <div className="font-semibold text-green-600">{strategy.winRate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Risk:Reward</div>
                    <div className="font-semibold text-blue-900">{strategy.riskReward}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">{strategy.description}</p>
                
                <Link to="/contact">
                  <Button variant="primary" fullWidth size="sm">
                    Learn Strategy
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Management Guidelines */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200">
          <div className="text-center mb-8">
            <Shield className="text-red-600 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Essential Risk Management Rules
            </h3>
            <p className="text-red-700 max-w-2xl mx-auto">
              Protecting your capital is the foundation of successful trading. Follow these essential guidelines.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-800 font-bold text-xl">2%</span>
              </div>
              <h4 className="font-bold text-red-800 mb-2">Risk Per Trade</h4>
              <p className="text-red-700 text-sm">Never risk more than 2% of your account on a single trade</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-800 font-bold text-xl">1:2</span>
              </div>
              <h4 className="font-bold text-red-800 mb-2">Risk:Reward</h4>
              <p className="text-red-700 text-sm">Maintain minimum 1:2 risk-to-reward ratio on all trades</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-800 font-bold text-xl">10%</span>
              </div>
              <h4 className="font-bold text-red-800 mb-2">Daily Loss Limit</h4>
              <p className="text-red-700 text-sm">Stop trading if you lose 10% of your account in one day</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-red-800 font-bold text-xl">3</span>
              </div>
              <h4 className="font-bold text-red-800 mb-2">Max Positions</h4>
              <p className="text-red-700 text-sm">Limit yourself to 3 concurrent positions maximum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingResources;