import React from 'react';
import { FileText, Shield, Users, CreditCard, AlertTriangle, Mail } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FileText className="text-blue-900" size={24} />
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: <Shield className="text-blue-900\" size={24} />
    },
    {
      id: 'accounts',
      title: 'User Accounts',
      icon: <Users className="text-blue-900" size={24} />
    },
    {
      id: 'payment',
      title: 'Payment Terms',
      icon: <CreditCard className="text-blue-900\" size={24} />
    },
    {
      id: 'prohibited',
      title: 'Prohibited Uses',
      icon: <AlertTriangle className="text-blue-900" size={24} />
    },
    {
      id: 'contact',
      title: 'Contact Information',
      icon: <Mail className="text-blue-900\" size={24} />
    }
  ];

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Terms of Service - Gary Robinson Trading</title>
      <meta name="description" content="Terms of Service for Gary Robinson Trading. Legal terms and conditions for using our trading education services, courses, and mentorship programs." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Legal terms and conditions governing the use of Gary Robinson Trading services and educational content
            </p>
          </div>

          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <FileText className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-bold mb-4">Important Notice</h2>
                <p className="text-gray-200 leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and Gary Robinson Trading. 
                  By accessing or using our services, you agree to be bound by these terms. Please read them carefully 
                  before using our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-sm"
              >
                {section.icon}
                <span className="ml-2 text-gray-700">{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Acceptance of Terms */}
            <div id="acceptance" className="mb-12">
              <div className="flex items-center mb-6">
                <FileText className="text-blue-900 mr-3" size={32} />
                <h2 className="text-3xl font-bold text-blue-900">1. Acceptance of Terms</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  By accessing and using the Gary Robinson Trading website, mobile application, or any related services 
                  (collectively, the "Services"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                
                <p className="text-gray-700 mb-4">
                  If you do not agree to abide by the above, please do not use this service. These Terms of Service 
                  apply to all users of the site, including without limitation users who are browsers, vendors, 
                  customers, merchants, and/or contributors of content.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">1.1 Agreement Updates</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to update, change, or replace any part of these Terms of Service by posting 
                  updates and/or changes to our website. It is your responsibility to check this page periodically 
                  for changes. Your continued use of or access to the website following the posting of any changes 
                  constitutes acceptance of those changes.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">1.2 Age Requirements</h3>
                <p className="text-gray-700 mb-4">
                  You must be at least 18 years of age to use our Services. By using our Services, you represent 
                  and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement.
                </p>
              </div>
            </div>

            {/* Description of Services */}
            <div id="services" className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="text-blue-900 mr-3" size={32} />
                <h2 className="text-3xl font-bold text-blue-900">2. Description of Services</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  Gary Robinson Trading provides educational services related to financial market trading, including 
                  but not limited to online courses, mentorship programs, educational content, and trading resources.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">2.1 Educational Nature</h3>
                <p className="text-gray-700 mb-4">
                  All content and services provided are for educational purposes only. We do not provide investment 
                  advice, trading signals, or recommendations to buy or sell specific financial instruments. Any 
                  trading decisions you make are your sole responsibility.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">2.2 Service Availability</h3>
                <p className="text-gray-700 mb-4">
                  We strive to maintain continuous service availability but do not guarantee uninterrupted access. 
                  Services may be temporarily unavailable due to maintenance, updates, or technical issues beyond our control.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">2.3 Content Accuracy</h3>
                <p className="text-gray-700 mb-4">
                  While we make every effort to ensure the accuracy of our educational content, we do not warrant 
                  that all information is complete, accurate, or up-to-date. Market conditions change rapidly, and 
                  past performance does not guarantee future results.
                </p>
              </div>
            </div>

            {/* User Accounts */}
            <div id="accounts" className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="text-blue-900 mr-3" size={32} />
                <h2 className="text-3xl font-bold text-blue-900">3. User Accounts</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-blue-900 mb-3">3.1 Account Creation</h3>
                <p className="text-gray-700 mb-4">
                  To access certain features of our Services, you may be required to create an account. You agree to 
                  provide accurate, current, and complete information during the registration process and to update 
                  such information to keep it accurate, current, and complete.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">3.2 Account Security</h3>
                <p className="text-gray-700 mb-4">
                  You are responsible for safeguarding the password and all activities that occur under your account. 
                  You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">3.3 Account Termination</h3>
                <p className="text-gray-700 mb-4">
                  We reserve the right to terminate or suspend your account at any time for violations of these Terms 
                  of Service or for any other reason at our sole discretion. Upon termination, your right to use the 
                  Services will cease immediately.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">3.4 Data Retention</h3>
                <p className="text-gray-700 mb-4">
                  Upon account termination, we may retain certain information as required by law or for legitimate 
                  business purposes. Personal data will be handled in accordance with our Privacy Policy.
                </p>
              </div>
            </div>

            {/* Payment Terms */}
            <div id="payment" className="mb-12">
              <div className="flex items-center mb-6">
                <CreditCard className="text-blue-900 mr-3" size={32} />
                <h2 className="text-3xl font-bold text-blue-900">4. Payment Terms</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-blue-900 mb-3">4.1 Pricing and Fees</h3>
                <p className="text-gray-700 mb-4">
                  Prices for our courses and services are clearly displayed on our website. All prices are in British 
                  Pounds (GBP) unless otherwise stated. We reserve the right to change our prices at any time, but 
                  changes will not affect orders already placed.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">4.2 Payment Processing</h3>
                <p className="text-gray-700 mb-4">
                  Payments are processed through secure third-party payment processors, including Stripe. By providing 
                  payment information, you authorize us to charge the applicable fees to your chosen payment method.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">4.3 Subscription Services</h3>
                <p className="text-gray-700 mb-4">
                  For subscription-based services (such as mentorship programs), you authorize us to charge your 
                  payment method on a recurring basis. You may cancel your subscription at any time through your 
                  account settings or by contacting customer support.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">4.4 Refund Policy</h3>
                <p className="text-gray-700 mb-4">
                  Refunds are governed by our separate Refund Policy, which forms part of these Terms of Service. 
                  Generally, we offer a 30-day money-back guarantee for most courses, subject to certain conditions.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">4.5 Failed Payments</h3>
                <p className="text-gray-700 mb-4">
                  If a payment fails, we may suspend your access to paid services until payment is resolved. 
                  Repeated failed payments may result in account termination.
                </p>
              </div>
            </div>

            {/* Prohibited Uses */}
            <div id="prohibited" className="mb-12">
              <div className="flex items-center mb-6">
                <AlertTriangle className="text-blue-900 mr-3" size={32} />
                <h2 className="text-3xl font-bold text-blue-900">5. Prohibited Uses</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  You may not use our Services for any unlawful purpose or to solicit others to perform unlawful acts. 
                  The following uses are specifically prohibited:
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-lg font-bold text-red-800 mb-3">Prohibited Activities Include:</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Sharing account credentials with others</li>
                    <li>• Reproducing, distributing, or selling our copyrighted content</li>
                    <li>• Using our services to provide competing educational services</li>
                    <li>• Attempting to gain unauthorized access to our systems</li>
                    <li>• Uploading malicious code or viruses</li>
                    <li>• Harassing other users or our staff</li>
                    <li>• Providing false or misleading information</li>
                    <li>• Using our services for illegal activities</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-3">5.1 Intellectual Property</h3>
                <p className="text-gray-700 mb-4">
                  All content, including but not limited to text, graphics, logos, images, audio clips, video clips, 
                  data compilations, and software, is the property of Gary Robinson Trading or its content suppliers 
                  and is protected by copyright and other intellectual property laws.
                </p>

                <h3 className="text-xl font-bold text-blue-900 mb-3">5.2 Enforcement</h3>
                <p className="text-gray-700 mb-4">
                  Violations of these prohibited uses may result in immediate termination of your account and legal action. 
                  We reserve the right to investigate suspected violations and cooperate with law enforcement agencies.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">6. Limitation of Liability</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by applicable law, Gary Robinson Trading shall not be liable for 
                  any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <h3 className="text-lg font-bold text-yellow-800 mb-3">Important Disclaimer:</h3>
                  <p className="text-yellow-700">
                    Trading involves substantial risk of loss. Our educational services do not guarantee trading success 
                    or profits. You acknowledge that any trading decisions are made at your own risk and that we are 
                    not responsible for any trading losses you may incur.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">7. Governing Law</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-4">
                  These Terms of Service and any separate agreements whereby we provide you Services shall be governed 
                  by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.
                </p>

                <p className="text-gray-700 mb-4">
                  Any disputes arising under or in connection with these Terms of Service shall be subject to the 
                  exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div id="contact" className="mb-12">
              <div className="flex items-center mb-6">
                <Mail className="text-blue-900 mr-3" size={32} />
                <h2 className="text-3xl font-bold text-blue-900">8. Contact Information</h2>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@garyrobinsontrading.com</p>
                  <p><strong>Phone:</strong> +44 20 7123 4567</p>
                  <p><strong>Address:</strong> 123 Financial District, London EC2V 8RF, United Kingdom</p>
                  <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM GMT</p>
                </div>
              </div>
            </div>

            {/* Effective Date */}
            <div className="border-t pt-8">
              <div className="text-center text-gray-600">
                <p className="mb-2"><strong>Last Updated:</strong> January 15, 2024</p>
                <p className="mb-2"><strong>Effective Date:</strong> January 15, 2024</p>
                <p><strong>Company:</strong> Gary Robinson Trading Ltd. | Registration Number: 12345678</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;