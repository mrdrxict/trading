import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Users, Award, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageInterest: '',
    message: '',
    honeypot: '' // Honeypot field to catch bots
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const packageOptions = [
    { value: '', label: 'Select your interest' },
    { value: 'beginner-course', label: 'Beginner Course ($997)' },
    { value: 'advanced-course', label: 'Advanced Course ($1,997)' },
    { value: 'elite-course', label: 'Elite Course ($2,997)' },
    { value: 'monthly-mentorship', label: 'Monthly Mentorship ($499/month)' },
    { value: 'quarterly-mentorship', label: 'Quarterly Mentorship ($1,299/quarter)' },
    { value: 'annual-mentorship', label: 'Annual Mentorship ($3,997/year)' },
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'other', label: 'Other - Please specify in message' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSelectChange = (name: string, value: string) => {
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
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.packageInterest) {
      newErrors.packageInterest = 'Please select your interest';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // Submit to backend API
        const response = await axios.post('http://localhost:3001/api/contact', formData);
        
        if (response.data.success) {
          setIsSuccess(true);
          // Reset form after 5 seconds
          setTimeout(() => {
            setIsSuccess(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              packageInterest: '',
              message: '',
              honeypot: ''
            });
          }, 5000);
        } else {
          setSubmitError(response.data.error || 'Failed to submit form. Please try again.');
        }
      } catch (error) {
        console.error('Contact form submission error:', error);
        setSubmitError('Failed to submit form. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const officeLocations = [
    {
      city: 'London',
      address: '123 Financial District, London EC2V 8RF, UK',
      phone: '+44 20 7123 4567',
      email: 'london@garyrobinsontrading.com',
      hours: 'Mon-Fri, 9 AM - 6 PM GMT'
    },
    {
      city: 'New York',
      address: '456 Wall Street, New York, NY 10005, USA',
      phone: '+1 (212) 555-0123',
      email: 'newyork@garyrobinsontrading.com',
      hours: 'Mon-Fri, 9 AM - 6 PM EST'
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
              <Mail className="text-yellow-500 mx-auto mb-3" size={32} />
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
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for contacting us. We've received your message and will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field - hidden from users but bots will fill it */}
                  <input 
                    type="text" 
                    name="honeypot" 
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
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
                  
                  <Select
                    label="Package Interest"
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={(value) => handleSelectChange('packageInterest', value)}
                    options={packageOptions}
                    error={errors.packageInterest}
                  />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block rounded-md sm:text-sm focus:ring-1 ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                      placeholder="Tell Gary about your trading goals, experience level, and what you hope to achieve..."
                      required
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>
                  
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="mr-2 mt-0.5" size={16} />
                        <span>{submitError}</span>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    type="submit"
                    variant="secondary"
                    fullWidth
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="animate-spin mr-2" size={20} />
                        Sending Message...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                  
                  <p className="text-gray-500 text-sm text-center mt-4">
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
                <Mail className="mr-2" size={16} />
                urgent@garyrobinsontrading.com
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