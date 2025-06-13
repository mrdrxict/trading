import React from 'react';
import { Shield, Eye, Lock, Database, Users, Settings, Mail, FileText } from 'lucide-react';

const Privacy = () => {
  const dataTypes = [
    {
      category: "Personal Information",
      icon: <Users className="text-blue-900" size={20} />,
      items: ["Name", "Email address", "Phone number", "Billing address", "Date of birth"]
    },
    {
      category: "Account Information",
      icon: <Lock className="text-blue-900\" size={20} />,
      items: ["Username", "Password (encrypted)", "Account preferences", "Subscription status", "Payment history"]
    },
    {
      category: "Usage Data",
      icon: <Eye className="text-blue-900" size={20} />,
      items: ["Course progress", "Login times", "IP address", "Device information", "Browser type"]
    },
    {
      category: "Communication Data",
      icon: <Mail className="text-blue-900\" size={20} />,
      items: ["Support messages", "Email communications", "Survey responses", "Feedback submissions"]
    }
  ];

  const rights = [
    {
      right: "Access",
      description: "Request a copy of the personal data we hold about you"
    },
    {
      right: "Rectification",
      description: "Request correction of inaccurate or incomplete personal data"
    },
    {
      right: "Erasure",
      description: "Request deletion of your personal data under certain circumstances"
    },
    {
      right: "Portability",
      description: "Request transfer of your data to another service provider"
    },
    {
      right: "Restriction",
      description: "Request limitation of processing of your personal data"
    },
    {
      right: "Objection",
      description: "Object to processing of your personal data for certain purposes"
    }
  ];

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Privacy Policy - Gary Robinson Trading</title>
      <meta name="description" content="Privacy Policy for Gary Robinson Trading. Learn how we collect, use, and protect your personal information in compliance with GDPR and UK data protection laws." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-blue-900" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>

          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <Shield className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-bold mb-4">GDPR Compliant</h2>
                <p className="text-gray-200 leading-relaxed">
                  This privacy policy complies with the General Data Protection Regulation (GDPR) and UK data protection laws. 
                  We are committed to protecting your privacy and ensuring transparent data practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Privacy Policy Overview</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Gary Robinson Trading ("we," "us," or "our") is committed to protecting and respecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website, use our services, or engage with our educational content.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <h3 className="text-lg font-bold text-blue-800 mb-3">Key Points:</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• We only collect information necessary to provide our services</li>
                  <li>• Your data is never sold to third parties</li>
                  <li>• You have full control over your personal information</li>
                  <li>• We use industry-standard security measures</li>
                  <li>• You can request deletion of your data at any time</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Data Controller Information</h3>
              <p className="text-gray-700 mb-6">
                Gary Robinson Trading Ltd. is the data controller for the personal information we collect. 
                We are registered in England and Wales under company number 12345678.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3">Contact Details:</h4>
                <div className="space-y-1 text-gray-700">
                  <p><strong>Company:</strong> Gary Robinson Trading Ltd.</p>
                  <p><strong>Address:</strong> 123 Financial District, London EC2V 8RF, United Kingdom</p>
                  <p><strong>Email:</strong> privacy@garyrobinsontrading.com</p>
                  <p><strong>Phone:</strong> +44 20 7123 4567</p>
                  <p><strong>Data Protection Officer:</strong> dpo@garyrobinsontrading.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Information We Collect
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We collect different types of information to provide and improve our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    {type.icon}
                  </div>
                  <h3 className="font-bold text-blue-900">{type.category}</h3>
                </div>
                <ul className="space-y-2">
                  {type.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">How We Collect Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-blue-900 mb-3">Directly from You</h4>
                <p className="text-gray-700 text-sm">
                  When you register, make purchases, contact support, or participate in surveys and feedback forms.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-blue-900 mb-3">Automatically</h4>
                <p className="text-gray-700 text-sm">
                  Through cookies, analytics tools, and server logs when you use our website and services.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-blue-900 mb-3">Third Parties</h4>
                <p className="text-gray-700 text-sm">
                  From payment processors, analytics providers, and other service providers we work with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">How We Use Your Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Service Provision</h3>
                <div className="bg-blue-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Provide access to courses and educational content</li>
                    <li>• Process payments and manage subscriptions</li>
                    <li>• Deliver mentorship and coaching services</li>
                    <li>• Provide customer support and technical assistance</li>
                    <li>• Send important service-related communications</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Service Improvement</h3>
                <div className="bg-green-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Analyze usage patterns to improve our platform</li>
                    <li>• Develop new features and educational content</li>
                    <li>• Conduct research and analytics</li>
                    <li>• Personalize your learning experience</li>
                    <li>• Monitor and improve service quality</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Marketing and Communication</h3>
                <div className="bg-yellow-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Send newsletters and educational content (with consent)</li>
                    <li>• Inform you about new courses and services</li>
                    <li>• Conduct surveys and gather feedback</li>
                    <li>• Provide relevant offers and promotions</li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4 italic">
                    Note: You can opt out of marketing communications at any time.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Legal and Security</h3>
                <div className="bg-red-50 rounded-lg p-6">
                  <ul className="space-y-2 text-gray-700">
                    <li>• Comply with legal obligations and regulations</li>
                    <li>• Prevent fraud and ensure platform security</li>
                    <li>• Enforce our terms of service</li>
                    <li>• Protect our rights and interests</li>
                    <li>• Respond to legal requests and court orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Data Sharing and Disclosure</h2>
            
            <div className="bg-green-100 border-l-4 border-green-500 p-6 mb-8">
              <h3 className="text-lg font-bold text-green-800 mb-3">We Do NOT Sell Your Data</h3>
              <p className="text-green-700">
                We never sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <h3 className="text-xl font-bold text-blue-900 mb-4">When We May Share Information</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-blue-900 mb-3">Service Providers</h4>
                <p className="text-gray-700 mb-3">
                  We work with trusted third-party service providers who help us operate our business:
                </p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Payment processors (Stripe, PayPal)</li>
                  <li>• Email service providers (for newsletters and communications)</li>
                  <li>• Analytics providers (Google Analytics)</li>
                  <li>• Cloud hosting services (AWS, Google Cloud)</li>
                  <li>• Customer support tools</li>
                </ul>
                <p className="text-gray-600 text-sm mt-3 italic">
                  These providers are contractually bound to protect your data and use it only for specified purposes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-blue-900 mb-3">Legal Requirements</h4>
                <p className="text-gray-700 text-sm">
                  We may disclose your information if required by law, court order, or government request, 
                  or to protect our rights, property, or safety, or that of our users or the public.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="font-bold text-blue-900 mb-3">Business Transfers</h4>
                <p className="text-gray-700 text-sm">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred 
                  to the new entity, subject to the same privacy protections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Your Privacy Rights
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Under GDPR and UK data protection laws, you have several rights regarding your personal data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {rights.map((right, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-3">
                  <Settings className="text-blue-900 mr-2" size={20} />
                  <h3 className="font-bold text-blue-900">{right.right}</h3>
                </div>
                <p className="text-gray-700 text-sm">{right.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">How to Exercise Your Rights</h3>
              <p className="text-gray-700 mb-4">
                To exercise any of these rights, please contact our Data Protection Officer:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> dpo@garyrobinsontrading.com</p>
                <p><strong>Subject Line:</strong> "Data Protection Request - [Your Request Type]"</p>
                <p><strong>Response Time:</strong> We will respond within 30 days</p>
              </div>
              <p className="text-gray-600 text-sm mt-4">
                We may need to verify your identity before processing your request to ensure data security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Data Security and Retention</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Security Measures</h3>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Lock className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">SSL/TLS encryption for data transmission</span>
                    </li>
                    <li className="flex items-start">
                      <Database className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">Encrypted database storage</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">Regular security audits and updates</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">Access controls and staff training</span>
                    </li>
                    <li className="flex items-start">
                      <Eye className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm">Continuous monitoring and threat detection</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Data Retention</h3>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="space-y-4 text-gray-700 text-sm">
                    <div>
                      <strong>Account Data:</strong> Retained while your account is active and for 7 years after closure for legal compliance.
                    </div>
                    <div>
                      <strong>Course Progress:</strong> Retained for the duration of your access to the course plus 2 years.
                    </div>
                    <div>
                      <strong>Payment Data:</strong> Retained for 7 years for tax and legal compliance.
                    </div>
                    <div>
                      <strong>Marketing Data:</strong> Retained until you unsubscribe or request deletion.
                    </div>
                    <div>
                      <strong>Support Communications:</strong> Retained for 3 years for quality assurance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Cookies and Tracking Technologies</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small data files stored on your device that help us provide better services.
              </p>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Types of Cookies We Use</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Essential Cookies</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Required for the website to function properly. These cannot be disabled.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Authentication and security</li>
                    <li>• Shopping cart functionality</li>
                    <li>• Load balancing</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Analytics Cookies</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Help us understand how visitors use our website to improve user experience.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Google Analytics</li>
                    <li>• Page view tracking</li>
                    <li>• User behavior analysis</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Functional Cookies</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Remember your preferences and settings to enhance your experience.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Language preferences</li>
                    <li>• Theme settings</li>
                    <li>• Course progress</li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="font-bold text-blue-900 mb-3">Marketing Cookies</h4>
                  <p className="text-gray-700 text-sm mb-3">
                    Used to deliver relevant advertisements and track campaign effectiveness.
                  </p>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Facebook Pixel</li>
                    <li>• Google Ads</li>
                    <li>• Retargeting campaigns</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Managing Cookies</h3>
              <p className="text-gray-700 mb-4">
                You can control cookies through your browser settings or our cookie consent banner. 
                Note that disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Updates */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              If you have any questions about this privacy policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:privacy@garyrobinsontrading.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-blue-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
              >
                <Mail className="mr-2" size={16} />
                Contact Privacy Team
              </a>
              <a 
                href="mailto:dpo@garyrobinsontrading.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
              >
                <FileText className="mr-2" size={16} />
                Data Protection Officer
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-300">
              <p>Last updated: January 15, 2024</p>
              <p>Gary Robinson Trading Ltd. | Company Registration: 12345678</p>
              <p>We review and update this policy regularly to ensure compliance with current regulations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;