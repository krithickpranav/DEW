// --- 1. Imports ---
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  // --- 2. Hooks ---
  const [testimonialsRef, isTestimonialsVisible] = useScrollAnimation();
  const [cardsRef, visibleCards] = useStaggeredAnimation(5, 150);

  // --- 3. Data Definitions ---
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'Fleet Manager',
      company: 'TransLogistics Pvt Ltd',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Deepam Engineering has been our trusted partner for over 3 years. Their 32ft containers are incredibly durable and have significantly reduced our maintenance costs. The quality is outstanding!',
      rating: 5,
      project: '32ft Container Fleet'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Operations Director',
      company: 'ColdChain Solutions',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The customized refrigerated containers delivered by Deepam Engineering exceeded our expectations. Perfect temperature control and robust construction make them ideal for our pharmaceutical logistics.',
      rating: 5,
      project: 'Custom Refrigerated Containers'
    },
    {
      id: 3,
      name: 'Mohammad Ali',
      position: 'Supply Chain Head',
      company: 'Global Exports Ltd',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Professional service and timely delivery. The 24ft containers are perfect for our regional distribution network. Deepam Engineering understands our business needs perfectly.',
      rating: 5,
      project: '24ft Container Series'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      position: 'Fleet Operations Manager',
      company: 'Highway Transport Solutions',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The driver cabins manufactured by Deepam Engineering are exceptional. Comfortable, durable, and built to withstand long-haul operations. Our drivers love the ergonomic design and ventilation.',
      rating: 5,
      project: 'Driver Cabin Series'
    },
    {
      id: 5,
      name: 'Sunita Patel',
      position: 'Procurement Manager',
      company: 'FoodTech Industries',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Food-grade containers with excellent hygiene standards. The attention to detail and compliance with food safety regulations is impressive. Highly recommended for food industry applications.',
      rating: 5,
      project: 'Food-Grade Containers'
    }
  ];

  // --- 4. JSX Rendering ---
  return (
    <section 
      ref={testimonialsRef}
      className="py-16 bg-slate-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-blue-600 font-semibold text-lg mb-2 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Hear from our satisfied clients who have 
              experienced the quality and reliability of our container solutions.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`group relative bg-white rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-500 ${
                  visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Quote className="text-blue-600 group-hover:text-white transition-colors duration-300" size={20} />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-base md:text-lg text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Project */}
                <div className="text-xs md:text-sm text-blue-600 font-medium mb-4">
                  Project: {testimonial.project}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-slate-600">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-4 left-4 w-8 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className={`bg-white rounded-2xl p-6 md:p-8 text-center shadow-lg transition-all duration-1000 delay-500 ${
            isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
              Trusted by Leading Companies
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {/* Company Logos Placeholder */}
              {['KKR TRANSPORT', 'KMR TRANSPORT', 'UMAVAN & CO', 'G7 LOGISTICS'].map((client, i) => (
                <div 
                  key={i}
                  className="h-12 md:h-16 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center p-2"
                >
                  <span className="text-xs md:text-sm text-slate-700 font-semibold">{client}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">99%</div>
                  <div className="text-xs md:text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-xs md:text-sm text-slate-600">Repeat Business</div>
                </div>
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-600 mb-2">4.9/5</div>
                  <div className="text-xs md:text-sm text-slate-600">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;