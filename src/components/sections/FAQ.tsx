import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../ui/Button';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes Gary Robinson's trading education different?",
    answer: "Gary combines 15+ years of professional trading experience with proven teaching methods. Unlike many educators, Gary is an active trader who shares real-time analysis and trades. His programs focus on practical application across Forex, Futures, and Crypto markets with emphasis on risk management and trading psychology."
  },
  {
    question: "How much capital do I need to start trading?",
    answer: "While you can start with as little as $500, we recommend beginning with at least $2,000-$5,000 for proper risk management. This allows you to implement proper position sizing without the pressure of trying to grow a very small account too quickly. We'll work with whatever capital you have and create an appropriate plan."
  },
  {
    question: "Do the strategies work in all market conditions?",
    answer: "Yes, Gary's methodologies are designed to adapt to changing market conditions. You'll learn to identify different market environments (trending, ranging, volatile) and apply the appropriate strategies for each. This adaptability is crucial for long-term trading success across all asset classes."
  },
  {
    question: "How long does it take to become consistently profitable?",
    answer: "This varies based on dedication, previous experience, and implementation. Most students see significant improvement within 3-6 months, with consistency typically achieved within 6-12 months. Gary focuses on sustainable long-term profitability rather than quick but risky gains."
  },
  {
    question: "What's included in the mentorship programs?",
    answer: "Mentorship programs include regular 1-on-1 video sessions with Gary, group coaching calls, trading room access, real-time trade alerts, performance analysis, and direct communication access. The frequency and duration depend on the program level you choose."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, all courses come with a 30-day money-back guarantee. If you complete the lessons, implement the strategies, and don't see value in the material, contact us for a full refund. Mentorship programs can be cancelled anytime with no long-term commitment required."
  },
  {
    question: "Can I trade part-time while keeping my job?",
    answer: "Absolutely! Many of Gary's students are part-time traders who maintain full-time careers. The strategies are designed to work with limited screen time, and you'll learn to identify high-probability setups efficiently. Gary will help you create a trading schedule that fits your lifestyle."
  },
  {
    question: "What markets does Gary teach?",
    answer: "Gary specializes in three main markets: Forex (major and minor currency pairs), Futures (commodities, indices, interest rates), and Cryptocurrency (Bitcoin, major altcoins). You'll learn how to apply similar principles across all markets while understanding their unique characteristics."
  },
  {
    question: "Is trading gambling?",
    answer: "Professional trading is not gambling when done correctly. Gary teaches systematic approaches with proven edge, proper risk management, and statistical advantages. You'll learn to treat trading as a business with rules, discipline, and consistent methodology rather than relying on luck or emotions."
  },
  {
    question: "What support is available after purchasing a course?",
    answer: "All courses include access to our private community, email support, and regular Q&A sessions. Advanced and Elite packages include live trading sessions and priority support. Mentorship programs provide direct access to Gary for personalized guidance and support."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Get answers to common questions about Gary's trading programs and methodology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300"
              >
                <button 
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="font-medium text-lg text-blue-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-900 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-blue-900 flex-shrink-0" size={20} />
                  )}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6 text-lg">
              Still have questions? Gary is here to help.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Gary Directly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;