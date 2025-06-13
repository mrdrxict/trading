import React from 'react';
import { RefreshCw, Clock, CheckCircle, XCircle, Mail, Phone, AlertTriangle, CreditCard } from 'lucide-react';

const Refund = () => {
  const refundPolicies = [
    {
      category: "Online Courses",
      icon: <CheckCircle className="text-green-500" size={24} />,
      period: "30 Days",
      conditions: [
        "Course completion less than 50%",
        "No certificate downloaded",
        "Request within 30 days of purchase",
        "Valid reason provided"
      ],
      process: "Automatic refund to original payment method",
      timeframe: "5-10 business days"
    },
    {
      category: "Mentorship Programs",
      icon: <RefreshCw className="text-blue-500\" size={24} />,
      period: "14 Days",
      conditions: [
        "First session not yet completed",
        "Request within 14 days of enrollment",
        "No more than 2 sessions attended",
        "Written cancellation notice"
      ],
      process: "Pro-rated refund for unused sessions",
      timeframe: "7-14 business days"
    },
    {
      category: "Digital Products",
      icon: <XCircle className="text-orange-500" size={24} />,
      period: "7 Days",
      conditions: [
        "Product not downloaded or accessed",
        "Technical issues preventing access",
        "Request within 7 days of purchase",
        "Proof of technical issue if applicable"
      ],
      process: "Full refund to original payment method",
      timeframe: "3-7 business days"
    }
  ];

  const nonRefundableItems = [
    "Completed courses (>50% progress)",
    "Downloaded certificates",
    "Attended live sessions or webinars",
    "Custom strategy development (after delivery)",
    "One-time consultation calls (after completion)",
    "Physical materials (if shipped)",
    "Services purchased with promotional discounts >50%"
  ];

  const refundSteps = [
    {
      step: 1,
      title: "Submit Request",
      description: "Contact our support team with your refund request and order details",
      icon: <Mail className="text-blue-900\" size={24} />
    },
    {
      step: 2,
      title: "Review Process",
      description: "We review your request against our refund policy within 2 business days",
      icon: <Clock className="text-blue-900" size={24} />
    },
    {
      step: 3,
      title: "Decision Notification",
      description: "You'll receive an email with our decision and next steps",
      icon: <CheckCircle className="text-blue-900\" size={24} />
    },
    {
      step: 4,
      title: "Refund Processing",
      description: "If approved, refund is processed to your original payment method",
      icon: <CreditCard className="text-blue-900" size={24} />
    }
  ];

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Refund Policy - Gary Robinson Trading</title>
      <meta name="description" content="Refund policy for Gary Robinson Trading courses and services. Learn about our 30-day money-back guarantee and refund procedures for courses and mentorship programs." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="text-blue-900" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Refund Policy
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We stand behind the quality of our educational content. Learn about our fair and transparent refund policy.
            </p>
          </div>

          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
                <p className="text-gray-200 leading-relaxed">
                  We offer a 30-day money-back guarantee on most of our courses because we're confident in the value 
                  we provide. If you're not satisfied with your purchase, we'll work with you to make it right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Policies by Category */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Refund Policies by Service Type
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Different services have different refund terms based on their nature and delivery method
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {refundPolicies.map((policy, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-3 rounded-lg mr-4">
                      {policy.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900">{policy.category}</h3>
                      <p className="text-sm text-gray-600">{policy.period} Refund Window</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3">Eligibility Conditions:</h4>
                    <ul className="space-y-2">
                      {policy.conditions.map((condition, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={14} />
                          <span className="text-gray-700">{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="mb-2">
                      <span className="font-semibold text-gray-700">Process: </span>
                      <span className="text-gray-600 text-sm">{policy.process}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Timeframe: </span>
                      <span className="text-gray-600 text-sm">{policy.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              How to Request a Refund
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our simple 4-step refund process ensures quick and fair resolution
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {refundSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Required Information for Refund Requests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Personal Details:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Full name on the account</li>
                    <li>• Email address used for purchase</li>
                    <li>• Order number or transaction ID</li>
                    <li>• Date of purchase</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Refund Details:</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Reason for refund request</li>
                    <li>• Course or service name</li>
                    <li>• Any technical issues experienced</li>
                    <li>• Preferred refund method</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Refundable Items */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Non-Refundable Items and Services
              </h2>
              <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                The following items and services are not eligible for refunds under our standard policy
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8">
              <div className="flex items-start mb-4">
                <AlertTriangle className="text-red-600 mr-3 mt-1 flex-shrink-0" size={24} />
                <h3 className="text-xl font-bold text-red-800">Non-Refundable Items</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {nonRefundableItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <XCircle className="text-red-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-red-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Note:</strong> Even if an item is listed as non-refundable, we may still consider refund requests 
                  on a case-by-case basis for exceptional circumstances such as technical issues, billing errors, or 
                  other valid concerns. Please contact our support team to discuss your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Circumstances */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Special Circumstances and Exceptions</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Technical Issues</h3>
                <p className="text-gray-700 mb-4">
                  If you experience technical problems that prevent you from accessing your purchased content, 
                  we will first attempt to resolve the issue. If we cannot provide a satisfactory solution, 
                  a full refund may be offered regardless of the standard refund window.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Platform downtime exceeding 48 hours</li>
                  <li>• Video content that won't load or play</li>
                  <li>• Login or access issues we cannot resolve</li>
                  <li>• Corrupted or incomplete course materials</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Billing Errors</h3>
                <p className="text-gray-700 mb-4">
                  If you were charged incorrectly due to a system error, duplicate charge, or pricing mistake, 
                  we will provide a full refund immediately upon verification of the error.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Duplicate charges for the same service</li>
                  <li>• Incorrect pricing due to system errors</li>
                  <li>• Unauthorized charges</li>
                  <li>• Currency conversion errors</li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Medical or Emergency Situations</h3>
                <p className="text-gray-700 mb-4">
                  We understand that unexpected life events can interfere with your learning plans. 
                  In cases of serious illness, family emergencies, or other extraordinary circumstances, 
                  we may offer refunds or course transfers outside our standard policy.
                </p>
                <p className="text-gray-600 text-sm">
                  Documentation may be required for verification of emergency situations.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Course Cancellation by Us</h3>
                <p className="text-gray-700 mb-4">
                  If we cancel a course or service due to insufficient enrollment, instructor unavailability, 
                  or other reasons beyond your control, you will receive a full refund or the option to 
                  transfer to an equivalent course.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Full refund processed within 5 business days</li>
                  <li>• Option to transfer to similar course</li>
                  <li>• Course credit for future purchases</li>
                  <li>• Compensation for any inconvenience caused</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Help with a Refund Request?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Our customer support team is here to help you with any refund questions or requests. 
              We aim to respond to all refund inquiries within 24 hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6">
                <Mail className="text-yellow-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-gray-200 text-sm mb-3">refunds@garyrobinsontrading.com</p>
                <p className="text-gray-300 text-xs">Response within 24 hours</p>
              </div>
              
              <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6">
                <Phone className="text-yellow-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Phone Support</h3>
                <p className="text-gray-200 text-sm mb-3">+44 20 7123 4567</p>
                <p className="text-gray-300 text-xs">Mon-Fri, 9 AM - 6 PM GMT</p>
              </div>
              
              <div className="bg-blue-800/50 backdrop-blur-sm rounded-xl p-6">
                <Clock className="text-yellow-500 mx-auto mb-3" size={32} />
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-gray-200 text-sm mb-3">Available on website</p>
                <p className="text-gray-300 text-xs">Mon-Fri, 9 AM - 6 PM GMT</p>
              </div>
            </div>
            
            <div className="text-sm text-gray-300">
              <p>Last updated: January 15, 2024</p>
              <p>Gary Robinson Trading Ltd. | Company Registration: 12345678</p>
              <p>This refund policy is subject to our Terms of Service and applicable consumer protection laws.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;