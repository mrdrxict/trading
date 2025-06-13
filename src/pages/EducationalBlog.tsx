import React, { useState } from 'react';
import { BookOpen, Play, Download, Clock, User, Star, ChevronRight, Search, Filter, Target, TrendingUp } from 'lucide-react';
import Button from '../components/ui/Button';

const EducationalBlog = () => {
  const [selectedPath, setSelectedPath] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const learningPaths = [
    { id: 'all', name: 'All Content', count: 45 },
    { id: 'beginner', name: 'Beginner Path', count: 15 },
    { id: 'intermediate', name: 'Intermediate Path', count: 18 },
    { id: 'advanced', name: 'Advanced Path', count: 12 }
  ];

  const featuredContent = [
    {
      id: 1,
      title: "Complete Forex Trading Guide for Beginners",
      type: "Learning Path",
      duration: "8 hours",
      lessons: 12,
      level: "Beginner",
      rating: 4.9,
      students: 2847,
      description: "Master the fundamentals of forex trading with this comprehensive beginner's guide covering everything from basic concepts to your first trades.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Currency Pairs", "Market Analysis", "Risk Management", "Trading Psychology"],
      featured: true
    },
    {
      id: 2,
      title: "Advanced Technical Analysis Masterclass",
      type: "Video Series",
      duration: "12 hours",
      lessons: 20,
      level: "Advanced",
      rating: 4.8,
      students: 1234,
      description: "Deep dive into advanced technical analysis techniques used by professional traders and institutions.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Chart Patterns", "Indicators", "Market Structure", "Volume Analysis"],
      featured: true
    }
  ];

  const educationalContent = [
    {
      id: 3,
      title: "Understanding Support and Resistance Levels",
      type: "Tutorial",
      duration: "25 min",
      level: "Beginner",
      rating: 4.7,
      description: "Learn how to identify and trade support and resistance levels effectively in any market.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Technical Analysis", "Chart Reading"],
      hasVideo: true,
      hasDownload: true
    },
    {
      id: 4,
      title: "Risk Management: The 2% Rule Explained",
      type: "Guide",
      duration: "15 min",
      level: "Beginner",
      rating: 4.9,
      description: "Master the fundamental risk management principle that protects professional traders.",
      image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Risk Management", "Position Sizing"],
      hasVideo: true,
      hasDownload: true
    },
    {
      id: 5,
      title: "Cryptocurrency Market Cycles and Patterns",
      type: "Analysis",
      duration: "35 min",
      level: "Intermediate",
      rating: 4.6,
      description: "Understand crypto market cycles and how to position yourself for maximum profit.",
      image: "https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Cryptocurrency", "Market Cycles"],
      hasVideo: true,
      hasDownload: false
    },
    {
      id: 6,
      title: "Futures Trading: Margin and Leverage Explained",
      type: "Tutorial",
      duration: "30 min",
      level: "Intermediate",
      rating: 4.8,
      description: "Learn how margin and leverage work in futures trading and how to use them safely.",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Futures Trading", "Leverage"],
      hasVideo: true,
      hasDownload: true
    },
    {
      id: 7,
      title: "Advanced Order Types and Execution",
      type: "Masterclass",
      duration: "45 min",
      level: "Advanced",
      rating: 4.9,
      description: "Master advanced order types and execution strategies used by institutional traders.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Order Types", "Execution"],
      hasVideo: true,
      hasDownload: true
    },
    {
      id: 8,
      title: "Trading Psychology: Overcoming Fear and Greed",
      type: "Workshop",
      duration: "40 min",
      level: "Intermediate",
      rating: 4.7,
      description: "Develop the mental discipline required for consistent trading success.",
      image: "https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Psychology", "Discipline"],
      hasVideo: true,
      hasDownload: false
    },
    {
      id: 9,
      title: "Algorithmic Trading: Getting Started with Python",
      type: "Course",
      duration: "2 hours",
      level: "Advanced",
      rating: 4.8,
      description: "Introduction to algorithmic trading using Python for strategy development and backtesting.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topics: ["Algorithmic Trading", "Python"],
      hasVideo: true,
      hasDownload: true
    }
  ];

  const filteredContent = educationalContent.filter(content => {
    const matchesPath = selectedPath === 'all' || content.level.toLowerCase() === selectedPath;
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesPath && matchesSearch;
  });

  const progressData = {
    totalLessons: 45,
    completedLessons: 23,
    totalHours: 28,
    completedHours: 15,
    certificates: 3,
    currentStreak: 7
  };

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Educational Blog - Gary Robinson Trading</title>
      <meta name="description" content="Comprehensive trading education with structured learning paths, video tutorials, and downloadable resources. Learn forex, futures, and crypto trading step by step." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Educational Learning Center
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Structured learning paths, comprehensive tutorials, and practical resources to accelerate your trading education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <BookOpen className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">45+</div>
              <p className="text-gray-200">Learning Resources</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Play className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">28h</div>
              <p className="text-gray-200">Video Content</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Target className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">3</div>
              <p className="text-gray-200">Learning Paths</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <TrendingUp className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Free</div>
              <p className="text-gray-200">Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Your Learning Progress</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">
                  {progressData.completedLessons}/{progressData.totalLessons}
                </div>
                <p className="text-gray-600 text-sm">Lessons Completed</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${(progressData.completedLessons / progressData.totalLessons) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {progressData.completedHours}h
                </div>
                <p className="text-gray-600 text-sm">Hours Studied</p>
                <p className="text-xs text-gray-500 mt-1">of {progressData.totalHours}h total</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  {progressData.certificates}
                </div>
                <p className="text-gray-600 text-sm">Certificates Earned</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {progressData.currentStreak}
                </div>
                <p className="text-gray-600 text-sm">Day Streak</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  4.8
                </div>
                <p className="text-gray-600 text-sm">Avg. Rating</p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  89%
                </div>
                <p className="text-gray-600 text-sm">Completion Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Featured Learning Paths
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Comprehensive learning paths designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredContent.map((content) => (
              <div key={content.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={content.image} 
                    alt={content.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      content.level === 'Beginner' ? 'bg-green-500 text-white' :
                      content.level === 'Intermediate' ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {content.level}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {content.type}
                    </span>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 mr-1" size={14} fill="#EAB308" />
                      <span className="text-sm font-medium">{content.rating}</span>
                      <span className="text-gray-500 text-sm ml-2">({content.students})</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-blue-900 mb-3 text-xl">{content.title}</h3>
                  <p className="text-gray-600 mb-4">{content.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="mr-1" size={14} />
                    <span className="mr-4">{content.duration}</span>
                    <BookOpen className="mr-1" size={14} />
                    <span>{content.lessons} lessons</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {content.topics.map((topic, idx) => (
                      <span key={idx} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="secondary" fullWidth>
                    Start Learning Path
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Content Library */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Educational Content Library
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search tutorials, guides, and resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {learningPaths.map((path) => (
                  <button
                    key={path.id}
                    onClick={() => setSelectedPath(path.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedPath === path.id
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {path.name} ({path.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent.map((content) => (
              <div key={content.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={content.image} 
                    alt={content.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      content.level === 'Beginner' ? 'bg-green-500 text-white' :
                      content.level === 'Intermediate' ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {content.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {content.hasVideo && (
                      <div className="bg-black/70 text-white p-1 rounded">
                        <Play size={16} />
                      </div>
                    )}
                    {content.hasDownload && (
                      <div className="bg-black/70 text-white p-1 rounded">
                        <Download size={16} />
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      {content.type}
                    </span>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 mr-1" size={14} fill="#EAB308" />
                      <span className="text-sm font-medium">{content.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-blue-900 mb-3 line-clamp-2">{content.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{content.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Clock className="mr-1" size={14} />
                    <span>{content.duration}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {content.topics.map((topic, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" fullWidth size="sm">
                    <Play className="mr-2" size={16} />
                    Start Learning
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Content
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Additional Learning Resources
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <Download className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Trading Templates</h3>
              <p className="text-gray-700 mb-4">Download professional trading plan templates, risk calculators, and journal sheets.</p>
              <Button variant="outline" fullWidth>
                Download Templates
              </Button>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <BookOpen className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Trading Glossary</h3>
              <p className="text-gray-700 mb-4">Comprehensive glossary of trading terms and definitions for all skill levels.</p>
              <Button variant="outline" fullWidth>
                Browse Glossary
              </Button>
            </div>
            
            <div className="bg-yellow-50 rounded-xl p-6 text-center">
              <Play className="text-blue-900 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-blue-900 mb-3">Video Library</h3>
              <p className="text-gray-700 mb-4">Access our complete video library with over 100 hours of trading education.</p>
              <Button variant="outline" fullWidth>
                Watch Videos
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
              Ready to Accelerate Your Learning?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join our comprehensive courses for structured learning with personal support and certification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                View All Courses
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

export default EducationalBlog;