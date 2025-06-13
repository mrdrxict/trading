import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.packageInterest) newErrors.packageInterest = 'Please select your interest';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call to save to database
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          packageInterest: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Get Started Today
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ready to transform your trading? Contact Gary Robinson to discuss your goals and find the perfect program for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Email</h4>
                    <p className="text-gray-600">gary@garyrobinsontrading.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Location</h4>
                    <p className="text-gray-600">New York, NY</p>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Clock className="text-blue-900" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Trading Hours</h4>
                    <p className="text-gray-600">24/5 Market Coverage</p>
                    <p className="text-sm text-gray-500">Sunday 5 PM - Friday 5 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-blue-900 mb-4">Why Choose Gary Robinson Trading?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">2,500+</div>
                  <div className="text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">92%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">$50M+</div>
                  <div className="text-sm text-gray-600">Volume Traded</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {isSuccess ? (
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent!</h3>
                <p className="text-green-700 mb-6">
                  Thank you for your interest. Gary will personally review your message and respond within 24 hours.
                </p>
                <Button 
                  variant="primary"
                  onClick={() => setIsSuccess(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Send a Message
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                
                <div className="mb-4">
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    error={errors.phone}
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <Select
                    label="Package Interest"
                    name="packageInterest"
                    value={formData.packageInterest}
                    onChange={(value) => handleSelectChange('packageInterest', value)}
                    options={packageOptions}
                    error={errors.packageInterest}
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block rounded-md sm:text-sm focus:ring-1 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell Gary about your trading goals, experience level, and what you hope to achieve..."
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
                
                <p className="text-gray-500 text-sm text-center mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;