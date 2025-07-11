import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const stats = [
    { number: '10K+', label: 'Active Learners' },
    { number: '500+', label: 'Courses Available' },
    { number: '4.8/5', label: 'Average Rating' },
    { number: '95%', label: 'Completion Rate' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-fadeInUp">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Learn <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Anything</span>,
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Your Way</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-medium">
              AI transforms every course to match your interests. 
              <br className="hidden md:block" />
              Learn <strong>data science through football</strong>, <strong>coding through cooking</strong>, 
              or <strong>business through your passions</strong>.
            </p>
          </div>

          {/* Interactive Examples */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              See How It Works ✨
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="text-4xl mb-3">⚽</div>
                <h3 className="font-bold text-slate-900 mb-2">Football Fan?</h3>
                <p className="text-slate-600">Learn data analysis through player statistics, team performance, and match predictions.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="text-4xl mb-3">🍳</div>
                <h3 className="font-bold text-slate-900 mb-2">Love Cooking?</h3>
                <p className="text-slate-600">Master project management through restaurant operations and menu planning.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/onboarding">
              <Button className="gradient-primary text-lg px-8 py-4 hover-lift animate-pulse-glow">
                Start Your Personalized Journey
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" className="text-lg px-8 py-4 hover-lift border-2">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-12">
            <p className="text-slate-500 mb-8 text-lg">Trusted by learners worldwide</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
