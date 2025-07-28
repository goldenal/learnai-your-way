
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Manager',
      interest: 'Cooking Enthusiast',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c647?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Learning Python through recipe algorithms was genius! I finally understood data structures when they explained arrays using ingredient lists. The AI made programming feel natural and fun.',
      course: 'Programming Fundamentals',
      highlight: 'Recipe-based coding examples',
    },
    {
      name: 'Marcus Johnson',
      role: 'Finance Analyst',
      interest: 'Football Fan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Data science through football stats changed everything for me. Instead of boring datasets, I was analyzing player performance and team strategies. Made statistics actually exciting!',
      course: 'Data Science Bootcamp',
      highlight: 'Sports analytics focus',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Teacher',
      interest: 'Travel Lover',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The AI created a business course using travel planning examples. I learned about budgeting, logistics, and economics through organizing imaginary trips. Brilliant approach!',
      course: 'Business Analytics',
      highlight: 'Travel-themed case studies',
    },
    {
      name: 'David Park',
      role: 'Software Engineer',
      interest: 'Music Producer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Machine learning through music theory was mind-blowing. Pattern recognition made sense when explained through chord progressions. The personalization is incredibly smart.',
      course: 'Machine Learning',
      highlight: 'Music pattern analysis',
    },
    {
      name: 'Priya Patel',
      role: 'UX Designer',
      interest: 'Gardening',
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'Learning UX design through garden planning was unexpected but perfect. User journeys became garden paths, and information architecture made sense through plant organization.',
      course: 'UX Design Masterclass',
      highlight: 'Garden design metaphors',
    },
    {
      name: 'Ahmed Hassan',
      role: 'Startup Founder',
      interest: 'Photography',
      avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: 'The entrepreneurship course used photography business examples throughout. From pricing models to client acquisition, everything was relevant to my actual interests. Incredibly effective!',
      course: 'Entrepreneurship 101',
      highlight: 'Photography business focus',
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-800">Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold">Learners</span> Say
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how AI-powered personalization has transformed learning experiences 
            for thousands of students across different interests and backgrounds.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-8 card-hover border border-slate-100 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Course & Highlight */}
              <div className="mb-6 space-y-2">
                <div className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {testimonial.course}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  ✨ {testimonial.highlight}
                </div>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.interest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                50,000+
              </div>
              <div className="text-slate-600">Happy Learners</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                4.9/5
              </div>
              <div className="text-slate-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                95%
              </div>
              <div className="text-slate-600">Completion Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-md">
                1000+
              </div>
              <div className="text-slate-600">AI-Generated Courses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
