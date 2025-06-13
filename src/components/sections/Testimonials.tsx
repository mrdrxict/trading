import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Full-time Trader",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "After struggling for years, the strategies I learned helped me quit my 9-5 job and become a full-time trader. I'm now consistently profitable and have the freedom I always wanted.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Part-time Trader",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "As a busy professional, I needed a trading approach that didn't require hours of screen time. This course taught me how to trade effectively in just 1-2 hours per day. I'm now making more from trading part-time than from my main job!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Former Stock Trader",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Coming from stock trading, I found forex intimidating. This mentorship program broke everything down and gave me a clear path to follow. The 1-on-1 guidance was invaluable in helping me adapt my skills to the forex market.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "Beginner Trader",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "I started with zero trading experience, and was honestly skeptical of online trading courses. But the step-by-step approach and supportive community helped me go from complete novice to consistently profitable in just 6 months.",
    rating: 5,
  },
  {
    id: 5,
    name: "James Wilson",
    role: "Institutional Trader",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Even with my background in institutional trading, I picked up several new techniques that significantly improved my performance. The advanced order flow concepts and risk management strategies are top-notch.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Success Stories from Real Traders
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Don't just take my word for it. Here's what my students have to say about their experience.
          </p>
        </div>

        <div className="relative">
          {/* Mobile testimonials (single view) */}
          <div className="md:hidden">
            <div className="relative bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-blue-900">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500" size={16} fill="#EAB308" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">"{testimonials[currentIndex].content}"</p>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? 'bg-blue-900' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop testimonials (3 columns) */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const testimonialIndex = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              
              return (
                <div 
                  key={testimonial.id} 
                  className={`bg-gray-50 rounded-xl p-6 shadow-md transition-all duration-300 ${
                    offset === 1 ? 'scale-105 border-2 border-yellow-500' : ''
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-blue-900">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-500" size={16} fill="#EAB308" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">"{testimonial.content}"</p>
                </div>
              );
            })}
          </div>

          {/* Navigation buttons */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-blue-900" size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition-colors"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-blue-900" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;