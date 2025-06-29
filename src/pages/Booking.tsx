import React, { useState } from 'react';
import { Calendar, Clock, User, CreditCard, CheckCircle, ArrowLeft, ArrowRight, Phone, Video, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import PaymentModal from '../components/payment/PaymentModal';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState('GMT');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    message: ''
  });
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const services = [
    {
      id: 'consultation',
      name: 'Strategy Consultation',
      duration: '30 minutes',
      price: '$50',
      description: 'Discuss your trading goals and get personalized recommendations',
      type: 'video'
    },
    {
      id: 'mentorship-session',
      name: '1-on-1 Mentorship Session',
      duration: '60 minutes',
      price: '£150',
      description: 'Intensive coaching session with Gary Robinson',
      type: 'video'
    },
    {
      id: 'portfolio-review',
      name: 'Portfolio Review Session',
      duration: '45 minutes',
      price: '£120',
      description: 'Comprehensive review of your trading performance',
      type: 'video'
    },
    {
      id: 'strategy-development',
      name: 'Custom Strategy Development',
      duration: '90 minutes',
      price: '£250',
      description: 'Create a personalized trading strategy',
      type: 'video'
    }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
  ];

  const timezones = [
    { value: 'GMT', label: 'GMT (London)' },
    { value: 'EST', label: 'EST (New York)' },
    { value: 'PST', label: 'PST (Los Angeles)' },
    { value: 'CET', label: 'CET (Paris)' },
    { value: 'JST', label: 'JST (Tokyo)' },
    { value: 'AEST', label: 'AEST (Sydney)' }
  ];

  const experienceOptions = [
    { value: '', label: 'Select your experience level' },
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3+ years)' },
    { value: 'professional', label: 'Professional Trader' }
  ];

  const goalOptions = [
    { value: '', label: 'Select your primary goal' },
    { value: 'learn-basics', label: 'Learn trading basics' },
    { value: 'improve-performance', label: 'Improve trading performance' },
    { value: 'risk-management', label: 'Better risk management' },
    { value: 'strategy-development', label: 'Develop trading strategy' },
    { value: 'full-time-trading', label: 'Become full-time trader' },
    { value: 'other', label: 'Other (specify in message)' }
  ];

  // Generate next 30 days for calendar
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends for business hours
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        days.push({
          date: date.toISOString().split('T')[0],
          day: date.getDate(),
          month: date.toLocaleDateString('en-US', { month: 'short' }),
          weekday: date.toLocaleDateString('en-US', { weekday: 'short' })
        });
      }
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // For paid sessions, open payment modal
    const selectedServiceData = services.find(s => s.id === selectedService);
    
    if (selectedServiceData) {
      // Extract price as a number
      const priceValue = parseInt(selectedServiceData.price.replace(/[^0-9]/g, ''));
      
      setSelectedProduct({
        id: selectedServiceData.id,
        name: selectedServiceData.name,
        price: priceValue,
        description: `${selectedServiceData.duration} ${selectedServiceData.type} session on ${new Date(selectedDate).toLocaleDateString()} at ${selectedTime} ${selectedTimezone}`,
        type: 'consultation'
      });
      
      setIsPaymentModalOpen(true);
    }
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedProduct(null);
    // Show success message after payment
    alert('Booking confirmed! You will receive a confirmation email with all details shortly.');
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Book Trading Session - Gary Robinson Trading</title>
      <meta name="description" content="Book a personal trading session with Gary Robinson. Choose from consultations, mentorship sessions, portfolio reviews, and custom strategy development." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Book Your Trading Session
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Schedule a personal session with Gary Robinson to accelerate your trading journey
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    currentStep >= step ? 'bg-yellow-500 text-blue-900' : 'bg-white/20 text-white'
                  }`}>
                    {currentStep > step ? <CheckCircle size={20} /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      currentStep > step ? 'bg-yellow-500' : 'bg-white/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="text-lg font-medium">
                Step {currentStep} of 4: {
                  currentStep === 1 ? 'Select Service' :
                  currentStep === 2 ? 'Choose Date & Time' :
                  currentStep === 3 ? 'Your Information' :
                  'Confirmation'
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              
              {/* Step 1: Select Service */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Choose Your Service
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`border-2 rounded-xl p-6 cursor-pointer transition-all ${
                          selectedService === service.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            {service.type === 'video' ? (
                              <Video className="text-blue-900 mr-3" size={24} />
                            ) : (
                              <Phone className="text-blue-900 mr-3" size={24} />
                            )}
                            <div>
                              <h3 className="font-bold text-blue-900">{service.name}</h3>
                              <p className="text-sm text-gray-600">{service.duration}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-blue-900">{service.price}</div>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Select Date & Time
                  </h2>
                  
                  {selectedServiceData && (
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-blue-900">{selectedServiceData.name}</h3>
                          <p className="text-sm text-gray-600">{selectedServiceData.duration} • {selectedServiceData.price}</p>
                        </div>
                        <Video className="text-blue-900" size={24} />
                      </div>
                    </div>
                  )}

                  {/* Timezone Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Timezone
                    </label>
                    <select
                      value={selectedTimezone}
                      onChange={(e) => setSelectedTimezone(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    >
                      {timezones.map((tz) => (
                        <option key={tz.value} value={tz.value}>{tz.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Calendar */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.slice(0, 21).map((day) => (
                        <button
                          key={day.date}
                          onClick={() => setSelectedDate(day.date)}
                          className={`p-3 text-center rounded-lg border transition-colors ${
                            selectedDate === day.date
                              ? 'bg-blue-500 text-white border-blue-500'
                              : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-xs text-gray-500">{day.weekday}</div>
                          <div className="font-medium">{day.day}</div>
                          <div className="text-xs">{day.month}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Time ({selectedTimezone})
                      </label>
                      <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 text-center rounded-lg border transition-colors ${
                              selectedTime === time
                                ? 'bg-blue-500 text-white border-blue-500'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Personal Information */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Your Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+44 20 7123 4567"
                    required
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Select
                      label="Trading Experience"
                      name="experience"
                      value={formData.experience}
                      onChange={(value) => handleSelectChange('experience', value)}
                      options={experienceOptions}
                    />
                    
                    <Select
                      label="Primary Goal"
                      name="goals"
                      value={formData.goals}
                      onChange={(value) => handleSelectChange('goals', value)}
                      options={goalOptions}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Tell us about your specific trading challenges or what you'd like to focus on during the session..."
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    Confirm Your Booking
                  </h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-blue-900 mb-4">Booking Summary</h3>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{selectedServiceData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{selectedServiceData?.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{new Date(selectedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedTime} {selectedTimezone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">Video Call</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-bold text-blue-900 text-lg">{selectedServiceData?.price}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-bold text-blue-900 mb-2">What happens next?</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• You'll receive a confirmation email with meeting details</li>
                      <li>• A calendar invite will be sent to your email</li>
                      <li>• You'll get a reminder 24 hours before the session</li>
                      <li>• The video call link will be included in your confirmation</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <CreditCard className="text-yellow-600 mr-2" size={20} />
                      <span className="font-medium text-yellow-800">Payment will be processed after confirmation</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2" size={16} />
                  Previous
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    variant="secondary"
                    onClick={nextStep}
                    disabled={
                      (currentStep === 1 && !selectedService) ||
                      (currentStep === 2 && (!selectedDate || !selectedTime)) ||
                      (currentStep === 3 && (!formData.name || !formData.email || !formData.phone))
                    }
                    className="flex items-center"
                  >
                    Next
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={handleSubmit}
                    className="flex items-center"
                  >
                    <CheckCircle className="mr-2" size={16} />
                    Confirm Booking
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Need Help with Booking?
            </h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to assist you with any questions about scheduling your session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline">
                <Phone className="mr-2" size={16} />
                Call +44 20 7123 4567
              </Button>
              <Button variant="outline">
                <MapPin className="mr-2" size={16} />
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={handleClosePaymentModal} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default Booking;