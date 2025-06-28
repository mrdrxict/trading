import React, { useState, useEffect } from 'react';
import { Calendar, TrendingUp, BarChart3, ArrowRight, Clock } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const MarketInsights = () => {
  const [marketData, setMarketData] = useState([
    { pair: "EUR/USD", price: "1.0721", change: "+0.15%", trend: "up" },
    { pair: "GBP/USD", price: "1.2683", change: "-0.12%", trend: "down" },
    { pair: "USD/JPY", price: "151.62", change: "+0.23%", trend: "up" },
    { pair: "BTC/USD", price: "67,245", change: "+1.87%", trend: "up" },
    { pair: "Gold", price: "2,336", change: "+0.42%", trend: "up" },
    { pair: "S&P 500", price: "5,234", change: "+0.65%", trend: "up" }
  ]);

  const insights = [
    {
      id: 5,
      title: "EUR/USD Technical Analysis: Key Levels to Watch",
      excerpt: "The EUR/USD pair is approaching a critical resistance level at 1.0750. Here's what traders need to know about the upcoming price action...",
      date: "2024-06-22",
      category: "Forex Analysis",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Gold Futures: Inflation Hedge or Risk Asset?",
      excerpt: "With recent economic data showing mixed signals, gold futures present an interesting opportunity. Our analysis reveals key entry points...",
      date: "2024-06-20",
      category: "Futures Trading",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 7,
      title: "Bitcoin's Next Move: Technical and Fundamental Outlook",
      excerpt: "Bitcoin is consolidating near $67,000. Our comprehensive analysis combines technical patterns with fundamental drivers...",
      date: "2024-06-18",
      category: "Cryptocurrency",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  // Function to update market data with random changes
  const updateMarketData = () => {
    const updatedData = marketData.map(item => {
      // Generate a random price change
      const changePercent = (Math.random() * 0.5 - 0.25).toFixed(2);
      const isPositive = Math.random() > 0.4; // 60% chance of positive change
      
      // Calculate new price based on current price and change
      let currentPrice = parseFloat(item.price.replace(/,/g, ''));
      const change = currentPrice * (parseFloat(changePercent) / 100);
      currentPrice = isPositive ? currentPrice + Math.abs(change) : currentPrice - Math.abs(change);
      
      // Format the price based on the pair
      let formattedPrice;
      if (item.pair === "BTC/USD") {
        formattedPrice = Math.round(currentPrice).toLocaleString();
      } else if (item.pair === "S&P 500") {
        formattedPrice = Math.round(currentPrice).toLocaleString();
      } else if (item.pair === "Gold") {
        formattedPrice = Math.round(currentPrice).toLocaleString();
      } else {
        formattedPrice = currentPrice.toFixed(4);
      }
      
      return {
        ...item,
        price: formattedPrice,
        change: `${isPositive ? '+' : '-'}${Math.abs(parseFloat(changePercent)).toFixed(2)}%`,
        trend: isPositive ? 'up' : 'down'
      };
    });
    
    setMarketData(updatedData);
  };

  // Auto-slide functionality
  useEffect(() => {
    // Initial update
    updateMarketData();
    
    // Set interval for updates (10 seconds = 10000 ms)
    const interval = setInterval(updateMarketData, 10000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Latest Market Insights
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Stay ahead of the markets with Gary's professional analysis and trading insights
          </p>
        </div>

        {/* Live Market Data */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-blue-900 flex items-center">
              <BarChart3 className="mr-2" size={24} />
              Live Market Data
            </h3>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="mr-1" size={16} />
              Updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {marketData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="font-bold text-blue-900 mb-1">{item.pair}</div>
                <div className="text-lg font-semibold mb-1">{item.price}</div>
                <div className={`text-sm font-medium ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.change}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {insight.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <Calendar className="mr-1" size={14} />
                  <span className="mr-4">{new Date(insight.date).toLocaleDateString()}</span>
                  <Clock className="mr-1" size={14} />
                  <span>{insight.readTime}</span>
                </div>
                
                <h3 className="font-bold text-blue-900 mb-3 line-clamp-2">
                  <Link to={`/blog/${insight.id}`} className="hover:text-blue-700 transition-colors">
                    {insight.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>
                
                <Link to={`/blog/${insight.id}`} className="flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors">
                  Read Full Analysis
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get Daily Market Analysis
          </h3>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join 10,000+ traders who receive Gary's daily market analysis and trading insights directly in their inbox.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <Button variant="secondary" size="lg">
              Subscribe Free
            </Button>
          </div>
          
          <p className="text-xs text-gray-300 mt-4">
            No spam. Unsubscribe anytime. Your email is safe with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;