
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Sparkles, Play, BarChart3, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompletionStepProps {
  userProfile: any;
  selectedCourse: string;
}

const CompletionStep = ({ userProfile, selectedCourse }: CompletionStepProps) => {
  const courseDetails = {
    'data-analysis': {
      title: userProfile?.interests?.includes('sports') 
        ? 'Data Analysis Through Sports Statistics'
        : userProfile?.interests?.includes('cooking')
        ? 'Data Analysis Through Recipe & Nutrition Data'
        : 'Data Analysis & Visualization',
      personalizedLearningPath: userProfile?.interests?.includes('sports')
        ? [
          'Week 1: Player Statistics & Basic Analytics',
          'Week 2: Team Performance Metrics',
          'Week 3: Match Analysis & Predictions',
          'Week 4: Advanced Sports Data Visualization',
          'Week 5: Fantasy Sports & Statistical Modeling',
          'Week 6: Capstone: Predict Season Outcomes'
        ]
        : userProfile?.interests?.includes('cooking')
        ? [
          'Week 1: Recipe Data & Ingredient Analysis',
          'Week 2: Nutrition Statistics & Health Metrics',
          'Week 3: Restaurant Performance Analytics',
          'Week 4: Food Trend Analysis & Visualization',
          'Week 5: Supply Chain & Cost Optimization',
          'Week 6: Capstone: Design Your Perfect Menu'
        ]
        : [
          'Week 1: Introduction to Data Analysis',
          'Week 2: Statistical Foundations',
          'Week 3: Data Visualization Techniques',
          'Week 4: Advanced Analytics',
          'Week 5: Predictive Modeling',
          'Week 6: Capstone Project'
        ],
      firstLesson: userProfile?.interests?.includes('sports')
        ? 'Analyzing Lionel Messi\'s Career: From Raw Data to Insights'
        : userProfile?.interests?.includes('cooking')
        ? 'The Science Behind Perfect Pasta: A Data-Driven Approach'
        : 'Your First Data Analysis Project'
    },
    'project-management': {
      title: userProfile?.interests?.includes('cooking')
        ? 'Project Management Through Restaurant Operations'
        : userProfile?.interests?.includes('sports')
        ? 'Project Management Like Coaching a Championship Team'
        : 'Project Management Fundamentals',
      personalizedLearningPath: userProfile?.interests?.includes('cooking')
        ? [
          'Week 1: Menu Planning & Kitchen Strategy',
          'Week 2: Staff Coordination & Team Management',
          'Week 3: Supply Chain & Inventory Management',
          'Week 4: Customer Experience Project Planning'
        ]
        : userProfile?.interests?.includes('sports')
        ? [
          'Week 1: Season Planning & Team Strategy',
          'Week 2: Player Development & Resource Management',
          'Week 3: Game Planning & Tactical Execution',
          'Week 4: Performance Analysis & Continuous Improvement'
        ]
        : [
          'Week 1: Project Planning Fundamentals',
          'Week 2: Team Management & Communication',
          'Week 3: Risk Management & Problem Solving',
          'Week 4: Project Execution & Delivery'
        ],
      firstLesson: userProfile?.interests?.includes('cooking')
        ? 'How Gordon Ramsay Opens a New Restaurant: Project Management in Action'
        : userProfile?.interests?.includes('sports')
        ? 'From Training Camp to Championship: Managing a Winning Season'
        : 'Planning Your First Project'
    },
    'digital-marketing': {
      title: userProfile?.interests?.includes('arts')
        ? 'Digital Marketing for Creative Professionals'
        : userProfile?.interests?.includes('technology')
        ? 'Technical Product Marketing & Growth'
        : 'Digital Marketing Mastery',
      personalizedLearningPath: userProfile?.interests?.includes('arts')
        ? [
          'Week 1: Building Your Creative Brand',
          'Week 2: Social Media for Artists & Creators',
          'Week 3: Portfolio Marketing & Client Acquisition',
          'Week 4: Monetizing Your Creative Work',
          'Week 5: Building a Sustainable Creative Business'
        ]
        : userProfile?.interests?.includes('technology')
        ? [
          'Week 1: Technical Product Positioning',
          'Week 2: Developer Community Building',
          'Week 3: Content Marketing for Tech Products',
          'Week 4: Growth Hacking & Analytics',
          'Week 5: Launch Strategy & Scaling'
        ]
        : [
          'Week 1: Digital Marketing Fundamentals',
          'Week 2: Social Media Strategy',
          'Week 3: Content Marketing',
          'Week 4: Email Marketing & Automation',
          'Week 5: Analytics & Optimization'
        ],
      firstLesson: userProfile?.interests?.includes('arts')
        ? 'How a Photographer Built 100K Instagram Followers: A Marketing Case Study'
        : userProfile?.interests?.includes('technology')
        ? 'How Stripe Grew from Zero to Billion: Technical Product Marketing'
        : 'Creating Your First Marketing Campaign'
    }
  };

  const currentCourse = courseDetails[selectedCourse as keyof typeof courseDetails];

  return (
    <div className="space-y-8">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 gradient-success rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
          🎉 Welcome to Your Personalized Learning Journey!
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Your AI-powered learning experience is ready. Every lesson, example, and project has been tailored to your interests.
        </p>
      </div>

      {/* Profile Summary */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-blue-600" />
          Your Learning Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="font-semibold text-slate-700 mb-2">Interests</h3>
            <div className="flex flex-wrap gap-1">
              {userProfile?.interests?.map((interest: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 mb-2">Learning Style</h3>
            <div className="flex flex-wrap gap-1">
              {userProfile?.learningStyle?.map((style: string, index: number) => (
                <Badge key={index} variant="outline" className="text-purple-700 border-purple-300">
                  {style}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 mb-2">Goals</h3>
            <div className="flex flex-wrap gap-1">
              {userProfile?.goals?.map((goal: string, index: number) => (
                <Badge key={index} variant="outline" className="text-green-700 border-green-300">
                  {goal}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-slate-700 mb-2">Time Commitment</h3>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              {userProfile?.timeCommitment}
            </Badge>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          Your Personalized Course: {currentCourse?.title}
        </h2>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4">
            <h3 className="font-semibold text-green-800 mb-2">Why This Course is Perfect for You:</h3>
            <p className="text-green-700">
              We've adapted every lesson to use examples from your interests: {userProfile?.interests?.join(', ')}.
              Instead of generic business cases, you'll learn through scenarios you already understand and enjoy!
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Your Personalized Learning Path:</h3>
            <div className="space-y-2">
              {currentCourse?.personalizedLearningPath.map((week, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                  <span className="text-slate-700">{week}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* First Lesson Preview */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Play className="w-6 h-6 text-purple-600" />
          Ready to Start? Your First Lesson Awaits
        </h2>
        <div className="bg-white rounded-xl p-4 border border-purple-200">
          <h3 className="font-semibold text-slate-900 mb-2">Lesson 1: {currentCourse?.firstLesson}</h3>
          <p className="text-slate-600 mb-4">
            Duration: 15 minutes • Difficulty: Beginner • Interactive elements included
          </p>
          <div className="flex items-center gap-4">
            <Button className="gradient-primary gap-2 hover-lift">
              <Play className="w-4 h-4" />
              Start First Lesson
            </Button>
            <span className="text-sm text-slate-600">You'll love how we make this relevant to you!</span>
          </div>
        </div>
      </div>

      {/* Dashboard Tour */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-slate-600" />
          Your Personalized Dashboard Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border">
            <h3 className="font-semibold text-slate-900 mb-2">AI Progress Tracking</h3>
            <p className="text-slate-600 text-sm">See how your learning adapts in real-time based on your progress and interests.</p>
          </div>
          <div className="bg-white rounded-xl p-4 border">
            <h3 className="font-semibold text-slate-900 mb-2">Personalized Recommendations</h3>
            <p className="text-slate-600 text-sm">Get course suggestions that match your evolving interests and goals.</p>
          </div>
          <div className="bg-white rounded-xl p-4 border">
            <h3 className="font-semibold text-slate-900 mb-2">Interest-Based Community</h3>
            <p className="text-slate-600 text-sm">Connect with learners who share your interests and passions.</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Button className="gradient-primary px-8 py-4 text-lg hover-lift gap-2">
          <Play className="w-5 h-5" />
          Start Learning Now
        </Button>
        <Link to="/dashboard">
          <Button variant="outline" className="px-8 py-4 text-lg gap-2">
            <BarChart3 className="w-5 h-5" />
            Explore Dashboard
          </Button>
        </Link>
      </div>

      {/* Motivation Message */}
      <div className="text-center bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl p-6 mt-8">
        <h3 className="font-bold text-yellow-800 mb-2">🚀 You're About to Experience Learning Like Never Before</h3>
        <p className="text-yellow-700">
          Traditional e-learning is one-size-fits-all. Your experience is uniquely yours, 
          adapted to what you love and how you learn best. Let's make education personal again!
        </p>
      </div>
    </div>
  );
};

export default CompletionStep;
