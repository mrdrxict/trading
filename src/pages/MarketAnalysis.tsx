import React, { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Activity, Download, Settings, Search, Filter, Calendar, Clock, Globe } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const MarketAnalysis = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [selectedMarket, setSelectedMarket] = useState('forex');
  const [watchlist, setWatchlist] = useState([
    { symbol: 'EUR/USD', price: '1.0892', change: '+0.23%', trend: 'up' },
    { symbol: 'GBP/USD', price: '1.2654', change: '-0.15%', trend: 'down' },
    { symbol: 'USD/JPY', price: '148.75', change: '+0.41%', trend: 'up' },
    { symbol: 'AUD/USD', price: '0.6789', change: '+0.12%', trend: 'up' }
  ]);

  const [marketData, setMarketData] = useState({
    forex: [
      { symbol: 'EUR/USD', price: '1.0892', change: '+0.23%', volume: '1.2B', trend: 'up' },
      { symbol: 'GBP/USD', price: '1.2654', change: '-0.15%', volume: '890M', trend: 'down' },
      { symbol: 'USD/JPY', price: '148.75', change: '+0.41%', volume: '1.1B', trend: 'up' },
      { symbol: 'USD/CHF', price: '0.8923', change: '+0.18%', volume: '650M', trend: 'up' },
      { symbol: 'AUD/USD', price: '0.6789', change: '+0.12%', volume: '720M', trend: 'up' },
      { symbol: 'USD/CAD', price: '1.3456', change: '-0.08%', volume: '580M', trend: 'down' }
    ],
    commodities: [
      { symbol: 'Gold', price: '2,018', change: '+0.67%', volume: '45K', trend: 'up' },
      { symbol: 'Silver', price: '23.45', change: '+1.23%', volume: '12K', trend: 'up' },
      { symbol: 'Oil (Brent)', price: '78.32', change: '-0.34%', volume: '89K', trend: 'down' },
      { symbol: 'Natural Gas', price: '2.89', change: '+2.15%', volume: '23K', trend: 'up' },
      { symbol: 'Copper', price: '3.78', change: '+0.45%', volume: '34K', trend: 'up' },
      { symbol: 'Platinum', price: '945.60', change: '-0.12%', volume: '8K', trend: 'down' }
    ],
    indices: [
      { symbol: 'FTSE 100', price: '7,485', change: '+0.89%', volume: '2.3B', trend: 'up' },
      { symbol: 'S&P 500', price: '4,785', change: '+0.67%', volume: '3.1B', trend: 'up' },
      { symbol: 'NASDAQ', price: '15,234', change: '+1.23%', volume: '2.8B', trend: 'up' },
      { symbol: 'DAX', price: '16,789', change: '+0.45%', volume: '1.9B', trend: 'up' },
      { symbol: 'Nikkei 225', price: '32,456', change: '+0.78%', volume: '1.2B', trend: 'up' },
      { symbol: 'ASX 200', price: '7,123', change: '+0.34%', volume: '890M', trend: 'up' }
    ],
    crypto: [
      { symbol: 'BTC/USD', price: '42,150', change: '+2.34%', volume: '12.5B', trend: 'up' },
      { symbol: 'ETH/USD', price: '2,250', change: '+3.45%', volume: '8.9B', trend: 'up' },
      { symbol: 'ADA/USD', price: '0.45', change: '+5.67%', volume: '2.1B', trend: 'up' },
      { symbol: 'SOL/USD', price: '98.75', change: '+4.23%', volume: '1.8B', trend: 'up' },
      { symbol: 'DOT/USD', price: '6.78', change: '+2.89%', volume: '890M', trend: 'up' },
      { symbol: 'LINK/USD', price: '14.56', change: '+1.67%', volume: '1.2B', trend: 'up' }
    ]
  });

  const technicalIndicators = [
    {
      name: 'Moving Average (MA)',
      description: 'Smooths price data to identify trend direction',
      formula: 'MA = (P1 + P2 + ... + Pn) / n',
      usage: 'Trend identification, support/resistance levels',
      timeframes: ['5m', '15m', '1h', '4h', '1D'],
      bullish: 'Price above MA',
      bearish: 'Price below MA'
    },
    {
      name: 'Relative Strength Index (RSI)',
      description: 'Momentum oscillator measuring speed and change of price movements',
      formula: 'RSI = 100 - (100 / (1 + RS))',
      usage: 'Overbought/oversold conditions',
      timeframes: ['15m', '1h', '4h', '1D'],
      bullish: 'RSI < 30 (oversold)',
      bearish: 'RSI > 70 (overbought)'
    },
    {
      name: 'MACD',
      description: 'Moving Average Convergence Divergence - trend following momentum indicator',
      formula: 'MACD = EMA(12) - EMA(26)',
      usage: 'Signal line crossovers, divergences',
      timeframes: ['1h', '4h', '1D', '1W'],
      bullish: 'MACD above signal line',
      bearish: 'MACD below signal line'
    },
    {
      name: 'Bollinger Bands',
      description: 'Volatility indicator with upper and lower bands',
      formula: 'Upper Band = MA + (2 × Standard Deviation)',
      usage: 'Volatility measurement, mean reversion',
      timeframes: ['15m', '1h', '4h', '1D'],
      bullish: 'Price near lower band',
      bearish: 'Price near upper band'
    }
  ];

  const economicEvents = [
    {
      time: '09:30',
      currency: 'GBP',
      event: 'UK GDP Growth Rate',
      impact: 'high',
      forecast: '0.2%',
      previous: '0.1%'
    },
    {
      time: '14:30',
      currency: 'USD',
      event: 'US Non-Farm Payrolls',
      impact: 'high',
      forecast: '180K',
      previous: '175K'
    },
    {
      time: '15:45',
      currency: 'EUR',
      event: 'ECB Interest Rate Decision',
      impact: 'high',
      forecast: '4.50%',
      previous: '4.50%'
    },
    {
      time: '16:00',
      currency: 'USD',
      event: 'Federal Reserve Speech',
      impact: 'medium',
      forecast: '-',
      previous: '-'
    }
  ];

  const marketSentiment = {
    forex: { bullish: 65, bearish: 35 },
    commodities: { bullish: 72, bearish: 28 },
    indices: { bullish: 78, bearish: 22 },
    crypto: { bullish: 68, bearish: 32 }
  };

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setMarketData(prevData => {
        const newData = { ...prevData };
        Object.keys(newData).forEach(market => {
          newData[market] = newData[market].map(item => {
            const currentPrice = parseFloat(item.price.replace(/,/g, ''));
            const changePercent = (Math.random() * 0.5 - 0.25);
            const isPositive = Math.random() > 0.4; // 60% chance of positive change
            
            let newPrice = isPositive 
              ? currentPrice * (1 + Math.abs(changePercent) / 100) 
              : currentPrice * (1 - Math.abs(changePercent) / 100);
            
            // Format the price based on the symbol
            let formattedPrice;
            if (item.symbol === "BTC/USD" || item.symbol === "ETH/USD") {
              formattedPrice = newPrice.toFixed(0);
            } else if (item.symbol.includes("FTSE") || item.symbol.includes("S&P") || 
                      item.symbol.includes("NASDAQ") || item.symbol.includes("DAX") || 
                      item.symbol.includes("Nikkei") || item.symbol.includes("ASX")) {
              formattedPrice = newPrice.toFixed(0);
            } else if (item.symbol === "Gold" || item.symbol === "Silver" || 
                      item.symbol === "Oil" || item.symbol === "Platinum") {
              formattedPrice = newPrice.toFixed(2);
            } else if (item.symbol.includes("ADA") || item.symbol.includes("DOT")) {
              formattedPrice = newPrice.toFixed(2);
            } else {
              formattedPrice = newPrice.toFixed(4);
            }
            
            return {
              ...item,
              price: formattedPrice,
              change: `${isPositive ? '+' : '-'}${Math.abs(changePercent).toFixed(2)}%`,
              trend: isPositive ? 'up' : 'down'
            };
          });
        });
        return newData;
      });
      
      // Also update watchlist
      setWatchlist(prevWatchlist => {
        return prevWatchlist.map(item => {
          const currentPrice = parseFloat(item.price);
          const changePercent = (Math.random() * 0.5 - 0.25);
          const isPositive = Math.random() > 0.4;
          
          let newPrice = isPositive 
            ? currentPrice * (1 + Math.abs(changePercent) / 100) 
            : currentPrice * (1 - Math.abs(changePercent) / 100);
          
          return {
            ...item,
            price: newPrice.toFixed(4),
            change: `${isPositive ? '+' : '-'}${Math.abs(changePercent).toFixed(2)}%`,
            trend: isPositive ? 'up' : 'down'
          };
        });
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const exportToPDF = () => {
    alert('Exporting market analysis to PDF...');
  };

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Market Analysis Tools - Gary Robinson Trading</title>
      <meta name="description" content="Professional market analysis tools with real-time data, technical indicators, and economic calendar. Advanced charting and screening tools for forex, commodities, indices, and crypto." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Market Analysis Tools
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional-grade market analysis tools with real-time data, advanced charting, and comprehensive technical indicators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BarChart3 className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">50+</div>
              <p className="text-gray-200">Technical Indicators</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Globe className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">4</div>
              <p className="text-gray-200">Market Categories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Clock className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">24/7</div>
              <p className="text-gray-200">Real-time Data</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Activity className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Live</div>
              <p className="text-gray-200">Market Screener</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Dashboard */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Live Market Dashboard
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Real-time market data with advanced filtering and customizable watchlists
            </p>
          </div>

          {/* Market Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {Object.keys(marketData).map((market) => (
                  <button
                    key={market}
                    onClick={() => setSelectedMarket(market)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedMarket === market
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {market.charAt(0).toUpperCase() + market.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Search className="text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search instruments..."
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2" size={16} />
                  Filter
                </Button>
                <Button variant="outline" size="sm" onClick={exportToPDF}>
                  <Download className="mr-2" size={16} />
                  Export
                </Button>
              </div>
            </div>

            {/* Market Data Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Symbol</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Price</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Change</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Volume</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Trend</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData[selectedMarket].map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-blue-900">{item.symbol}</td>
                      <td className="py-3 px-4 text-right font-mono">{item.price}</td>
                      <td className={`py-3 px-4 text-right font-medium ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.change}
                      </td>
                      <td className="py-3 px-4 text-right text-gray-600">{item.volume}</td>
                      <td className="py-3 px-4 text-center">
                        {item.trend === 'up' ? (
                          <TrendingUp className="text-green-600 mx-auto\" size={20} />
                        ) : (
                          <TrendingDown className="text-red-600 mx-auto" size={20} />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Button variant="outline" size="sm">
                          Add to Watchlist
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Market Sentiment */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(marketSentiment).map(([market, sentiment]) => (
              <div key={market} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-blue-900 mb-4 capitalize">{market} Sentiment</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-600">Bullish</span>
                    <span className="font-bold text-green-600">{sentiment.bullish}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${sentiment.bullish}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600">Bearish</span>
                    <span className="font-bold text-red-600">{sentiment.bearish}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Indicators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Technical Indicators Guide
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive guide to the most effective technical indicators for market analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalIndicators.map((indicator, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{indicator.name}</h3>
                <p className="text-gray-700 mb-4">{indicator.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-700">Formula: </span>
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm">{indicator.formula}</code>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-700">Best Usage: </span>
                    <span className="text-gray-600">{indicator.usage}</span>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-700">Timeframes: </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {indicator.timeframes.map((tf, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tf}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <span className="font-semibold text-green-800">Bullish Signal:</span>
                      <p className="text-green-700 text-sm mt-1">{indicator.bullish}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <span className="font-semibold text-red-800">Bearish Signal:</span>
                      <p className="text-red-700 text-sm mt-1">{indicator.bearish}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Calendar */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Economic Calendar
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Stay informed about upcoming economic events that could impact the markets
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-blue-900 flex items-center">
                <Calendar className="mr-2" size={24} />
                Today's Economic Events
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Timezone:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>GMT (London)</option>
                  <option>EST (New York)</option>
                  <option>JST (Tokyo)</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Currency</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Event</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Impact</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Forecast</th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">Previous</th>
                  </tr>
                </thead>
                <tbody>
                  {economicEvents.map((event, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono">{event.time}</td>
                      <td className="py-3 px-4">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                          {event.currency}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium">{event.event}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          event.impact === 'high' 
                            ? 'bg-red-100 text-red-800' 
                            : event.impact === 'medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {event.impact.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono">{event.forecast}</td>
                      <td className="py-3 px-4 text-right font-mono text-gray-600">{event.previous}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Master Market Analysis?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join Gary Robinson's comprehensive trading courses and learn to use these professional tools effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="secondary" size="lg">
                  View Trading Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Book Free Analysis Session
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketAnalysis;