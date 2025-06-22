import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsResourcesOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', path: '/services' },
        { name: 'Courses', path: '/courses' },
        { name: 'Mentorship', path: '/mentorship' },
        { name: 'Daily Trading Signals', path: '/daily-trading-signals' },
        { name: 'Market Analysis', path: '/market-analysis' },
        { name: 'Trading Calculators', path: '/trading-calculators' },
      ]
    },
    { 
      name: 'Resources', 
      path: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', path: '/blog' },
        { name: 'Educational Blog', path: '/educational-blog' },
        { name: 'Trading Strategies', path: '/trading-strategies' },
        { name: 'Risk Management', path: '/risk-management' },
        { name: 'Certifications', path: '/certifications' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-2 rounded-lg mr-3">
              <TrendingUp className="text-blue-900" size={28} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-blue-900">Gary Robinson</span>
              <span className="text-sm text-gray-600 -mt-1">Trading</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors ${
                        item.dropdownItems?.some(dropItem => isActive(dropItem.path)) ? 'text-blue-900 font-medium' : ''
                      }`}
                      onMouseEnter={() => {
                        if (item.name === 'Services') setIsServicesOpen(true);
                        if (item.name === 'Resources') setIsResourcesOpen(true);
                      }}
                    >
                      {item.name}
                      <ChevronDown className="ml-1" size={16} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${
                        (item.name === 'Services' && isServicesOpen) || (item.name === 'Resources' && isResourcesOpen)
                          ? 'opacity-100 visible transform translate-y-0'
                          : 'opacity-0 invisible transform -translate-y-2'
                      }`}
                      onMouseEnter={() => {
                        if (item.name === 'Services') setIsServicesOpen(true);
                        if (item.name === 'Resources') setIsResourcesOpen(true);
                      }}
                      onMouseLeave={() => {
                        if (item.name === 'Services') setIsServicesOpen(false);
                        if (item.name === 'Resources') setIsResourcesOpen(false);
                      }}
                    >
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className={`block px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-900 transition-colors ${
                            isActive(dropItem.path) ? 'text-blue-900 bg-blue-50 font-medium' : 'text-gray-700'
                          }`}
                          onClick={() => {
                            setIsServicesOpen(false);
                            setIsResourcesOpen(false);
                          }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-900 font-medium'
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/booking">
              <Button variant="secondary">
                Book Session
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-900 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <nav className="py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-900 hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        if (item.name === 'Services') setIsServicesOpen(!isServicesOpen);
                        if (item.name === 'Resources') setIsResourcesOpen(!isResourcesOpen);
                      }}
                    >
                      {item.name}
                      <ChevronDown 
                        className={`transition-transform duration-200 ${
                          (item.name === 'Services' && isServicesOpen) || (item.name === 'Resources' && isResourcesOpen)
                            ? 'rotate-180' 
                            : ''
                        }`} 
                        size={16} 
                      />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={`transition-all duration-200 ${
                      (item.name === 'Services' && isServicesOpen) || (item.name === 'Resources' && isResourcesOpen)
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                      {item.dropdownItems?.map((dropItem) => (
                        <Link
                          key={dropItem.name}
                          to={dropItem.path}
                          className={`block px-8 py-2 text-sm transition-colors ${
                            isActive(dropItem.path)
                              ? 'text-blue-900 bg-blue-50 font-medium'
                              : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50'
                          }`}
                          onClick={closeMenu}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-900 bg-blue-50 font-medium'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-gray-50'
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="px-4 py-3 border-t border-gray-200 mt-4">
              <Link to="/booking" onClick={closeMenu}>
                <Button variant="secondary" fullWidth>
                  Book Session
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;