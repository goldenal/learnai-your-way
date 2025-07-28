
import React from 'react';
import { ArrowRight, UserCheck, Settings, Rocket } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: UserCheck,
      title: 'Tell Us Your Interests',
      description: 'Share what you\'re passionate about - sports, cooking, music, travel, or anything else. Our AI uses this to understand how to make learning relevant for you.',
      features: ['Quick interest assessment', 'Learning style analysis', 'Goal setting'],
    },
    {
      number: '02',
      icon: Settings,
      title: 'AI Creates Your Path',
      description: 'Our advanced AI algorithms analyze your profile and generate personalized course content, examples, and assessments tailored specifically to your interests.',
      features: ['Custom content generation', 'Adaptive difficulty', 'Interest-based examples'],
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Learn & Excel',
      description: 'Start learning with content that speaks your language. As you progress, the AI continuously adapts to keep you engaged and maximize your learning potential.',
      features: ['Real-time adaptation', 'Progress tracking', 'Community connections'],
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-200">
            <Settings className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Simple Process</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold">Sylliq</span> Works
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Getting started with personalized learning is easier than you think. 
            Our AI does all the heavy lifting to create your perfect learning experience.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Content Side */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <span className="text-6xl lg:text-7xl font-bold text-blue-100">
                    {step.number}
                  </span>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                    index === 0 ? 'from-blue-500 to-purple-600' :
                    index === 1 ? 'from-purple-500 to-pink-600' :
                    'from-teal-500 to-blue-600'
                  } flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg text-slate-600 mb-6 max-w-lg">
                  {step.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {step.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center lg:justify-start space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex justify-center lg:justify-start">
                    <ArrowRight className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>

              {/* Visual Side */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
                    <step.icon className={`w-24 h-24 ${
                      index === 0 ? 'text-blue-500' :
                      index === 1 ? 'text-purple-500' :
                      'text-teal-500'
                    }`} />
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <div className="h-4 bg-slate-200 rounded-full">
                      <div 
                        className={`h-full bg-gradient-to-r ${
                          index === 0 ? 'from-blue-500 to-purple-600' :
                          index === 1 ? 'from-purple-500 to-pink-600' :
                          'from-teal-500 to-blue-600'
                        } rounded-full`}
                        style={{ width: `${(index + 1) * 33}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-slate-500 text-center">
                      Step {index + 1} of 3
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden">
                  <ArrowRight className="w-8 h-8 text-blue-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <button className="px-8 py-3 rounded-lg text-white font-semibold hover-lift transition-all duration-300 text-lg shadow-md bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 hover:from-blue-700 hover:to-pink-600">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
