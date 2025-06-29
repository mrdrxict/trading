import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import PaymentModal from '../payment/PaymentModal';

const BookingForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goal: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when field is edited
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
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    
    if (!formState.experience) {
      newErrors.experience = 'Please select your experience level';
    }
    
    if (!formState.goal) {
      newErrors.goal = 'Please select your primary goal';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Set up payment modal with consultation product
      setSelectedProduct({
        id: 'strategy-consultation',
        name: 'Strategy Consultation',
        price: 50,
        description: '30-minute consultation to discuss your trading goals and create a personalized plan',
        type: 'consultation'
      });
      
      setIsPaymentModalOpen(true);
    }
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedProduct(null);
    
    // Show success message after payment
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      experience: '',
      goal: '',
      message: '',
    });
  };

  const experienceOptions = [
    { value: '', label: 'Select your experience level' },
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' },
    { value: 'professional', label: 'Professional Trader' },
  ];

  const goalOptions = [
    { value: '', label: 'Select your primary goal' },
    { value: 'full-time', label: 'Become a full-time trader' },
    { value: 'part-time', label: 'Generate part-time income' },
    { value: 'improve', label: 'Improve existing trading results' },
    { value: 'consistency', label: 'Achieve consistency' },
    { value: 'other', label: 'Other (specify in message)' },
  ];

  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book Your Strategy Session
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-3xl mx-auto text-lg">
            Take the first step toward trading success. Let's discuss your goals and create a personalized plan to achieve them.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {isSuccess ? (
            <div className="bg-green-100 text-green-800 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
              <p className="mb-6">Your consultation request has been received. I'll contact you within 24 hours to schedule our call.</p>
              <Button 
                variant="primary"
                onClick={() => setIsSuccess(false)}
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white text-gray-700 rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-6">
                Book Your $50 Strategy Session
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  error={errors.name}
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  error={errors.email}
                  required
                />
              </div>
              
              <div className="mb-6">
                <Input
                  label="Phone Number"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                  error={errors.phone}
                  required
                />
              </div>
              
              <h3 className="text-xl font-bold text-blue-900 mb-6 mt-8">
                Trading Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Select
                  label="Trading Experience"
                  name="experience"
                  value={formState.experience}
                  onChange={(value) => handleSelectChange('experience', value)}
                  options={experienceOptions}
                  error={errors.experience}
                />
                
                <Select
                  label="Primary Goal"
                  name="goal"
                  value={formState.goal}
                  onChange={(value) => handleSelectChange('goal', value)}
                  options={goalOptions}
                  error={errors.goal}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block rounded-md sm:text-sm focus:ring-1"
                  placeholder="Tell me about your trading challenges, goals, or any specific questions you have..."
                ></textarea>
              </div>
              
              <Button 
                type="submit"
                variant="secondary"
                fullWidth
                className="py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : 'Book Your $50 Strategy Session'}
              </Button>
              
              <p className="text-gray-500 text-sm text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={handleClosePaymentModal} 
        product={selectedProduct} 
      />
    </section>
  );
};

export default BookingForm;