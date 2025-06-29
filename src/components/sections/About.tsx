import React from 'react';
import { Trophy, Target, BookOpen, Users, Award, TrendingUp, BarChart3, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Meet Gary Robinson
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            A seasoned professional trader with over 10 years of experience across Forex, Futures, and Cryptocurrency markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/gary.png" 
                alt="Gary Robinson" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Certifications Badge */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 py-3 px-6 rounded-lg shadow-lg font-bold">
              <div className="text-center">
                <div className="text-lg">FTMO, MFF</div>
                <div className="text-xs">Certified</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Professional Trading Expertise
            </h3>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Gary Robinson began his trading journey in 2013, starting as a retail trader and evolving into a professional fund manager. His expertise spans multiple asset classes including Forex, Futures, and Cryptocurrency markets.
              </p>
              <p>
                As a certified prop firm trader with multiple funded accounts, Gary combines rigorous technical analysis with sound fundamental principles to deliver consistent, profitable strategies across all market conditions.
              </p>
              <p>
                Gary's teaching philosophy focuses on practical application, risk management, and developing the psychological discipline required for long-term trading success.
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-blue-900 mb-4">Professional Background</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Award className="text-yellow-500 mr-2" size={16} />
                  FTMO Funded Trader ($200K)
                </li>
                <li className="flex items-center">
                  <BookOpen className="text-yellow-500 mr-2" size={16} />
                  My Forex Funds Funded Trader ($100K)
                </li>
                <li className="flex items-center">
                  <Globe className="text-yellow-500 mr-2" size={16} />
                  The5%ers Funded Trader ($50K)
                </li>
                <li className="flex items-center">
                  <Users className="text-yellow-500 mr-2" size={16} />
                  Trained over 2,500+ successful traders
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900 text-center">
            <div className="flex items-center justify-center mb-3">
              <Trophy className="text-yellow-500 mr-2" size={28} />
              <span className="text-3xl font-bold text-blue-900">92%</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Win Rate</h4>
            <p className="text-gray-600 text-sm">Verified performance over 10 years of trading</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900 text-center">
            <div className="flex items-center justify-center mb-3">
              <Target className="text-yellow-500 mr-2" size={28} />
              <span className="text-3xl font-bold text-blue-900">34%</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Annual ROI</h4>
            <p className="text-gray-600 text-sm">Consistent yearly returns with controlled risk</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900 text-center">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="text-yellow-500 mr-2" size={28} />
              <span className="text-3xl font-bold text-blue-900">$50M+</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Volume Traded</h4>
            <p className="text-gray-600 text-sm">Total trading volume across all markets</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-900 text-center">
            <div className="flex items-center justify-center mb-3">
              <Users className="text-yellow-500 mr-2" size={28} />
              <span className="text-3xl font-bold text-blue-900">2,500+</span>
            </div>
            <h4 className="font-bold text-blue-900 mb-2">Students Taught</h4>
            <p className="text-gray-600 text-sm">Traders from 45+ countries worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;