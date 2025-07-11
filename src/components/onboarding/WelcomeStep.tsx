
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Brain, Sparkles, Users, Clock, Target } from 'lucide-react';

interface WelcomeStepProps {
  onNext: (data: WelcomeData) => void;
}

interface WelcomeData {
  interests: string[];
  learningStyle: string[];
  goals: string[];
  timeCommitment: string;
}

const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedLearningStyles, setSelectedLearningStyles] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [timeCommitment, setTimeCommitment] = useState<string>('');

  const interestCategories = [
    { id: 'sports', label: 'Sports & Fitness', icon: '⚽', examples: 'Football, Basketball, Tennis, Swimming' },
    { id: 'cooking', label: 'Cooking & Food', icon: '🍳', examples: 'Baking, International Cuisine, Nutrition' },
    { id: 'technology', label: 'Technology', icon: '💻', examples: 'Programming, AI, Gadgets, Gaming' },
    { id: 'arts', label: 'Arts & Creativity', icon: '🎨', examples: 'Photography, Music, Writing, Design' },
    { id: 'business', label: 'Business & Finance', icon: '💼', examples: 'Entrepreneurship, Investing, Marketing' },
    { id: 'science', label: 'Science & Nature', icon: '🔬', examples: 'Biology, Physics, Environment, Space' },
    { id: 'travel', label: 'Travel & Culture', icon: '✈️', examples: 'Languages, Geography, History' },
    { id: 'health', label: 'Health & Wellness', icon: '🏥', examples: 'Medicine, Mental Health, Yoga' },
  ];

  const learningStyles = [
    { id: 'visual', label: 'Visual Learning', icon: <Brain className="w-5 h-5" />, desc: 'Charts, diagrams, and videos' },
    { id: 'hands-on', label: 'Hands-on Practice', icon: <Sparkles className="w-5 h-5" />, desc: 'Interactive exercises and simulations' },
    { id: 'collaborative', label: 'Collaborative', icon: <Users className="w-5 h-5" />, desc: 'Group discussions and peer learning' },
    { id: 'structured', label: 'Structured Path', icon: <Target className="w-5 h-5" />, desc: 'Step-by-step guided learning' },
  ];

  const goals = [
    { id: 'career', label: 'Career Advancement', desc: 'Professional development and skills' },
    { id: 'personal', label: 'Personal Enrichment', desc: 'Learning for personal growth' },
    { id: 'academic', label: 'Academic Requirements', desc: 'Certifications and formal education' },
    { id: 'creative', label: 'Creative Pursuits', desc: 'Artistic and creative projects' },
  ];

  const timeOptions = [
    { id: '15-30min', label: '15-30 minutes daily', desc: 'Quick daily sessions' },
    { id: '1-2hours', label: '1-2 hours on weekends', desc: 'Weekend learning blocks' },
    { id: 'flexible', label: 'Flexible schedule', desc: 'Learn when it works for you' },
    { id: 'intensive', label: 'Intensive sessions', desc: '3+ hours when available' },
  ];

  const toggleSelection = (item: string, list: string[], setter: (list: string[]) => void) => {
    if (list.includes(item)) {
      setter(list.filter(i => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  const handleNext = () => {
    if (selectedInterests.length > 0 && selectedLearningStyles.length > 0 && selectedGoals.length > 0 && timeCommitment) {
      onNext({
        interests: selectedInterests,
        learningStyle: selectedLearningStyles,
        goals: selectedGoals,
        timeCommitment,
      });
    }
  };

  const isComplete = selectedInterests.length > 0 && selectedLearningStyles.length > 0 && selectedGoals.length > 0 && timeCommitment;

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
          Welcome to Your Learning Journey! 
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Let's personalize your experience. We'll use your interests to make learning more engaging and relevant to you.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mx-auto max-w-2xl">
          <p className="text-blue-800 font-medium">
            💡 For example: If you love football, we'll teach data analysis using player statistics and team performance!
          </p>
        </div>
      </div>

      {/* Interests Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          What interests you most?
        </h2>
        <p className="text-slate-600">Select all that apply - the more we know, the better we can personalize!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {interestCategories.map((category) => (
            <div
              key={category.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                selectedInterests.includes(category.id)
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => toggleSelection(category.id, selectedInterests, setSelectedInterests)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox 
                  checked={selectedInterests.includes(category.id)}
                  onChange={() => toggleSelection(category.id, selectedInterests, setSelectedInterests)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="font-semibold text-slate-900">{category.label}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{category.examples}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Style Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <span className="text-2xl">🧠</span>
          How do you learn best?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningStyles.map((style) => (
            <div
              key={style.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                selectedLearningStyles.includes(style.id)
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => toggleSelection(style.id, selectedLearningStyles, setSelectedLearningStyles)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox 
                  checked={selectedLearningStyles.includes(style.id)}
                  onChange={() => toggleSelection(style.id, selectedLearningStyles, setSelectedLearningStyles)}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {style.icon}
                    <h3 className="font-semibold text-slate-900">{style.label}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{style.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goals Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <span className="text-2xl">🎯</span>
          What are your learning goals?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                selectedGoals.includes(goal.id)
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => toggleSelection(goal.id, selectedGoals, setSelectedGoals)}
            >
              <div className="flex items-start space-x-3">
                <Checkbox 
                  checked={selectedGoals.includes(goal.id)}
                  onChange={() => toggleSelection(goal.id, selectedGoals, setSelectedGoals)}
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{goal.label}</h3>
                  <p className="text-sm text-slate-600">{goal.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Time Commitment Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
          <Clock className="w-6 h-6" />
          How much time can you dedicate?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timeOptions.map((option) => (
            <div
              key={option.id}
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all hover:shadow-lg ${
                timeCommitment === option.id
                  ? 'border-primary bg-blue-50'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
              onClick={() => setTimeCommitment(option.id)}
            >
              <div className="flex items-start space-x-3">
                <input
                  type="radio"
                  checked={timeCommitment === option.id}
                  onChange={() => setTimeCommitment(option.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{option.label}</h3>
                  <p className="text-sm text-slate-600">{option.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-center pt-8">
        <Button
          onClick={handleNext}
          disabled={!isComplete}
          className="gradient-primary px-8 py-3 text-lg hover-lift"
        >
          Continue to Preferences
        </Button>
      </div>
    </div>
  );
};

export default WelcomeStep;
