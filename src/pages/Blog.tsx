import React, { useState } from 'react';
import { Search, Filter, Calendar, User, ArrowRight, Share2, BookOpen, TrendingUp, Eye } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'forex', name: 'Forex Trading', count: 8 },
    { id: 'futures', name: 'Futures', count: 6 },
    { id: 'crypto', name: 'Cryptocurrency', count: 5 },
    { id: 'psychology', name: 'Trading Psychology', count: 3 },
    { id: 'analysis', name: 'Market Analysis', count: 2 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Complete Guide to Forex Trading in 2024",
      excerpt: "Everything you need to know about forex trading, from basics to advanced strategies. Learn how to navigate the world's largest financial market.",
      author: "Gary Robinson",
      date: "2024-06-24",
      category: "Forex Trading",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 2847,
      featured: true
    },
    {
      id: 2,
      title: "Bitcoin's Technical Analysis: What the Charts Tell Us",
      excerpt: "Deep dive into Bitcoin's current technical setup and what it means for the next major price movement. Key levels to watch.",
      author: "Gary Robinson",
      date: "2024-06-22",
      category: "Cryptocurrency",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 1923,
      featured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: "5 Risk Management Rules Every Trader Must Follow",
      excerpt: "Protect your capital with these essential risk management principles that separate successful traders from the rest.",
      author: "Gary Robinson",
      date: "2024-06-20",
      category: "Trading Psychology",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 1654
    },
    {
      id: 4,
      title: "Gold Futures: Inflation Hedge or Risk Asset?",
      excerpt: "Analyzing gold's role in modern portfolios and how to trade gold futures effectively in different market conditions.",
      author: "Gary Robinson",
      date: "2024-06-18",
      category: "Futures",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 1432
    },
    {
      id: 5,
      title: "EUR/USD Weekly Outlook: Key Levels to Watch",
      excerpt: "Technical and fundamental analysis of the EUR/USD pair with specific entry and exit levels for the week ahead.",
      author: "Gary Robinson",
      date: "2024-06-16",
      category: "Market Analysis",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 2156
    },
    {
      id: 6,
      title: "The Psychology of Losing Trades: How to Bounce Back",
      excerpt: "Mental strategies for dealing with losses and maintaining emotional discipline in your trading journey.",
      author: "Gary Robinson",
      date: "2024-06-14",
      category: "Trading Psychology",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 1876
    },
    {
      id: 7,
      title: "Cryptocurrency Market Structure: Understanding the Basics",
      excerpt: "Learn how crypto markets work, from order books to market makers, and how to use this knowledge in your trading.",
      author: "Gary Robinson",
      date: "2024-06-12",
      category: "Cryptocurrency",
      readTime: "11 min read",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 1543
    },
    {
      id: 8,
      title: "S&P 500 Futures: Trading the Index Like a Pro",
      excerpt: "Advanced strategies for trading S&P 500 futures, including session timing and key technical levels.",
      author: "Gary Robinson",
      date: "2024-06-10",
      category: "Futures",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      views: 1234
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Blog - Gary Robinson Trading</title>
      <meta name="description" content="Expert trading insights, market analysis, and educational content from Gary Robinson. Learn forex, futures, and crypto trading strategies from a professional trader." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trading Insights & Analysis
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional trading insights, market analysis, and educational content to help you become a better trader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BookOpen className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">50+</div>
              <p className="text-gray-200">Articles Published</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Eye className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">25K+</div>
              <p className="text-gray-200">Monthly Readers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <TrendingUp className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Weekly</div>
              <p className="text-gray-200">New Content</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BookOpen className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Expert</div>
              <p className="text-gray-200">Analysis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Featured Articles
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our most popular and impactful trading insights
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <User className="mr-1" size={14} />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="mr-1" size={14} />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-bold text-blue-900 mb-3 text-xl line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="mr-1" size={14} />
                        {post.views}
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`} className="flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors">
                      Read More
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Latest Articles
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          {/* Search and Filter */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="mr-1" size={14} />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-bold text-blue-900 mb-3 line-clamp-2">
                    <Link to={`/blog/${post.id}`} className="hover:text-blue-700 transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Eye className="mr-1" size={12} />
                        {post.views}
                      </div>
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-blue-900 hover:text-blue-700 transition-colors">
                      <Share2 size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss a Trading Insight
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Subscribe to our newsletter and get the latest market analysis and trading tips delivered to your inbox.
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-gray-300 mt-4">
              Join 10,000+ traders. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;