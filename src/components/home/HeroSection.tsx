
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Sparkles, TrendingUp, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [selectedInterest, setSelectedInterest] = useState('football');

  const interests = [
    { id: 'football', label: 'Football Stats', description: 'Learn data science through player analytics and match statistics' },
    { id: 'cooking', label: 'Recipe Science', description: 'Master programming by building recipe algorithms and kitchen automation' },
    { id: 'music', label: 'Music Theory', description: 'Understand mathematics through rhythm patterns and harmonic analysis' },
    { id: 'travel', label: 'Travel Planning', description: 'Study economics through travel budgeting and currency analysis' },
  ];

  const stats = [
    { number: '50K+', label: 'Active Learners' },
    { number: '1000+', label: 'AI-Generated Courses' },
    { number: '95%', label: 'Completion Rate' },
    { number: '4.9', label: 'Average Rating' },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">AI-Powered Personalization</span>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Learn
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent font-extrabold drop-shadow-md">Anything,</span>
              <span className="text-slate-700">Your Way</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-2xl">
              Our AI transforms every course to match your interests. 
              Learn courses like data science through football, programming through cooking, 
              or any topic through what you love most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/register">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 hover-lift font-bold shadow-lg border-2 border-blue-700 bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)', // blue-600 to purple-600 (brand colors)
                    color: '#fff',
                  }}
                >
                  Start Learning Free
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover-lift bg-white/80 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Demo Side */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
                  See Personalization in Action
                </h3>
                <p className="text-slate-600">Choose your interest and see how courses adapt:</p>
              </div>

              {/* Interest Selector */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => setSelectedInterest(interest.id)}
                    className={`p-3 rounded-xl text-left transition-all duration-300 ${
                      selectedInterest === interest.id
                        ? 'bg-blue-100 border-2 border-blue-500 transform scale-105'
                        : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-medium text-sm">{interest.label}</div>
                  </button>
                ))}
              </div>

              {/* Course Preview */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-800 bg-blue-100 px-3 py-1 rounded-full">
                    Data Science Course
                  </span>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                
                <h4 className="font-bold mb-2">
                  {interests.find(i => i.id === selectedInterest)?.label} Analytics
                </h4>
                
                <p className="text-sm text-slate-600 mb-4">
                  {interests.find(i => i.id === selectedInterest)?.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      2.3k enrolled
                    </span>
                    <span>4.8 ⭐</span>
                  </div>
                  <span className="text-green-600 font-medium">95% personalized</span>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link to="/courses">
                  <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-700 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 border-0">
                    Explore All Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
