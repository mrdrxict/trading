import React from 'react';
import { TrendingUp, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-2 rounded-lg mr-3">
                <TrendingUp className="text-blue-900" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">Gary Robinson</span>
                <span className="text-sm text-gray-300 -mt-1">Trading</span>
              </div>
            </div>
            <p className="text-gray-300">
              Professional trading education and mentorship in Forex, Futures, and Cryptocurrency markets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-500 transition-colors">About Gary</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors">Services</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-yellow-500 transition-colors">Courses</Link></li>
              <li><Link to="/mentorship" className="text-gray-300 hover:text-yellow-500 transition-colors">Mentorship</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-yellow-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/market-analysis" className="text-gray-300 hover:text-yellow-500 transition-colors">Market Analysis</Link></li>
              <li><Link to="/trading-calculators" className="text-gray-300 hover:text-yellow-500 transition-colors">Trading Calculators</Link></li>
              <li><Link to="/trading-strategies" className="text-gray-300 hover:text-yellow-500 transition-colors">Trading Strategies</Link></li>
              <li><Link to="/risk-management" className="text-gray-300 hover:text-yellow-500 transition-colors">Risk Management</Link></li>
              <li><Link to="/educational-blog" className="text-gray-300 hover:text-yellow-500 transition-colors">Educational Blog</Link></li>
              <li><Link to="/certifications" className="text-gray-300 hover:text-yellow-500 transition-colors">Certifications</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">Contact Us</Link></li>
              <li><Link to="/booking" className="text-gray-300 hover:text-yellow-500 transition-colors">Book Session</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-yellow-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-yellow-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund" className="text-gray-300 hover:text-yellow-500 transition-colors">Refund Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-300 hover:text-yellow-500 transition-colors">Risk Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-yellow-500" />
                <a href="mailto:gary@garyrobinsontrading.com" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  gary@garyrobinsontrading.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-yellow-500" />
                <a href="tel:+442071234567" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  +44 20 7123 4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-yellow-500 mt-1" />
                <span className="text-gray-300">
                  London, UK<br />United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-gray-300 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Gary Robinson Trading. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Trading involves substantial risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;