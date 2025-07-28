
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const benefits = [
    'AI-personalized courses tailored to your interests',
    '30-day money-back guarantee',
    'Access to 1000+ courses and growing',
    'Join a community of 50,000+ learners',
    'Mobile app for learning on the go',
    'Certificate of completion for all courses',
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <Gift className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Limited Time Offer</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Start Your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Learning Journey
              </span>
              Today
            </h2>

            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of learners who have discovered the power of personalized education. 
              Get started with your free trial and experience the future of learning.
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20 mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="text-white/80 text-lg mb-2">Start with our</div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  Free Trial
                </div>
                <div className="text-blue-200">
                  Then only <span className="text-2xl font-bold text-white">$29/month</span>
                </div>
                <div className="text-sm text-white/60 mt-2">
                  Cancel anytime • No setup fees
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg px-8 py-4 hover-lift shadow-2xl">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white text-lg px-8 py-4 hover:bg-white/20 transition-all duration-300">
                    View All Plans
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-left bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-8 text-white/60 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>50,000+ Active Learners</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⭐ 4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🏆 95% Completion Rate</span>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <p className="text-white/80 mb-6">
              Ready to experience learning that adapts to you?
            </p>
            
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-slate-900 text-xl px-12 py-6 hover-lift animate-pulse-glow font-bold">
                Get Started Now - It's Free!
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            
            <p className="text-white/60 text-sm mt-4">
              No credit card required • Setup takes less than 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
