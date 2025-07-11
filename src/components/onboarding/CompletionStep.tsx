import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle,
  Sparkles,
  Play,
  BarChart3,
  Users,
  Target,
  Calendar,
  Award,
  ArrowRight,
  BookOpen,
  TrendingUp
} from 'lucide-react';

const CompletionStep = () => {
  const navigate = useNavigate();
  const [onboardingData, setOnboardingData] = useState<any>({});
  const [showDashboardTour, setShowDashboardTour] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('onboardingData') || '{}');
    setOnboardingData(data);
  }, []);

  const handleStartLearning = () => {
    // Clear onboarding data and redirect to dashboard/first lesson
    localStorage.removeItem('onboardingData');
    // In a real app, this would redirect to the actual course
    navigate('/courses');
  };

  const getSelectedCourseDetails = () => {
    const courseMap: { [key: string]: any } = {
      'data-cooking': {
        title: 'Data Science Through Culinary Arts',
        icon: BarChart3,
        firstLesson: 'Recipe Data Collection & Analysis',
        estimatedTime: '25 minutes',
        achievements: ['Data Explorer', 'Recipe Analyst', 'Culinary Scientist']
      },
      'data-sports': {
        title: 'Data Analytics Through Sports',
        icon: TrendingUp,
        firstLesson: 'Player Performance Metrics',
        estimatedTime: '30 minutes',
        achievements: ['Sports Analyst', 'Statistics Master', 'Game Predictor']
      },
      'web-music': {
        title: 'Web Development for Music Lovers',
        icon: BookOpen,
        firstLesson: 'Music Player Interface Design',
        estimatedTime: '45 minutes',
        achievements: ['Code Composer', 'UI Designer', 'Audio Developer']
      },
      'ai-basics': {
        title: 'AI Fundamentals Through Your Interests',
        icon: Sparkles,
        firstLesson: 'Introduction to AI Concepts',
        estimatedTime: '20 minutes',
        achievements: ['AI Explorer', 'Machine Learning Novice', 'Tech Innovator']
      }
    };

    return courseMap[onboardingData.selectedCourse] || courseMap['ai-basics'];
  };

  const selectedCourse = getSelectedCourseDetails();

  const getPersonalizationSummary = () => {
    const { interests, goals, contentTypes, learningStyle, pace } = onboardingData;
    
    return {
      interests: interests?.slice(0, 3) || [],
      goals: goals?.slice(0, 2) || [],
      contentPreference: contentTypes?.[0] || 'mixed',
      difficulty: learningStyle || 'beginner',
      pacePreference: pace || 'self'
    };
  };

  const summary = getPersonalizationSummary();

  return (
    <div className="space-y-8">
      {/* Completion Header */}
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Your Learning Profile is Complete! 🎉
        </h2>
        <p className="text-slate-600">
          We've created a personalized learning experience just for you.
        </p>
      </div>

      {/* Profile Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-600" />
            Your Learning Profile
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-slate-700 mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {summary.interests.map((interest, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                    {interest}
                  </Badge>
                ))}
              </div>
              
              <h4 className="font-medium text-slate-700 mb-2">Learning Goals</h4>
              <div className="flex flex-wrap gap-2">
                {summary.goals.map((goal, idx) => (
                  <Badge key={idx} variant="outline" className="border-blue-300 text-blue-700">
                    {goal}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-slate-700 mb-2">Learning Style</h4>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>Content Preference:</span>
                  <span className="font-medium capitalize">{summary.contentPreference}</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficulty Level:</span>
                  <span className="font-medium capitalize">{summary.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Learning Pace:</span>
                  <span className="font-medium capitalize">{summary.pacePreference}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Selected Course Preview */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
            <selectedCourse.icon className="w-5 h-5 mr-2 text-purple-600" />
            Your First Course
          </h3>
          
          <div className="mb-6">
            <h4 className="text-lg font-medium text-slate-800 mb-2">
              {selectedCourse.title}
            </h4>
            <p className="text-slate-600 mb-4">
              Your course content has been personalized based on your interests in{' '}
              <strong>{summary.interests.join(', ')}</strong>. Every lesson, example, and 
              project will connect to what you love most.
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-medium text-slate-800">First Lesson:</h5>
                <span className="text-sm text-slate-500">{selectedCourse.estimatedTime}</span>
              </div>
              <p className="text-slate-700 mb-3">{selectedCourse.firstLesson}</p>
              <div className="flex items-center space-x-2">
                <Play className="w-4 h-4 text-purple-600" />
                <span className="text-sm text-purple-700">Ready to start immediately</span>
              </div>
            </div>
          </div>

          {/* Achievement Preview */}
          <div>
            <h4 className="font-medium text-slate-700 mb-3 flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Achievements You'll Unlock
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedCourse.achievements.map((achievement: string, idx: number) => (
                <Badge key={idx} className="bg-gradient-to-r from-amber-400 to-orange-500 text-white">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Tour Invitation */}
      <Card className="border-2 border-dashed border-slate-300">
        <CardContent className="p-6 text-center">
          <Users className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-800 mb-2">
            Want a Quick Tour?
          </h3>
          <p className="text-slate-600 mb-4">
            Learn how to navigate your personalized dashboard, track progress, and 
            customize your learning experience.
          </p>
          <Button
            variant="outline"
            onClick={() => setShowDashboardTour(!showDashboardTour)}
            className="mr-4"
          >
            {showDashboardTour ? 'Skip Tour' : 'Take Dashboard Tour'}
          </Button>
        </CardContent>
      </Card>

      {/* Dashboard Tour Preview */}
      {showDashboardTour && (
        <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4">
              Dashboard Tour Preview
            </h3>
            <div className="space-y-3 text-emerald-700">
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5" />
                <span>Track your learning progress and achievements</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5" />
                <span>Adjust personalization settings anytime</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" />
                <span>Connect with other learners who share your interests</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5" />
                <span>Set learning schedules and reminders</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Final CTA */}
      <div className="text-center pt-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Personalized Learning Journey?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Your first lesson is waiting! Begin with "{selectedCourse.firstLesson}" and 
            discover how AI makes learning more engaging and effective.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleStartLearning}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start First Lesson
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="text-sm text-blue-200">
              <Calendar className="w-4 h-4 inline mr-1" />
              Estimated time: {selectedCourse.estimatedTime}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={() => navigate('/onboarding/course-selection')}
          className="px-6"
        >
          Back to Courses
        </Button>
     
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="text-slate-500"
        >
          Skip for Now
        </Button>
    
      </div>
    </div>
  );
};

export default CompletionStep;