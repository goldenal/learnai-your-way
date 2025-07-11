import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Trophy, 
  Camera, 
  Gamepad2, 
  Music, 
  Plane, 
  Dumbbell, 
  Palette,
  Users,
  Target,
  GraduationCap,
  Briefcase,
  Clock,
  Calendar,
  Sparkles
} from 'lucide-react';

const WelcomeStep = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string>('');

  const interests = [
    { id: 'cooking', label: 'Cooking & Food', icon: Heart },
    { id: 'sports', label: 'Sports & Fitness', icon: Trophy },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
    { id: 'music', label: 'Music', icon: Music },
    { id: 'travel', label: 'Travel', icon: Plane },
    { id: 'fitness', label: 'Health & Fitness', icon: Dumbbell },
    { id: 'art', label: 'Art & Design', icon: Palette },
  ];

  const goals = [
    { id: 'career', label: 'Career Advancement', icon: Briefcase },
    { id: 'personal', label: 'Personal Growth', icon: Users },
    { id: 'academic', label: 'Academic Goals', icon: GraduationCap },
    { id: 'creative', label: 'Creative Projects', icon: Sparkles },
  ];

  const timeCommitments = [
    { id: 'daily', label: '15-30 minutes daily', icon: Clock },
    { id: 'weekend', label: '1-2 hours on weekends', icon: Calendar },
    { id: 'flexible', label: 'Flexible, as-needed', icon: Target },
    { id: 'intensive', label: 'Intensive sessions', icon: Trophy },
  ];

  const toggleInterest = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleContinue = () => {
    // Store selections in localStorage or state management
    localStorage.setItem('onboardingData', JSON.stringify({
      interests: selectedInterests,
      goals: selectedGoals,
      timeCommitment: selectedTime
    }));
    navigate('/onboarding/preferences');
  };

  const canContinue = selectedInterests.length > 0 && selectedGoals.length > 0 && selectedTime;

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-semibold text-slate-800">
              Welcome to Personalized Learning!
            </h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Our AI transforms every course to match your interests. Love football? Learn data science through 
            player statistics. Passionate about cooking? Master programming through recipe algorithms. 
            Let's create your perfect learning experience.
          </p>
        </CardContent>
      </Card>

      {/* Interests Selection */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          What are your interests and hobbies?
        </h3>
        <p className="text-slate-600 mb-6">
          Select all that apply. These will help us personalize your learning content.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((interest) => (
            <Card
              key={interest.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedInterests.includes(interest.id)
                  ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200'
                  : 'hover:border-blue-300 hover:bg-blue-50/50'
              }`}
              onClick={() => toggleInterest(interest.id)}
            >
              <CardContent className="p-4 text-center">
                <interest.icon className={`w-8 h-8 mx-auto mb-2 ${
                  selectedInterests.includes(interest.id) ? 'text-blue-600' : 'text-slate-500'
                }`} />
                <p className="text-sm font-medium text-slate-700">
                  {interest.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Goals Selection */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          What are your learning goals?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal) => (
            <Card
              key={goal.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedGoals.includes(goal.id)
                  ? 'ring-2 ring-purple-500 bg-purple-50 border-purple-200'
                  : 'hover:border-purple-300 hover:bg-purple-50/50'
              }`}
              onClick={() => toggleGoal(goal.id)}
            >
              <CardContent className="p-4 flex items-center space-x-3">
                <goal.icon className={`w-6 h-6 ${
                  selectedGoals.includes(goal.id) ? 'text-purple-600' : 'text-slate-500'
                }`} />
                <span className="font-medium text-slate-700">
                  {goal.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Time Commitment */}
      <div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">
          How much time can you dedicate to learning?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {timeCommitments.map((time) => (
            <Card
              key={time.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedTime === time.id
                  ? 'ring-2 ring-green-500 bg-green-50 border-green-200'
                  : 'hover:border-green-300 hover:bg-green-50/50'
              }`}
              onClick={() => setSelectedTime(time.id)}
            >
              <CardContent className="p-4 flex items-center space-x-3">
                <time.icon className={`w-6 h-6 ${
                  selectedTime === time.id ? 'text-green-600' : 'text-slate-500'
                }`} />
                <span className="font-medium text-slate-700">
                  {time.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Example Preview */}
      {selectedInterests.length > 0 && (
        <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-amber-800 mb-3">
              🎯 Personalization Preview
            </h4>
            <p className="text-amber-700">
              Since you're interested in <Badge variant="secondary" className="mx-1">
                {interests.find(i => i.id === selectedInterests[0])?.label}
              </Badge>, 
              we'll teach data science through {selectedInterests[0] === 'cooking' ? 'recipe optimization and nutrition analysis' : 
              selectedInterests[0] === 'sports' ? 'player statistics and team performance metrics' :
              selectedInterests[0] === 'music' ? 'audio analysis and streaming data' :
              'relevant examples from your interests'}!
            </p>
          </CardContent>
        </Card>
      )}

      {/* Continue Button */}
      <div className="flex justify-end pt-4">
        <Button
          onClick={handleContinue}
          disabled={!canContinue}
          className="px-8 py-3 text-lg gradient-primary disabled:opacity-50"
        >
          Continue to Preferences
        </Button>
      </div>
    </div>
  );
};

export default WelcomeStep;