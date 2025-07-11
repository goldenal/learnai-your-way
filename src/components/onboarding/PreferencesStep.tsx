
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Video, Gamepad2, BookOpen, Headphones, BarChart3, Bell } from 'lucide-react';

interface PreferencesStepProps {
  onNext: (data: PreferencesData) => void;
  onBack: () => void;
}

interface PreferencesData {
  contentTypes: string[];
  difficultyLevel: string;
  learningPace: string;
  notifications: string[];
}

const PreferencesStep = ({ onNext, onBack }: PreferencesStepProps) => {
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([]);
  const [difficultyLevel, setDifficultyLevel] = useState<string>('');
  const [learningPace, setLearningPace] = useState<string>('');
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);

  const contentTypes = [
    { id: 'video', label: 'Video Lessons', icon: <Video className="w-5 h-5" />, desc: 'Visual demonstrations and tutorials' },
    { id: 'interactive', label: 'Interactive Simulations', icon: <Gamepad2 className="w-5 h-5" />, desc: 'Hands-on practice and experiments' },
    { id: 'reading', label: 'Articles & Case Studies', icon: <BookOpen className="w-5 h-5" />, desc: 'In-depth written content' },
    { id: 'audio', label: 'Audio Content', icon: <Headphones className="w-5 h-5" />, desc: 'Podcasts and audio lessons' },
    { id: 'visual', label: 'Infographics & Charts', icon: <BarChart3 className="w-5 h-5" />, desc: 'Visual data and diagrams' },
    { id: 'gamified', label: 'Gamified Learning', icon: <Gamepad2 className="w-5 h-5" />, desc: 'Points, badges, and challenges' },
  ];

  const difficultyLevels = [
    { id: 'beginner', label: 'Beginner Friendly', desc: 'Start from basics with step-by-step guidance', emoji: '🌱' },
    { id: 'intermediate', label: 'Intermediate Level', desc: 'Some background knowledge assumed', emoji: '🚀' },
    { id: 'advanced', label: 'Advanced Challenges', desc: 'Complex problems and deep dives', emoji: '🔥' },
    { id: 'adaptive', label: 'Adaptive Difficulty', desc: 'Adjusts based on your progress', emoji: '🧠' },
  ];

  const learningPaces = [
    { id: 'self-paced', label: 'Self-Paced', desc: 'Learn at your own speed with flexible deadlines', emoji: '🐢' },
    { id: 'structured', label: 'Structured Timeline', desc: 'Guided path with milestones and deadlines', emoji: '📅' },
    { id: 'intensive', label: 'Intensive Bootcamp', desc: 'Fast-paced learning with focused sessions', emoji: '⚡' },
    { id: 'micro-learning', label: 'Daily Micro-Learning', desc: 'Small, consistent daily lessons', emoji: '☀️' },
  ];

  const notificationTypes = [
    { id: 'reminders', label: 'Learning Reminders', desc: 'Gentle nudges to keep up momentum' },
    { id: 'recommendations', label: 'Course Recommendations', desc: 'New courses based on your interests' },
    { id: 'community', label: 'Community Updates', desc: 'Discussions and peer interactions' },
    { id: 'achievements', label: 'Achievement Celebrations', desc: 'Milestone completions and progress' },
  ];

  const toggleSelection = (item: string, list: string[], setter: (list: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  const handleNext = () => {
    if (selectedContentTypes.length > 0 && difficultyLevel && learningPace) {
      onNext({
        contentTypes: selectedContentTypes,
        difficultyLevel,
        learningPace,
        notifications: selectedNotifications,
      });
    }
  };

  const isComplete = selectedContentTypes.length > 0 && difficultyLevel && learningPace;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
          How do you prefer to learn?
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Let's customize your learning experience to match your preferences and style.
        </p>
      </div>

      {/* Content Types */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <span className="text-2xl">📚</span>
          What types of content work best for you?
        </h2>
        <p className="text-slate-600">Select all that apply</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contentTypes.map((type) => (
            <div
              key={type.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                selectedContentTypes.includes(type.id)
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => toggleSelection(type.id, selectedContentTypes, setSelectedContentTypes)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox 
                  checked={selectedContentTypes.includes(type.id)}
                  onChange={() => toggleSelection(type.id, selectedContentTypes, setSelectedContentTypes)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {type.icon}
                    <h3 className="font-semibold text-slate-900">{type.label}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{type.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Level */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <span className="text-2xl">📊</span>
          What difficulty level suits you?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {difficultyLevels.map((level) => (
            <div
              key={level.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                difficultyLevel === level.id
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => setDifficultyLevel(level.id)}
            >
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  checked={difficultyLevel === level.id}
                  onChange={() => setDifficultyLevel(level.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{level.emoji}</span>
                    <h3 className="font-semibold text-slate-900">{level.label}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{level.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Pace */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <span className="text-2xl">⏰</span>
          What learning pace works for you?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningPaces.map((pace) => (
            <div
              key={pace.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                learningPace === pace.id
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => setLearningPace(pace.id)}
            >
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  checked={learningPace === pace.id}
                  onChange={() => setLearningPace(pace.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{pace.emoji}</span>
                    <h3 className="font-semibold text-slate-900">{pace.label}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{pace.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <Bell className="w-6 h-6" />
          How would you like to stay updated?
        </h2>
        <p className="text-slate-600">Optional - you can change these anytime</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notificationTypes.map((type) => (
            <div
              key={type.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                selectedNotifications.includes(type.id)
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => toggleSelection(type.id, selectedNotifications, setSelectedNotifications)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox 
                  checked={selectedNotifications.includes(type.id)}
                  onChange={() => toggleSelection(type.id, selectedNotifications, setSelectedNotifications)}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{type.label}</h3>
                  <p className="text-sm text-slate-600">{type.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Button
          onClick={onBack}
          variant="outline"
          className="px-8 py-3"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!isComplete}
          className="gradient-primary px-8 py-3 text-lg hover-lift"
        >
          See My Courses
        </Button>
      </div>
    </div>
  );
};

export default PreferencesStep;
