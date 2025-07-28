
import React from 'react';
import { Brain, Target, Users, BarChart3, Zap, Heart } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Personalization',
      description: 'Our advanced AI analyzes your interests and learning style to create uniquely tailored content just for you.',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      icon: Target,
      title: 'Adaptive Learning Paths',
      description: 'Dynamic course progression that adjusts difficulty and pacing based on your performance and preferences.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: BarChart3,
      title: 'Personalized Assessments',
      description: 'Get graded on projects and examples that match your interests, making evaluation more meaningful.',
      gradient: 'from-teal-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Interest-Based Communities',
      description: 'Connect with learners who share your passions and learn together in specialized groups.',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: Zap,
      title: 'Real-Time Content Generation',
      description: 'Course materials are generated and updated in real-time to stay relevant to your evolving interests.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Heart,
      title: 'Engagement Optimization',
      description: 'AI monitors your engagement and automatically adjusts content to keep you motivated and focused.',
      gradient: 'from-red-500 to-pink-600',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Revolutionary Features</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">Sylliq</span> Works
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Traditional education uses a one-size-fits-all approach. We believe every learner is unique, 
            and our AI technology makes personalized education accessible to everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group card-hover bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`h-1 bg-gradient-to-r ${feature.gradient} mt-6 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Experience Personalized Learning?
            </h3>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have discovered the power of AI-personalized education. 
              Start your journey today with a free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl text-white font-semibold hover-lift transition-all duration-300 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 shadow-lg hover:from-blue-700 hover:to-pink-600">
                Start Free Trial
              </button>
              <button className="bg-white px-8 py-4 rounded-xl font-semibold border border-slate-200 hover:border-blue-300 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
