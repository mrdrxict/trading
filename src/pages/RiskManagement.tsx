import React, { useState } from 'react';
import { Shield, AlertTriangle, Calculator, Target, TrendingDown, BarChart3, DollarSign, Percent } from 'lucide-react';
import Button from '../components/ui/Button';

const RiskManagement = () => {
  const [riskCalculator, setRiskCalculator] = useState({
    accountSize: 10000,
    riskPercentage: 2,
    entryPrice: 1.1000,
    stopLoss: 1.0950,
    positionType: 'long'
  });

  const [portfolioData, setPortfolioData] = useState({
    totalPositions: 3,
    maxRisk: 6,
    currentRisk: 4.5,
    correlationRisk: 'Medium'
  });

  const riskPrinciples = [
    {
      icon: <Percent className="text-yellow-500" size={32} />,
      title: "The 2% Rule",
      description: "Never risk more than 2% of your account on a single trade",
      details: [
        "Protects against catastrophic losses",
        "Allows for 50 consecutive losses before account depletion",
        "Industry standard for professional traders",
        "Adjustable based on experience and strategy"
      ],
      example: "£10,000 account = Maximum £200 risk per trade"
    },
    {
      icon: <Target className="text-yellow-500" size={32} />,
      title: "Risk-Reward Ratio",
      description: "Maintain minimum 1:2 risk-to-reward ratio on all trades",
      details: [
        "Risk £100 to potentially make £200+",
        "Allows profitability even with 50% win rate",
        "Focus on quality setups with good R:R",
        "Compound returns through consistent application"
      ],
      example: "Risk 50 pips to target 100+ pips profit"
    },
    {
      icon: <TrendingDown className="text-yellow-500" size={32} />,
      title: "Maximum Drawdown",
      description: "Limit maximum portfolio drawdown to 10-15%",
      details: [
        "Stop trading if account drops 10% from peak",
        "Reassess strategy and risk parameters",
        "Psychological protection from major losses",
        "Preserve capital for future opportunities"
      ],
      example: "£10,000 account stops trading at £8,500"
    },
    {
      icon: <BarChart3 className="text-yellow-500" size={32} />,
      title: "Position Sizing",
      description: "Calculate position size based on risk, not gut feeling",
      details: [
        "Use ATR or pip value for calculations",
        "Account for currency pair volatility",
        "Adjust for market conditions",
        "Never use fixed lot sizes"
      ],
      example: "Higher volatility = Smaller position size"
    }
  ];

  const riskScenarios = [
    {
      scenario: "Conservative Trader",
      riskPerTrade: "1%",
      maxPositions: "2",
      maxDrawdown: "5%",
      description: "Suitable for beginners or those with limited capital",
      pros: ["Very low risk", "Steady growth", "Low stress"],
      cons: ["Slower returns", "Limited opportunities"]
    },
    {
      scenario: "Moderate Trader",
      riskPerTrade: "2%",
      maxPositions: "3",
      maxDrawdown: "10%",
      description: "Balanced approach for most retail traders",
      pros: ["Good risk/reward balance", "Reasonable growth", "Manageable stress"],
      cons: ["Moderate volatility", "Requires discipline"]
    },
    {
      scenario: "Aggressive Trader",
      riskPerTrade: "3-5%",
      maxPositions: "5",
      maxDrawdown: "15%",
      description: "For experienced traders with proven strategies",
      pros: ["Higher potential returns", "More opportunities"],
      cons: ["Higher risk", "Increased stress", "Larger drawdowns"]
    }
  ];

  const calculatePositionSize = () => {
    const { accountSize, riskPercentage, entryPrice, stopLoss } = riskCalculator;
    const riskAmount = (accountSize * riskPercentage) / 100;
    const pipValue = Math.abs(entryPrice - stopLoss);
    const positionSize = riskAmount / pipValue;
    
    return {
      riskAmount: riskAmount.toFixed(2),
      pipValue: pipValue.toFixed(4),
      positionSize: positionSize.toFixed(0),
      lotSize: (positionSize / 100000).toFixed(2)
    };
  };

  const calculationResults = calculatePositionSize();

  const riskManagementTools = [
    {
      name: "Position Size Calculator",
      description: "Calculate optimal position size based on risk parameters",
      features: ["Risk percentage input", "Stop loss calculator", "Multi-currency support"],
      icon: <Calculator className="text-blue-900" size={32} />
    },
    {
      name: "Risk-Reward Analyzer",
      description: "Analyze potential trades before execution",
      features: ["R:R ratio calculation", "Probability analysis", "Expected value"],
      icon: <Target className="text-blue-900" size={32} />
    },
    {
      name: "Portfolio Risk Monitor",
      description: "Track overall portfolio risk and correlation",
      features: ["Real-time monitoring", "Correlation analysis", "Risk alerts"],
      icon: <Shield className="text-blue-900" size={32} />
    },
    {
      name: "Drawdown Tracker",
      description: "Monitor account drawdown and recovery",
      features: ["Peak-to-trough tracking", "Recovery analysis", "Risk alerts"],
      icon: <TrendingDown className="text-blue-900" size={32} />
    }
  ];

  const commonMistakes = [
    {
      mistake: "Risking Too Much Per Trade",
      consequence: "Account blown in a few bad trades",
      solution: "Stick to 1-2% risk per trade maximum",
      severity: "Critical"
    },
    {
      mistake: "No Stop Losses",
      consequence: "Unlimited downside risk",
      solution: "Always set stop loss before entering trade",
      severity: "Critical"
    },
    {
      mistake: "Ignoring Correlation",
      consequence: "Multiple positions in same direction",
      solution: "Monitor currency correlation and diversify",
      severity: "High"
    },
    {
      mistake: "Emotional Position Sizing",
      consequence: "Inconsistent risk management",
      solution: "Use systematic position sizing formulas",
      severity: "High"
    },
    {
      mistake: "No Maximum Drawdown Limit",
      consequence: "Psychological damage and poor decisions",
      solution: "Set and respect maximum drawdown limits",
      severity: "Medium"
    },
    {
      mistake: "Overtrading",
      consequence: "Increased risk exposure and costs",
      solution: "Quality over quantity approach",
      severity: "Medium"
    }
  ];

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Risk Management Guidelines - Gary Robinson Trading</title>
      <meta name="description" content="Comprehensive risk management guidelines for trading success. Learn position sizing, risk-reward ratios, drawdown limits, and professional risk management techniques." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-red-900" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Risk Management Guidelines
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Master the art of capital preservation with professional risk management techniques that separate successful traders from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Percent className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">2%</div>
              <p className="text-gray-200">Max Risk Per Trade</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Target className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">1:2</div>
              <p className="text-gray-200">Min Risk:Reward</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <TrendingDown className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">10%</div>
              <p className="text-gray-200">Max Drawdown</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BarChart3 className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">3</div>
              <p className="text-gray-200">Max Positions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Risk Principles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Core Risk Management Principles
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              These fundamental principles form the foundation of professional risk management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {riskPrinciples.map((principle, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {principle.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-700 mb-4">{principle.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {principle.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Example:</h4>
                  <p className="text-blue-800 text-sm">{principle.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Calculator */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Position Size Calculator
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Calculate your optimal position size based on risk management principles
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calculator Inputs */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Trade Parameters</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Size (£)
                      </label>
                      <input
                        type="number"
                        value={riskCalculator.accountSize}
                        onChange={(e) => setRiskCalculator({...riskCalculator, accountSize: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Risk Percentage (%)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={riskCalculator.riskPercentage}
                        onChange={(e) => setRiskCalculator({...riskCalculator, riskPercentage: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Entry Price
                      </label>
                      <input
                        type="number"
                        step="0.0001"
                        value={riskCalculator.entryPrice}
                        onChange={(e) => setRiskCalculator({...riskCalculator, entryPrice: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Stop Loss Price
                      </label>
                      <input
                        type="number"
                        step="0.0001"
                        value={riskCalculator.stopLoss}
                        onChange={(e) => setRiskCalculator({...riskCalculator, stopLoss: parseFloat(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Calculator Results */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Calculation Results</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Risk Amount</div>
                      <div className="text-2xl font-bold text-red-600">£{calculationResults.riskAmount}</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Distance to Stop Loss</div>
                      <div className="text-2xl font-bold text-blue-600">{calculationResults.pipValue}</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Position Size (Units)</div>
                      <div className="text-2xl font-bold text-green-600">{calculationResults.positionSize}</div>
                    </div>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="text-sm text-gray-600">Lot Size</div>
                      <div className="text-2xl font-bold text-purple-600">{calculationResults.lotSize}</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <div className="flex items-start">
                      <AlertTriangle className="text-yellow-600 mr-2 mt-1 flex-shrink-0" size={16} />
                      <div className="text-sm text-yellow-800">
                        <strong>Remember:</strong> This calculation assumes EUR/USD. Adjust for other currency pairs and account currency differences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Scenarios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Risk Management Scenarios
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose the risk management approach that matches your experience and goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {riskScenarios.map((scenario, index) => (
              <div key={index} className={`rounded-2xl p-6 shadow-lg ${
                index === 1 ? 'bg-blue-50 border-2 border-blue-500' : 'bg-gray-50'
              }`}>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{scenario.scenario}</h3>
                <p className="text-gray-700 mb-6">{scenario.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-blue-900">{scenario.riskPerTrade}</div>
                    <div className="text-xs text-gray-600">Risk/Trade</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-900">{scenario.maxPositions}</div>
                    <div className="text-xs text-gray-600">Max Positions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-900">{scenario.maxDrawdown}</div>
                    <div className="text-xs text-gray-600">Max Drawdown</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">Pros:</h4>
                  <ul className="space-y-1">
                    {scenario.pros.map((pro, idx) => (
                      <li key={idx} className="text-sm text-green-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-red-800 mb-2">Cons:</h4>
                  <ul className="space-y-1">
                    {scenario.cons.map((con, idx) => (
                      <li key={idx} className="text-sm text-red-700 flex items-center">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant={index === 1 ? "secondary" : "outline"} 
                  fullWidth
                >
                  {index === 1 ? "Recommended" : "Learn More"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management Tools */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Professional Risk Management Tools
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Advanced tools to help you implement and monitor your risk management strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {riskManagementTools.map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {tool.icon}
                </div>
                
                <h3 className="font-bold text-blue-900 text-center mb-3">{tool.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm">Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-center">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="outline" fullWidth size="sm">
                  Access Tool
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Common Risk Management Mistakes
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Learn from these common mistakes to protect your trading capital
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <AlertTriangle className="text-red-500 mr-2" size={20} />
                        <h3 className="font-bold text-blue-900">{mistake.mistake}</h3>
                        <span className={`ml-4 px-2 py-1 rounded-full text-xs font-bold ${
                          mistake.severity === 'Critical' ? 'bg-red-100 text-red-800' :
                          mistake.severity === 'High' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {mistake.severity}
                        </span>
                      </div>
                      <p className="text-red-700 mb-3">
                        <strong>Consequence:</strong> {mistake.consequence}
                      </p>
                      <p className="text-green-700">
                        <strong>Solution:</strong> {mistake.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Risk Monitor */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Portfolio Risk Monitor
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Real-time monitoring of your overall portfolio risk exposure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900 mb-2">{portfolioData.totalPositions}</div>
                  <div className="text-sm text-gray-600">Active Positions</div>
                </div>
                
                <div className="text-center bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">{portfolioData.currentRisk}%</div>
                  <div className="text-sm text-gray-600">Current Risk</div>
                </div>
                
                <div className="text-center bg-yellow-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600 mb-2">{portfolioData.maxRisk}%</div>
                  <div className="text-sm text-gray-600">Maximum Risk</div>
                </div>
                
                <div className="text-center bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">{portfolioData.correlationRisk}</div>
                  <div className="text-sm text-gray-600">Correlation Risk</div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Portfolio Risk Usage</span>
                  <span className="text-sm text-gray-600">{portfolioData.currentRisk}% of {portfolioData.maxRisk}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      portfolioData.currentRisk / portfolioData.maxRisk > 0.8 ? 'bg-red-500' :
                      portfolioData.currentRisk / portfolioData.maxRisk > 0.6 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${(portfolioData.currentRisk / portfolioData.maxRisk) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Risk Status: Good</h4>
                <p className="text-blue-800 text-sm">
                  Your current risk exposure is within acceptable limits. You have room for {(portfolioData.maxRisk - portfolioData.currentRisk).toFixed(1)}% additional risk.
                </p>
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
              Master Professional Risk Management
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join our comprehensive courses to learn advanced risk management techniques that protect and grow your trading capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View Risk Management Course
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Get Personal Risk Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskManagement;