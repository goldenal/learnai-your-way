
import React from 'react';
import { Clock, Flame, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const PersonalizedGreeting = () => {
  const currentHour = new Date().getHours();
  const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 17 ? 'afternoon' : 'evening';
  
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">
              Good {timeOfDay}, Adewale! ⚽
            </h1>
            <p className="text-blue-100 text-lg">
              Ready to tackle today's Data Analysis through Football Statistics lesson?
            </p>
            <p className="text-blue-200">
              You're on a 7-day learning streak! Let's keep the momentum going! 🔥
            </p>
          </div>
          
          <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-4">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex items-center space-x-3 p-4">
                <Flame className="w-5 h-5 text-orange-300" />
                <div>
                  <p className="text-sm text-blue-100">Learning Streak</p>
                  <p className="text-xl font-bold">7 Days</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex items-center space-x-3 p-4">
                <Target className="w-5 h-5 text-green-300" />
                <div>
                  <p className="text-sm text-blue-100">Weekly Goal</p>
                  <p className="text-xl font-bold">5/7 lessons</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20">
              <CardContent className="flex items-center space-x-3 p-4">
                <Clock className="w-5 h-5 text-blue-300" />
                <div>
                  <p className="text-sm text-blue-100">Time Saved</p>
                  <p className="text-xl font-bold">2.5 hrs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
