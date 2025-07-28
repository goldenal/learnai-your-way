import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  Video, 
  Headphones, 
  BookOpen, 
  Gamepad2, 
  BarChart3, 
  Image,
  Bell,
  BellOff,
  Users,
  User,
  Zap,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';

const PreferencesStep = () => {
  const navigate = useNavigate();
  const [contentTypes, setContentTypes] = useState<string[]>([]);
  const [learningStyle, setLearningStyle] = useState<string>('');
  const [pace, setPace] = useState<string>('');
  const [notifications, setNotifications] = useState<string[]>([]);

  const contentOptions = [
    { id: 'video', label: 'Video Lessons', description: 'Interactive video content', icon: Video },
    { id: 'audio', label: 'Audio Content', description: 'Podcasts and audio lessons', icon: Headphones },
    { id: 'text', label: 'Articles & Reading', description: 'In-depth written content', icon: BookOpen },
    { id: 'interactive', label: 'Interactive Simulations', description: 'Hands-on practice', icon: Gamepad2 },
    { id: 'visual', label: 'Infographics', description: 'Visual learning materials', icon: Image },
    { id: 'gamified', label: 'Gamified Learning', description: 'Points, badges, and challenges', icon: Target },
  ];

  const learningStyles = [
    { id: 'beginner', label: 'Beginner-Friendly', description: 'Step-by-step guidance', icon: Clock },
    { id: 'intermediate', label: 'Intermediate', description: 'Moderate challenges', icon: TrendingUp },
    { id: 'advanced', label: 'Advanced', description: 'Complex problem-solving', icon: Zap },
    { id: 'mixed', label: 'Adaptive', description: 'Mix of all levels', icon: BarChart3 },
  ];

  const paceOptions = [
    { id: 'self', label: 'Self-Paced', description: 'Learn at your own speed', icon: User },
    { id: 'structured', label: 'Structured Timeline', description: 'Fixed milestones and deadlines', icon: Clock },
    { id: 'intensive', label: 'Intensive', description: 'Bootcamp-style learning', icon: Zap },
    { id: 'micro', label: 'Micro-Learning', description: 'Daily bite-sized lessons', icon: Target },
  ];

  const notificationOptions = [
    { id: 'reminders', label: 'Learning Reminders', icon: Bell },
    { id: 'progress', label: 'Progress Updates', icon: BarChart3 },
    { id: 'recommendations', label: 'Course Recommendations', icon: Target },
    { id: 'community', label: 'Community Interactions', icon: Users },
  ];

  const toggleContentType = (type: string) => {
    setContentTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const toggleNotification = (type: string) => {
    setNotifications(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleContinue = () => {
    const existingData = JSON.parse(localStorage.getItem('onboardingData') || '{}');
    const updatedData = {
      ...existingData,
      contentTypes,
      learningStyle,
      pace,
      notifications
    };
    localStorage.setItem('onboardingData', JSON.stringify(updatedData));
    navigate('/onboarding/course-selection');
  };

  const canContinue = contentTypes.length > 0 && learningStyle && pace;

  return (
    <div className="space-y-8">
      {/* Content Type Preferences */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          How do you prefer to learn?
        </h3>
        <p className="text-slate-600 mb-6">
          Select your favorite content types. We'll prioritize these in your courses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                contentTypes.includes(option.id)
                  ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200'
                  : 'hover:border-blue-300 hover:bg-blue-50/50'
              }`}
              onClick={() => toggleContentType(option.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <option.icon className={`w-6 h-6 ${
                    contentTypes.includes(option.id) ? 'text-blue-600' : 'text-slate-500'
                  }`} />
                  <h4 className="font-medium text-slate-800">{option.label}</h4>
                </div>
                <p className="text-sm text-slate-600">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Style */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          What's your comfort level with new topics?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningStyles.map((style) => (
            <Card
              key={style.id}
              className={`cursor-pointer transition-all duration-300 ${
                learningStyle === style.id
                  ? 'ring-2 ring-purple-500 bg-purple-50 border-purple-200'
                  : 'hover:border-purple-300 hover:bg-purple-50/50'
              }`}
              onClick={() => setLearningStyle(style.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <style.icon className={`w-6 h-6 ${
                    learningStyle === style.id ? 'text-purple-600' : 'text-slate-500'
                  }`} />
                  <h4 className="font-medium text-slate-800">{style.label}</h4>
                </div>
                <p className="text-sm text-slate-600">{style.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Learning Pace */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          What learning pace works best for you?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paceOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-300 ${
                pace === option.id
                  ? 'ring-2 ring-green-500 bg-green-50 border-green-200'
                  : 'hover:border-green-300 hover:bg-green-50/50'
              }`}
              onClick={() => setPace(option.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <option.icon className={`w-6 h-6 ${
                    pace === option.id ? 'text-green-600' : 'text-slate-500'
                  }`} />
                  <h4 className="font-medium text-slate-800">{option.label}</h4>
                </div>
                <p className="text-sm text-slate-600">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          How would you like to stay engaged?
        </h3>
        <p className="text-slate-600 mb-6">
          Choose the types of notifications you'd find helpful.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notificationOptions.map((option) => (
            <Card
              key={option.id}
              className={`cursor-pointer transition-all duration-300 ${
                notifications.includes(option.id)
                  ? 'ring-2 ring-white bg-white border-white'
                  : 'hover:border-white hover:bg-white/50'
              }`}
              onClick={() => toggleNotification(option.id)}
            >
              <CardContent className="p-4 flex items-center space-x-3">
                <option.icon className={`w-6 h-6 ${
                  notifications.includes(option.id) ? 'text-slate-800' : 'text-slate-500'
                }`} />
                <span className="font-medium text-slate-700">
                  {option.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Personalization Preview */}
      {contentTypes.length > 0 && learningStyle && (
        <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-emerald-800 mb-3">
              📚 Your Learning Style Preview
            </h4>
            <div className="space-y-2 text-emerald-700">
              <p>• Content focus: {contentTypes.includes('video') ? 'Rich video lessons' : 
                contentTypes.includes('interactive') ? 'Hands-on simulations' : 
                'Diverse content types'}</p>
              <p>• Difficulty: {learningStyle === 'beginner' ? 'Gentle, step-by-step progression' :
                learningStyle === 'advanced' ? 'Challenging, deep-dive content' :
                'Balanced approach with growing complexity'}</p>
              <p>• Engagement: {notifications.length > 0 ? 'Active support and reminders' : 'Self-directed learning'}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={() => navigate('/onboarding/welcome')}
          className="px-6"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!canContinue}
          className="px-8 py-3 text-lg gradient-primary disabled:opacity-50"
        >
          Continue to Courses
        </Button>
      </div>
    </div>
  );
};

export default PreferencesStep;