import React, { useState } from 'react';
import { TrendingUp, BarChart3, Target, Shield, Clock, Star, Download, Play, Filter, Search, ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';

const TradingStrategies = () => {
  const [selectedMarket, setSelectedMarket] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [expandedStrategy, setExpandedStrategy] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const marketFilters = [
    { id: 'all', name: 'All Markets' },
    { id: 'forex', name: 'Forex' },
    { id: 'futures', name: 'Futures' },
    { id: 'crypto', name: 'Cryptocurrency' },
    { id: 'indices', name: 'Indices' }
  ];

  const timeframeFilters = [
    { id: 'all', name: 'All Timeframes' },
    { id: 'scalping', name: 'Scalping (M1-M15)' },
    { id: 'intraday', name: 'Intraday (H1-H4)' },
    { id: 'swing', name: 'Swing (Daily)' },
    { id: 'position', name: 'Position (Weekly+)' }
  ];

  const difficultyFilters = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const tradingStrategies = [
    {
      id: 1,
      name: "Trend Following Momentum",
      market: "forex",
      timeframe: "swing",
      difficulty: "beginner",
      winRate: "68%",
      riskReward: "1:2.5",
      avgTrade: "2.3%",
      maxDrawdown: "8.5%",
      description: "A robust trend-following strategy that captures major market moves using moving averages and momentum indicators.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.8,
      backtestPeriod: "5 years",
      totalTrades: 1247,
      profitFactor: 2.1,
      sharpeRatio: 1.85,
      setup: {
        entry: [
          "Price above 50 EMA and 200 EMA",
          "RSI above 50",
          "MACD line above signal line",
          "Volume confirmation on breakout"
        ],
        exit: [
          "Price closes below 20 EMA",
          "RSI drops below 30",
          "MACD bearish crossover",
          "Stop loss at 2% below entry"
        ],
        riskManagement: [
          "Risk 1% of account per trade",
          "Position size based on ATR",
          "Trailing stop at 1.5 ATR",
          "Maximum 3 concurrent positions"
        ]
      },
      indicators: ["50 EMA", "200 EMA", "RSI", "MACD", "Volume"],
      markets: ["EUR/USD", "GBP/USD", "USD/JPY", "AUD/USD"],
      timeframes: ["H4", "Daily"],
      featured: true
    },
    {
      id: 2,
      name: "Breakout Scalping System",
      market: "futures",
      timeframe: "scalping",
      difficulty: "advanced",
      winRate: "72%",
      riskReward: "1:1.8",
      avgTrade: "0.8%",
      maxDrawdown: "5.2%",
      description: "High-frequency breakout strategy designed for volatile futures markets with tight risk control.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.6,
      backtestPeriod: "3 years",
      totalTrades: 3456,
      profitFactor: 1.9,
      sharpeRatio: 2.1,
      setup: {
        entry: [
          "Price breaks above/below key resistance/support",
          "Volume spike confirmation",
          "Bollinger Bands expansion",
          "ATR above 20-period average"
        ],
        exit: [
          "Target at 2x ATR from entry",
          "Stop loss at 1x ATR",
          "Time-based exit after 4 hours",
          "Reversal signal on lower timeframe"
        ],
        riskManagement: [
          "Risk 0.5% per trade",
          "Maximum 5 trades per session",
          "No trading during news events",
          "Daily loss limit of 2%"
        ]
      },
      indicators: ["Bollinger Bands", "ATR", "Volume", "Support/Resistance"],
      markets: ["ES", "NQ", "YM", "RTY"],
      timeframes: ["M5", "M15"],
      featured: false
    },
    {
      id: 3,
      name: "Crypto Momentum Swing",
      market: "crypto",
      timeframe: "swing",
      difficulty: "intermediate",
      winRate: "65%",
      riskReward: "1:3.2",
      avgTrade: "4.1%",
      maxDrawdown: "12.8%",
      description: "Momentum-based swing trading strategy optimized for cryptocurrency market volatility and 24/7 trading.",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.7,
      backtestPeriod: "4 years",
      totalTrades: 892,
      profitFactor: 2.3,
      sharpeRatio: 1.6,
      setup: {
        entry: [
          "Price breaks above 21 EMA with momentum",
          "RSI between 50-70",
          "Volume above 50-period average",
          "Bullish divergence on MACD"
        ],
        exit: [
          "Price closes below 13 EMA",
          "RSI reaches overbought (>80)",
          "Bearish divergence appears",
          "Stop loss at 4% below entry"
        ],
        riskManagement: [
          "Risk 2% per trade",
          "Position sizing based on volatility",
          "Trailing stop at 8%",
          "Maximum 4 positions"
        ]
      },
      indicators: ["21 EMA", "13 EMA", "RSI", "MACD", "Volume"],
      markets: ["BTC/USD", "ETH/USD", "ADA/USD", "SOL/USD"],
      timeframes: ["H4", "Daily"],
      featured: true
    },
    {
      id: 4,
      name: "Mean Reversion Range Trading",
      market: "forex",
      timeframe: "intraday",
      difficulty: "intermediate",
      winRate: "74%",
      riskReward: "1:1.5",
      avgTrade: "1.2%",
      maxDrawdown: "6.8%",
      description: "Range-bound trading strategy that profits from price reversals at key support and resistance levels.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.5,
      backtestPeriod: "6 years",
      totalTrades: 2134,
      profitFactor: 1.7,
      sharpeRatio: 1.9,
      setup: {
        entry: [
          "Price touches support/resistance level",
          "RSI oversold (<30) or overbought (>70)",
          "Stochastic showing reversal signal",
          "Candlestick reversal pattern"
        ],
        exit: [
          "Price reaches opposite range boundary",
          "RSI returns to neutral zone",
          "Time-based exit after 8 hours",
          "Stop loss beyond range boundary"
        ],
        riskManagement: [
          "Risk 1.5% per trade",
          "Position size based on range width",
          "No trading during range breakouts",
          "Maximum 2 range trades simultaneously"
        ]
      },
      indicators: ["Support/Resistance", "RSI", "Stochastic", "Candlestick Patterns"],
      markets: ["EUR/USD", "GBP/JPY", "USD/CHF", "AUD/NZD"],
      timeframes: ["H1", "H4"],
      featured: false
    },
    {
      id: 5,
      name: "Index Futures Momentum",
      market: "indices",
      timeframe: "intraday",
      difficulty: "advanced",
      winRate: "69%",
      riskReward: "1:2.8",
      avgTrade: "2.8%",
      maxDrawdown: "9.2%",
      description: "Professional momentum strategy for index futures using institutional order flow analysis.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.9,
      backtestPeriod: "7 years",
      totalTrades: 1678,
      profitFactor: 2.4,
      sharpeRatio: 2.2,
      setup: {
        entry: [
          "Price breaks above VWAP with volume",
          "Institutional order flow bullish",
          "Market structure shift confirmed",
          "Momentum divergence on lower timeframe"
        ],
        exit: [
          "Price closes below VWAP",
          "Volume dries up significantly",
          "Institutional selling pressure",
          "Stop loss at 1.5% below entry"
        ],
        riskManagement: [
          "Risk 1.2% per trade",
          "Position sizing based on market volatility",
          "Trailing stop at 2%",
          "No trading during FOMC meetings"
        ]
      },
      indicators: ["VWAP", "Order Flow", "Market Profile", "Volume"],
      markets: ["S&P 500", "NASDAQ", "FTSE 100", "DAX"],
      timeframes: ["M30", "H1"],
      featured: true
    },
    {
      id: 6,
      name: "Gold Futures Breakout",
      market: "futures",
      timeframe: "position",
      difficulty: "beginner",
      winRate: "63%",
      riskReward: "1:4.2",
      avgTrade: "5.6%",
      maxDrawdown: "11.5%",
      description: "Long-term breakout strategy for gold futures based on fundamental analysis and technical confirmation.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4.4,
      backtestPeriod: "10 years",
      totalTrades: 456,
      profitFactor: 2.6,
      sharpeRatio: 1.4,
      setup: {
        entry: [
          "Price breaks above major resistance",
          "Fundamental drivers support bullish move",
          "Weekly close above breakout level",
          "Volume confirmation on breakout"
        ],
        exit: [
          "Fundamental outlook changes",
          "Weekly close below key support",
          "Target reached (4x risk)",
          "Stop loss at 3% below entry"
        ],
        riskManagement: [
          "Risk 2.5% per trade",
          "Maximum 2 positions",
          "Fundamental analysis required",
          "Long-term trend following only"
        ]
      },
      indicators: ["Weekly Charts", "Volume", "Fundamental Analysis", "Support/Resistance"],
      markets: ["Gold Futures", "Silver Futures"],
      timeframes: ["Daily", "Weekly"],
      featured: false
    }
  ];

  const filteredStrategies = tradingStrategies.filter(strategy => {
    const matchesMarket = selectedMarket === 'all' || strategy.market === selectedMarket;
    const matchesTimeframe = selectedTimeframe === 'all' || strategy.timeframe === selectedTimeframe;
    const matchesDifficulty = selectedDifficulty === 'all' || strategy.difficulty === selectedDifficulty;
    const matchesSearch = strategy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         strategy.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesMarket && matchesTimeframe && matchesDifficulty && matchesSearch;
  });

  const featuredStrategies = tradingStrategies.filter(strategy => strategy.featured);

  const toggleStrategy = (strategyId) => {
    setExpandedStrategy(expandedStrategy === strategyId ? null : strategyId);
  };

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Strategies - Gary Robinson Trading</title>
      <meta name="description" content="Professional trading strategies with backtested results, implementation guides, and risk parameters. Proven strategies for forex, futures, crypto, and indices." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Trading Strategies
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Proven trading strategies with detailed backtesting results, implementation guides, and risk management parameters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Target className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">15+</div>
              <p className="text-gray-200">Proven Strategies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BarChart3 className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">70%</div>
              <p className="text-gray-200">Average Win Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <TrendingUp className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">1:2.5</div>
              <p className="text-gray-200">Risk:Reward Ratio</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Shield className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">5+</div>
              <p className="text-gray-200">Years Backtested</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Strategies */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Featured Trading Strategies
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our most successful and popular trading strategies with proven track records
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredStrategies.map((strategy) => (
              <div key={strategy.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={strategy.image} 
                    alt={strategy.name} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      strategy.difficulty === 'beginner' ? 'bg-green-500 text-white' :
                      strategy.difficulty === 'intermediate' ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {strategy.difficulty.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-blue-900 text-lg">{strategy.name}</h3>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 mr-1" size={14} fill="#EAB308" />
                      <span className="text-sm font-medium">{strategy.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{strategy.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-green-50 p-3 rounded-lg">
                      <div className="font-bold text-green-600">{strategy.winRate}</div>
                      <div className="text-xs text-gray-600">Win Rate</div>
                    </div>
                    <div className="text-center bg-blue-50 p-3 rounded-lg">
                      <div className="font-bold text-blue-600">{strategy.riskReward}</div>
                      <div className="text-xs text-gray-600">Risk:Reward</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="capitalize">{strategy.market}</span>
                    <span className="capitalize">{strategy.timeframe}</span>
                  </div>
                  
                  <Button variant="secondary" fullWidth>
                    View Strategy Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Database */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Complete Strategy Database
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          {/* Filters */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search strategies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {marketFilters.map((filter) => (
                  <option key={filter.id} value={filter.id}>{filter.name}</option>
                ))}
              </select>
              
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {timeframeFilters.map((filter) => (
                  <option key={filter.id} value={filter.id}>{filter.name}</option>
                ))}
              </select>
              
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {difficultyFilters.map((filter) => (
                  <option key={filter.id} value={filter.id}>{filter.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Strategy List */}
          <div className="space-y-6">
            {filteredStrategies.map((strategy) => (
              <div key={strategy.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="font-bold text-blue-900 text-xl mr-4">{strategy.name}</h3>
                        <div className="flex items-center">
                          <Star className="text-yellow-500 mr-1" size={16} fill="#EAB308" />
                          <span className="text-sm font-medium">{strategy.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{strategy.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          strategy.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                          strategy.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {strategy.difficulty.toUpperCase()}
                        </span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {strategy.market.toUpperCase()}
                        </span>
                        <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                          {strategy.timeframe.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:ml-8">
                      <div className="text-center bg-white p-3 rounded-lg">
                        <div className="font-bold text-green-600">{strategy.winRate}</div>
                        <div className="text-xs text-gray-600">Win Rate</div>
                      </div>
                      <div className="text-center bg-white p-3 rounded-lg">
                        <div className="font-bold text-blue-600">{strategy.riskReward}</div>
                        <div className="text-xs text-gray-600">Risk:Reward</div>
                      </div>
                      <div className="text-center bg-white p-3 rounded-lg">
                        <div className="font-bold text-purple-600">{strategy.avgTrade}</div>
                        <div className="text-xs text-gray-600">Avg Trade</div>
                      </div>
                      <div className="text-center bg-white p-3 rounded-lg">
                        <div className="font-bold text-red-600">{strategy.maxDrawdown}</div>
                        <div className="text-xs text-gray-600">Max DD</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <Button variant="secondary" size="sm">
                        <Download className="mr-2" size={16} />
                        Download Guide
                      </Button>
                      <Button variant="outline" size="sm">
                        <Play className="mr-2" size={16} />
                        Watch Tutorial
                      </Button>
                    </div>
                    
                    <button
                      onClick={() => toggleStrategy(strategy.id)}
                      className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      <span className="mr-2">View Details</span>
                      {expandedStrategy === strategy.id ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  </div>
                </div>
                
                {/* Expanded Details */}
                {expandedStrategy === strategy.id && (
                  <div className="border-t border-gray-200 p-6 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Setup Rules */}
                      <div>
                        <h4 className="font-bold text-blue-900 mb-4">Entry Setup</h4>
                        <ul className="space-y-2">
                          {strategy.setup.entry.map((rule, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                              <span className="text-gray-700">{rule}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-bold text-blue-900 mb-4 mt-6">Exit Rules</h4>
                        <ul className="space-y-2">
                          {strategy.setup.exit.map((rule, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                              <span className="text-gray-700">{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Risk Management */}
                      <div>
                        <h4 className="font-bold text-blue-900 mb-4">Risk Management</h4>
                        <ul className="space-y-2">
                          {strategy.setup.riskManagement.map((rule, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <Shield className="text-yellow-500 mr-2 mt-1 flex-shrink-0" size={14} />
                              <span className="text-gray-700">{rule}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-bold text-blue-900 mb-4 mt-6">Indicators Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {strategy.indicators.map((indicator, idx) => (
                            <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                              {indicator}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Performance Stats */}
                      <div>
                        <h4 className="font-bold text-blue-900 mb-4">Backtest Results</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Backtest Period:</span>
                            <span className="font-medium">{strategy.backtestPeriod}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Trades:</span>
                            <span className="font-medium">{strategy.totalTrades}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Profit Factor:</span>
                            <span className="font-medium text-green-600">{strategy.profitFactor}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Sharpe Ratio:</span>
                            <span className="font-medium text-blue-600">{strategy.sharpeRatio}</span>
                          </div>
                        </div>
                        
                        <h4 className="font-bold text-blue-900 mb-4 mt-6">Best Markets</h4>
                        <div className="space-y-1">
                          {strategy.markets.map((market, idx) => (
                            <div key={idx} className="text-sm text-gray-700">{market}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Development */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Custom Strategy Development
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Work with Gary to develop personalized trading strategies tailored to your goals and risk tolerance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <Target className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Strategy Analysis</h3>
              <p className="text-gray-700 mb-4">Comprehensive analysis of your current trading approach and identification of improvement areas.</p>
              <div className="text-2xl font-bold text-blue-900 mb-4">£497</div>
              <Button variant="outline" fullWidth>
                Get Analysis
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center border-2 border-yellow-500">
              <BarChart3 className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Custom Development</h3>
              <p className="text-gray-700 mb-4">Complete custom strategy development with backtesting and optimization for your specific needs.</p>
              <div className="text-2xl font-bold text-blue-900 mb-4">£1,997</div>
              <Button variant="secondary" fullWidth>
                Start Development
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <TrendingUp className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Strategy Coaching</h3>
              <p className="text-gray-700 mb-4">Ongoing coaching and refinement of your trading strategies with monthly reviews.</p>
              <div className="text-2xl font-bold text-blue-900 mb-4">£299/month</div>
              <Button variant="outline" fullWidth>
                Start Coaching
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join our comprehensive courses to learn how to implement and optimize these proven trading strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View Trading Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Get Personal Mentorship
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingStrategies;