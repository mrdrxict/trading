import React from 'react';
import { Trophy, Target, BookOpen, Users, Award, TrendingUp, BarChart3, Globe, Star, Calendar, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const About = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" size={32} />,
      title: "10+ Years Experience",
      description: "Professional trading across all major markets since 2013"
    },
    {
      icon: <Users className="text-yellow-500" size={32} />,
      title: "2,500+ Students Trained",
      description: "Successfully educated traders from 45+ countries worldwide"
    },
    {
      icon: <TrendingUp className="text-yellow-500" size={32} />,
      title: "92% Success Rate",
      description: "Verified track record of consistent profitable trading"
    },
    {
      icon: <BarChart3 className="text-yellow-500" size={32} />,
      title: "£50M+ Volume Traded",
      description: "Extensive experience across Forex, Futures, and Crypto"
    }
  ];

  const timeline = [
    {
      year: "2013",
      title: "Trading Journey Begins",
      description: "Started as a retail trader, learning the fundamentals of market analysis."
    },
    {
      year: "2015",
      title: "First Prop Firm Challenge",
      description: "Passed first prop firm evaluation and received funded account."
    },
    {
      year: "2017",
      title: "FTMO Certification",
      description: "Achieved FTMO certification with $200K funded account."
    },
    {
      year: "2019",
      title: "My Forex Funds",
      description: "Secured $100K funded account with My Forex Funds."
    },
    {
      year: "2021",
      title: "Gary Robinson Trading",
      description: "Founded comprehensive trading education platform, helping thousands achieve financial freedom."
    },
    {
      year: "2023",
      title: "Multiple Funded Accounts",
      description: "Successfully managing multiple prop firm accounts totaling over $500K."
    }
  ];

  const certifications = [
    {
      name: "FTMO Funded Trader",
      issuer: "FTMO",
      year: "2017",
      description: "$200,000 funded account"
    },
    {
      name: "My Forex Funds",
      issuer: "MFF",
      year: "2019",
      description: "$100,000 funded account"
    },
    {
      name: "The5%ers",
      issuer: "The5%ers",
      year: "2020",
      description: "$50,000 funded account"
    },
    {
      name: "TopstepTrader",
      issuer: "Topstep",
      year: "2021",
      description: "$150,000 funded account"
    }
  ];

  const propFirms = [
    {
      firm: "FTMO",
      role: "Funded Trader",
      topic: "$200K Account",
      date: "2023"
    },
    {
      firm: "My Forex Funds",
      role: "Funded Trader",
      topic: "$100K Account",
      date: "2023"
    },
    {
      firm: "The5%ers",
      role: "Funded Trader",
      topic: "$50K Account",
      date: "2022"
    },
    {
      firm: "TopstepTrader",
      role: "Funded Trader",
      topic: "$150K Account",
      date: "2022"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meet Gary Robinson
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-xl text-gray-200 mb-8">
                A seasoned professional trader with over 10 years of experience, helping thousands achieve financial independence through proven trading strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button 
                    variant="secondary" 
                    size="lg"
                  >
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Gary Robinson" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 py-3 px-6 rounded-lg shadow-lg font-bold">
                <div className="text-center">
                  <div className="text-lg">FTMO, MFF</div>
                  <div className="text-xs">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Professional Background
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From retail trading to prop firm success, Gary's journey spans multiple markets and trading styles
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Trading Philosophy</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-4">
                    "Trading is not about predicting the future; it's about managing risk and capitalizing on probability. My approach combines rigorous technical analysis with sound fundamental principles to create consistent, profitable strategies."
                  </p>
                  <p className="text-gray-700">
                    "I believe in teaching traders to think like institutions while maintaining the agility of retail trading. This hybrid approach has proven successful across all market conditions."
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">Core Principles</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Risk management first</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Probability-based decisions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Emotional discipline</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Continuous learning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" size={16} />
                      <span className="text-gray-700">Systematic approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900 text-center hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Career Timeline
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A journey from retail trader to prop firm expert and educator
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-12">
                  <div className="bg-blue-900 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm z-10">
                    {item.year}
                  </div>
                  <div className="ml-8 bg-white rounded-lg p-6 shadow-md flex-1">
                    <h3 className="font-bold text-blue-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Prop Firm Certifications
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Successfully funded accounts with leading proprietary trading firms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-blue-900 text-lg mb-1">{cert.name}</h3>
                    <p className="text-blue-700 font-medium">{cert.issuer}</p>
                  </div>
                  <div className="bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {cert.year}
                  </div>
                </div>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prop Firms We Work With */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Prop Firms We Work With
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Partnered with leading proprietary trading firms to help our students get funded
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {propFirms.map((firm, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-blue-900" size={32} />
                </div>
                <h3 className="font-bold text-blue-900 mb-1">{firm.firm}</h3>
                <p className="text-gray-600 text-sm mb-2">{firm.role}</p>
                <p className="text-gray-700 text-sm mb-2">{firm.topic}</p>
                <span className="bg-yellow-500 text-blue-900 px-2 py-1 rounded text-xs font-bold">
                  {firm.date}
                </span>
              </div>
            ))}
          </div>

          {/* Speaking Engagements */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Prop Firm Success</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                <p className="text-gray-600">Funded Accounts</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">$1M+</div>
                <p className="text-gray-600">Total Funding</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
                <p className="text-gray-600">Students Funded</p>
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
              Ready to Learn from a Professional?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of successful traders who have transformed their financial future with Gary's proven strategies and mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button variant="secondary" size="lg">
                  View Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;