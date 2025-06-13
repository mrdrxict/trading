import React, { useState } from 'react';
import { Award, CheckCircle, Clock, Users, BookOpen, Download, Star, Trophy, Target, FileText } from 'lucide-react';
import Button from '../components/ui/Button';

const Certifications = () => {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const certificationLevels = [
    { id: 'all', name: 'All Levels', count: 6 },
    { id: 'foundation', name: 'Foundation', count: 2 },
    { id: 'professional', name: 'Professional', count: 2 },
    { id: 'expert', name: 'Expert', count: 2 }
  ];

  const certifications = [
    {
      id: 1,
      name: 'Certified Forex Trader (CFT)',
      level: 'foundation',
      duration: '8 weeks',
      price: '£497',
      description: 'Master the fundamentals of forex trading with comprehensive certification',
      requirements: [
        'Complete 40 hours of coursework',
        'Pass written examination (80% minimum)',
        'Complete 20 practice trades',
        'Submit trading journal analysis'
      ],
      curriculum: [
        'Forex Market Fundamentals',
        'Currency Pair Analysis',
        'Technical Analysis Basics',
        'Risk Management Principles',
        'Trading Psychology',
        'Economic Calendar Usage'
      ],
      benefits: [
        'Industry-recognized certification',
        'Digital certificate and badge',
        'Lifetime access to materials',
        'Alumni network access',
        'Continuing education credits'
      ],
      examDetails: {
        format: 'Online proctored exam',
        duration: '2 hours',
        questions: '100 multiple choice',
        passingScore: '80%',
        retakes: '2 free retakes included'
      },
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Certified Futures Specialist (CFS)',
      level: 'foundation',
      duration: '10 weeks',
      price: '£597',
      description: 'Comprehensive certification in futures and commodities trading',
      requirements: [
        'Complete 50 hours of coursework',
        'Pass written examination (80% minimum)',
        'Complete 30 practice trades',
        'Present market analysis project'
      ],
      curriculum: [
        'Futures Market Structure',
        'Commodity Analysis',
        'Contract Specifications',
        'Margin and Leverage',
        'Seasonal Trading Patterns',
        'Options on Futures'
      ],
      benefits: [
        'Professional certification',
        'Digital credentials',
        'Industry recognition',
        'Career advancement',
        'Networking opportunities'
      ],
      examDetails: {
        format: 'Online proctored exam',
        duration: '2.5 hours',
        questions: '120 multiple choice',
        passingScore: '80%',
        retakes: '2 free retakes included'
      },
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Professional Trading Analyst (PTA)',
      level: 'professional',
      duration: '12 weeks',
      price: '£997',
      description: 'Advanced certification for professional trading analysis and strategy',
      requirements: [
        'Hold CFT or equivalent certification',
        'Complete 80 hours of advanced coursework',
        'Pass comprehensive examination (85% minimum)',
        'Complete capstone project',
        'Demonstrate 6 months trading experience'
      ],
      curriculum: [
        'Advanced Technical Analysis',
        'Quantitative Analysis Methods',
        'Multi-Asset Portfolio Management',
        'Algorithmic Trading Concepts',
        'Risk Management Systems',
        'Professional Trading Ethics'
      ],
      benefits: [
        'Professional designation',
        'Industry credibility',
        'Higher earning potential',
        'Mentorship opportunities',
        'Exclusive events access'
      ],
      examDetails: {
        format: 'Online proctored exam + Project',
        duration: '3 hours + Project submission',
        questions: '150 multiple choice + Case studies',
        passingScore: '85%',
        retakes: '1 free retake included'
      },
      image: 'https://images.pexels.com/photos/6781341/pexels-photo-6781341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Certified Risk Manager (CRM)',
      level: 'professional',
      duration: '10 weeks',
      price: '£897',
      description: 'Specialized certification in trading risk management and compliance',
      requirements: [
        'Hold foundation-level certification',
        'Complete 60 hours of specialized coursework',
        'Pass risk management examination (85% minimum)',
        'Complete risk assessment project',
        'Demonstrate risk management experience'
      ],
      curriculum: [
        'Risk Assessment Methodologies',
        'Portfolio Risk Management',
        'Regulatory Compliance',
        'Stress Testing and Scenarios',
        'Risk Reporting Systems',
        'Crisis Management Protocols'
      ],
      benefits: [
        'Risk management expertise',
        'Compliance knowledge',
        'Career specialization',
        'Industry recognition',
        'Regulatory awareness'
      ],
      examDetails: {
        format: 'Online proctored exam + Project',
        duration: '2.5 hours + Project',
        questions: '100 multiple choice + Scenarios',
        passingScore: '85%',
        retakes: '1 free retake included'
      },
      image: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: 'Master Trading Strategist (MTS)',
      level: 'expert',
      duration: '16 weeks',
      price: '£1,497',
      description: 'Elite certification for master-level trading strategy development',
      requirements: [
        'Hold PTA certification',
        'Complete 120 hours of master-level coursework',
        'Pass comprehensive examination (90% minimum)',
        'Develop original trading strategy',
        'Demonstrate 2+ years professional experience',
        'Peer review and defense'
      ],
      curriculum: [
        'Strategy Development Framework',
        'Backtesting and Optimization',
        'Market Microstructure',
        'Institutional Trading Methods',
        'Performance Attribution',
        'Research and Development'
      ],
      benefits: [
        'Master-level recognition',
        'Strategy development expertise',
        'Research capabilities',
        'Teaching opportunities',
        'Industry leadership'
      ],
      examDetails: {
        format: 'Comprehensive exam + Strategy defense',
        duration: '4 hours + 1 hour defense',
        questions: 'Mixed format + Original research',
        passingScore: '90%',
        retakes: 'Additional fee required'
      },
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      name: 'Certified Trading Instructor (CTI)',
      level: 'expert',
      duration: '14 weeks',
      price: '£1,297',
      description: 'Expert certification for teaching and mentoring other traders',
      requirements: [
        'Hold professional-level certification',
        'Complete 100 hours of instructor training',
        'Pass teaching methodology examination (90% minimum)',
        'Complete teaching practicum',
        'Demonstrate 3+ years trading experience',
        'Teaching portfolio submission'
      ],
      curriculum: [
        'Adult Learning Principles',
        'Curriculum Development',
        'Assessment and Evaluation',
        'Technology in Education',
        'Mentoring Techniques',
        'Professional Development'
      ],
      benefits: [
        'Teaching qualification',
        'Mentoring expertise',
        'Educational leadership',
        'Career diversification',
        'Industry contribution'
      ],
      examDetails: {
        format: 'Teaching exam + Practicum',
        duration: '3 hours + Teaching demo',
        questions: 'Teaching scenarios + Demonstration',
        passingScore: '90%',
        retakes: 'Additional fee required'
      },
      image: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const accreditations = [
    {
      name: 'International Association of Trading Educators',
      logo: '🏛️',
      description: 'Globally recognized standards for trading education'
    },
    {
      name: 'Financial Markets Certification Board',
      logo: '📜',
      description: 'Professional certification authority for financial markets'
    },
    {
      name: 'Continuing Professional Development (CPD)',
      logo: '🎓',
      description: 'Accredited for continuing education credits'
    },
    {
      name: 'European Trading Standards Authority',
      logo: '🇪🇺',
      description: 'Meets European standards for trading education'
    }
  ];

  const successStories = [
    {
      name: 'Sarah Johnson',
      certification: 'Professional Trading Analyst (PTA)',
      story: 'The PTA certification helped me transition from retail trading to a professional role at a hedge fund. The comprehensive curriculum and practical projects gave me the confidence and skills needed.',
      outcome: 'Secured position as Junior Analyst at £65,000 salary',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Michael Chen',
      certification: 'Master Trading Strategist (MTS)',
      story: 'The MTS program pushed me to develop my own proprietary trading strategy. The rigorous curriculum and peer review process elevated my trading to an institutional level.',
      outcome: 'Launched successful trading consultancy',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Emma Rodriguez',
      certification: 'Certified Risk Manager (CRM)',
      story: 'The CRM certification opened doors to risk management roles I never thought possible. The practical knowledge of regulatory compliance was invaluable.',
      outcome: 'Promoted to Head of Risk at investment firm',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const filteredCertifications = selectedLevel === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.level === selectedLevel);

  return (
    <div className="pt-24">
      {/* SEO Meta Tags */}
      <title>Trading Certifications - Gary Robinson Trading</title>
      <meta name="description" content="Professional trading certifications from foundation to expert level. Industry-recognized credentials in forex, futures, risk management, and trading instruction." />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional Trading Certifications
            </h1>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Advance your trading career with industry-recognized certifications from foundation to expert level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Award className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">6</div>
              <p className="text-gray-200">Certification Programs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Users className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">500+</div>
              <p className="text-gray-200">Certified Professionals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Trophy className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">95%</div>
              <p className="text-gray-200">Pass Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <Target className="text-yellow-500 mx-auto mb-3" size={32} />
              <div className="text-2xl font-bold text-yellow-500 mb-2">Global</div>
              <p className="text-gray-200">Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Levels Filter */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Choose Your Certification Path
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Progress through our structured certification levels from foundation to expert
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {certificationLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setSelectedLevel(level.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedLevel === level.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {level.name} ({level.count})
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCertifications.map((cert) => (
              <div key={cert.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      cert.level === 'foundation' ? 'bg-green-500 text-white' :
                      cert.level === 'professional' ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {cert.level.toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                    {cert.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-blue-900 text-xl">{cert.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-1" size={14} />
                      {cert.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{cert.description}</p>
                  
                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {cert.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2"></div>
                          {req}
                        </li>
                      ))}
                      {cert.requirements.length > 3 && (
                        <li className="text-sm text-gray-500">
                          +{cert.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Exam Details */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4">
                    <h4 className="font-bold text-blue-900 mb-2 flex items-center">
                      <FileText className="mr-2" size={16} />
                      Exam Details:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">Format:</span>
                        <div className="font-medium">{cert.examDetails.format}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Duration:</span>
                        <div className="font-medium">{cert.examDetails.duration}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Questions:</span>
                        <div className="font-medium">{cert.examDetails.questions}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Pass Score:</span>
                        <div className="font-medium">{cert.examDetails.passingScore}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="secondary" fullWidth>
                      Enroll Now - {cert.price}
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2" size={16} />
                      Syllabus
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Accreditations & Recognition
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our certifications are recognized by leading industry organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((accred, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{accred.logo}</div>
                <h3 className="font-bold text-blue-900 mb-2">{accred.name}</h3>
                <p className="text-gray-600 text-sm">{accred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Success Stories
            </h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              See how our certifications have transformed careers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-blue-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.certification}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center">
                    <Trophy className="text-green-600 mr-2" size={16} />
                    <span className="font-medium text-green-800">Outcome:</span>
                  </div>
                  <p className="text-green-700 text-sm mt-1">{story.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Certification Journey
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
              Take the next step in your trading career with our industry-recognized certification programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Browse All Certifications
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;