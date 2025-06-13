import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users, Award } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const departmentOptions = [
    { value: '', label: 'Select Department' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'courses', label: 'Course Information' },
    { value: 'mentorship', label: 'Mentorship Programs' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'partnerships', label: 'Business Partnerships' },
    { value: 'media', label: 'Media & Press' }
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'normal', label: 'Normal Priority' },
    { value: 'high', label: 'High Priority' },
    { value: 'urgent', label: 'Urgent' }
  ];

  const contactMethods = [
    {
      icon: <Mail className="text-blue-900" size={32} />,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@garyrobinsontrading.com',
      responseTime: 'Within 24 hours',
      availability: '24/7'
    },
    {
      icon: <Phone className="text-blue-900" size={32} />,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+44 20 7123 4567',
      responseTime: 'Immediate',
      availability: 'Mon-Fri, 9 AM - 6 PM GMT'
    },
    {
      icon: <MessageCircle className="text-blue-900" size={32} />,
      title: 'Live Chat',
      description: 'Quick answers to urgent questions',
      contact: 'Available on website',
      responseTime: 'Within 5 minutes',
      availability: 'Mon-Fri, 9 AM - 6 PM GMT'
    },
    {
      icon: <Calendar className="text-blue-900" size={32} />,
      title: 'Schedule a Call',
      description: 'Book a personal consultation',
      contact: 'Online booking system',
      responseTime: 'Scheduled',
      availability: 'Flexible scheduling'
    }
  ];

  const officeLocations = [
    {
      city: 'London',
      address: '123 Financial District, London EC2V 8RF, UK',
      phone: '+44 20 7123 4567',
      email: 'london@garyrobinsontrading.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT'
    },
    {
      city: 'New York',
      address: '456 Wall Street, New York, NY 10005, USA',
      phone: '+1 (212) 555-0123',
      email: 'newyork@garyrobinsontrading.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST'
    }
  ];

  const faqItems = [
    {
      question: 'How quickly will I receive a response?',
      answer: 'Email inquiries are typically answered within 24 hours. Phone and live chat support provide immediate assistance during business hours.'
    },
    {
      question: 'What information should I include in my message?',
      answer: 'Please include your full name, contact information, and a detailed description of your inquiry. For technical issues, include any error messages or screenshots.'
    },
    {
      question: 'Can I schedule a call outside business hours?',
      answer: 'Yes, we offer flexible scheduling for consultations. Use our booking system to find available times that work for your timezone.'
    },
    {
      question: 'Do you offer emergency support?',
      answer: 'For urgent trading-related issues, mark your inquiry as "Urgent" and we\'ll prioritize your request. Critical technical issues are addressed immediately.'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          department: '',
          subject: '',
          message: '',
          urgency: 'normal'
        });
      }, 1500);
    }
  };

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Contact Us - Gary Robinson Trading</title>
      <meta name="description" content="Get in touch with Gary Robinson Trading. Multiple contact methods available including email, phone, live chat, and scheduled consultations. Expert trading support." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're here to help you succeed in your trading journey. Reach out to our expert team for support, guidance, and answers to your questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Clock className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">24h</div>
              <p className="text-gray-200">Response Time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Users className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Expert</div>
              <p className="text-gray-200">Support Team</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <MessageCircle className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Multiple</div>
              <p className="text-gray-200">Contact Methods</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Award className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Premium</div>
              <p className="text-gray-200">Support Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              How Can We Help You?
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                
                <h3 className="font-bold text-blue-900 text-center mb-3">{method.title}</h3>
                <p className="text-gray-600 text-center text-sm mb-4">{method.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="text-center">
                    <span className="font-medium text-blue-900">{method.contact}</span>
                  </div>
                  <div className="text-center text-gray-600">
                    <div>Response: {method.responseTime}</div>
                    <div>Available: {method.availability}</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <Button variant="outline" fullWidth size="sm">
                    {method.title === 'Schedule a Call' ? 'Book Now' : 'Contact Now'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Send Us a Message
              </h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for contacting us. We've received your message and will respond within 24 hours.
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      error={errors.name}
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      error={errors.email}
                      required
                    />
                  </div>
                  
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+44 20 7123 4567"
                    error={errors.phone}
                    required
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label="Department"
                      name="department"
                      value={formData.department}
                      onChange={(value) => handleSelectChange('department', value)}
                      options={departmentOptions}
                      error={errors.department}
                    />
                    
                    <Select
                      label="Priority Level"
                      name="urgency"
                      value={formData.urgency}
                      onChange={(value) => handleSelectChange('urgency', value)}
                      options={urgencyOptions}
                    />
                  </div>
                  
                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your inquiry"
                    error={errors.subject}
                    required
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      placeholder="Please provide detailed information about your inquiry..."
                      required
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit"
                    variant="secondary"
                    fullWidth
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </Button>
                  
                  <p className="text-gray-500 text-sm text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>

            {/* Office Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Our Offices
              </h2>
              
              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-bold text-blue-900 text-xl mb-4">{office.city} Office</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="text-blue-900 mr-3 mt-1" size={20} />
                        <div>
                          <p className="text-gray-700">{office.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="text-blue-900 mr-3" size={20} />
                        <a href={`tel:${office.phone}`} className="text-blue-900 hover:text-blue-700">
                          {office.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="text-blue-900 mr-3" size={20} />
                        <a href={`mailto:${office.email}`} className="text-blue-900 hover:text-blue-700">
                          {office.email}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="text-blue-900 mr-3" size={20} />
                        <span className="text-gray-700">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">{item.question}</h4>
                      <p className="text-gray-700 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t border-red-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Emergency Trading Support
            </h2>
            <p className="text-red-700 mb-6 max-w-2xl mx-auto">
              For urgent trading-related issues or technical problems that require immediate attention, contact our emergency support line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-red-500 text-red-700 hover:bg-red-50">
                <Phone className="mr-2" size={16} />
                Emergency: +44 20 7123 4999
              </Button>
              <Button variant="outline" className="border-red-500 text-red-700 hover:bg-red-50">
                <MessageCircle className="mr-2" size={16} />
                Priority Live Chat
              </Button>
            </div>
            <p className="text-red-600 text-sm mt-4">
              Available 24/7 for critical trading platform issues
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;