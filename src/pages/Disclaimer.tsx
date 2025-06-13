import React from 'react';
import { AlertTriangle, Shield, FileText, Info, ExternalLink } from 'lucide-react';

const Disclaimer = () => {
  const riskFactors = [
    {
      title: "Market Volatility",
      description: "Financial markets are inherently volatile and unpredictable. Prices can move rapidly in either direction, potentially resulting in significant losses."
    },
    {
      title: "Leverage Risk",
      description: "Trading with leverage amplifies both potential profits and losses. You can lose more than your initial investment when using leveraged products."
    },
    {
      title: "Liquidity Risk",
      description: "Some markets may have limited liquidity, making it difficult to execute trades at desired prices or exit positions quickly."
    },
    {
      title: "Counterparty Risk",
      description: "There is always a risk that the other party in a financial transaction may default on their obligations."
    },
    {
      title: "Technology Risk",
      description: "Trading platforms and systems may experience technical failures, connectivity issues, or cyber security breaches."
    },
    {
      title: "Regulatory Risk",
      description: "Changes in regulations or government policies can significantly impact market conditions and trading opportunities."
    }
  ];

  const importantNotices = [
    {
      title: "No Guaranteed Returns",
      content: "Past performance is not indicative of future results. No trading strategy or educational content guarantees profits or prevents losses."
    },
    {
      title: "Educational Purpose Only",
      content: "All content provided is for educational purposes only and should not be considered as personalized investment advice."
    },
    {
      title: "Professional Advice",
      content: "Always consult with qualified financial advisors before making investment decisions based on your individual circumstances."
    },
    {
      title: "Risk Capital Only",
      content: "Only trade with money you can afford to lose. Never risk funds needed for essential expenses or retirement."
    }
  ];

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Risk Disclaimer - Gary Robinson Trading</title>
      <meta name="description" content="Important risk disclaimer and legal information for Gary Robinson Trading. Understand the risks involved in trading forex, futures, and cryptocurrency markets." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="text-red-900" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Risk Disclaimer
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Important information about the risks involved in trading financial markets. Please read carefully before engaging in any trading activities.
            </p>
          </div>

          <div className="bg-red-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <AlertTriangle className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={24} />
              <div>
                <h2 className="text-xl font-bold mb-4">IMPORTANT RISK WARNING</h2>
                <p className="text-gray-200 leading-relaxed">
                  Trading in financial markets involves substantial risk of loss and is not suitable for all investors. 
                  The high degree of leverage can work against you as well as for you. Before deciding to trade, 
                  you should carefully consider your investment objectives, level of experience, and risk appetite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Risk Disclaimer */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">General Risk Disclaimer</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Gary Robinson Trading ("we," "us," or "our") provides educational content, courses, and mentorship 
                services related to financial market trading. This disclaimer outlines the significant risks 
                associated with trading and the limitations of our services.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
                <div className="flex items-start">
                  <Info className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-2">Key Risk Statement</h3>
                    <p className="text-yellow-700">
                      Trading foreign exchange, futures, and cryptocurrency markets carries a high level of risk 
                      and may not be suitable for all investors. The possibility exists that you could sustain 
                      a loss of some or all of your initial investment.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">No Investment Advice</h3>
              <p className="text-gray-700 mb-6">
                The information provided through our courses, mentorship programs, and other services is for 
                educational purposes only and should not be construed as investment advice. We do not provide 
                personalized investment recommendations or advice tailored to individual circumstances.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Past Performance Disclaimer</h3>
              <p className="text-gray-700 mb-6">
                Any trading results, performance data, or testimonials presented are not indicative of future 
                results. Past performance is not a guarantee of future performance. Individual results may vary 
                significantly based on market conditions, trading experience, and risk management practices.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Educational Content Limitations</h3>
              <p className="text-gray-700 mb-6">
                Our educational materials are designed to provide general information about trading concepts, 
                strategies, and market analysis. This content should not be considered as specific trading 
                recommendations or signals. Students must conduct their own research and analysis before 
                making any trading decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Factors */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Specific Risk Factors
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding these risk factors is essential before engaging in any trading activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riskFactors.map((risk, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-start mb-4">
                  <AlertTriangle className="text-red-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <h3 className="font-bold text-blue-900">{risk.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{risk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market-Specific Risks */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Market-Specific Risk Disclosures</h2>
            
            <div className="space-y-8">
              {/* Forex Risks */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Foreign Exchange (Forex) Trading Risks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Currency values can be highly volatile and influenced by economic, political, and social factors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Leverage in forex trading can magnify both profits and losses significantly</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Interest rate differentials and central bank policies can impact currency movements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span>Market gaps and slippage can occur, especially during news events or market openings</span>
                  </li>
                </ul>
              </div>

              {/* Futures Risks */}
              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Futures Trading Risks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Futures contracts have expiration dates and may require physical delivery or cash settlement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Margin requirements can change rapidly, potentially requiring additional capital</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Commodity prices can be affected by weather, supply disruptions, and geopolitical events</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></div>
                    <span>Limited liquidity in some contracts may make it difficult to exit positions</span>
                  </li>
                </ul>
              </div>

              {/* Cryptocurrency Risks */}
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Cryptocurrency Trading Risks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                    <span>Extreme price volatility with potential for rapid and substantial losses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                    <span>Regulatory uncertainty and potential for government restrictions or bans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                    <span>Security risks including exchange hacks, wallet vulnerabilities, and lost private keys</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                    <span>Market manipulation risks due to relatively low market capitalization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></div>
                    <span>Technology risks including network congestion, hard forks, and protocol changes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Important Notices
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {importantNotices.map((notice, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start mb-4">
                  <Shield className="text-blue-900 mr-3 mt-1 flex-shrink-0" size={20} />
                  <h3 className="font-bold text-blue-900">{notice.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{notice.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Legal and Regulatory Information</h2>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Regulatory Compliance</h3>
              <p className="text-gray-700 mb-6">
                Gary Robinson Trading is an educational service provider and is not a licensed investment advisor, 
                broker-dealer, or financial institution. We do not provide regulated financial services and are 
                not subject to financial services regulations in any jurisdiction.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Limitation of Liability</h3>
              <p className="text-gray-700 mb-6">
                To the maximum extent permitted by law, Gary Robinson Trading, its directors, employees, and 
                affiliates shall not be liable for any direct, indirect, incidental, special, or consequential 
                damages arising from the use of our services or reliance on our educational content.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Indemnification</h3>
              <p className="text-gray-700 mb-6">
                By using our services, you agree to indemnify and hold harmless Gary Robinson Trading from any 
                claims, losses, damages, or expenses arising from your trading activities or use of our educational 
                content.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Governing Law</h3>
              <p className="text-gray-700 mb-6">
                This disclaimer and all related matters are governed by the laws of England and Wales. Any disputes 
                shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Questions About This Disclaimer?
            </h2>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              If you have any questions about this risk disclaimer or need clarification on any points, 
              please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:legal@garyrobinsontrading.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-blue-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
              >
                <FileText className="mr-2" size={16} />
                Contact Legal Team
              </a>
              <a 
                href="/terms"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors"
              >
                <ExternalLink className="mr-2" size={16} />
                View Terms of Service
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-300">
              <p>Last updated: January 15, 2024</p>
              <p>Gary Robinson Trading Ltd. | Company Registration: 12345678</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;