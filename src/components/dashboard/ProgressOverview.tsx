
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Clock, Brain, Trophy } from 'lucide-react';

export const ProgressOverview = () => {
  const progressData = [
    {
      course: "Data Analysis through Football",
      progress: 75,
      nextLesson: "Analyzing Player Performance Metrics",
      timeLeft: "2 lessons left",
      theme: "⚽",
      color: "bg-green-500"
    },
    {
      course: "Statistics via Recipe Optimization",
      progress: 45,
      nextLesson: "Correlation in Cooking Times",
      timeLeft: "4 lessons left", 
      theme: "👨‍🍳",
      color: "bg-orange-500"
    },
    {
      course: "Project Management through Team Strategy",
      progress: 90,
      nextLesson: "Leadership Lessons from Coaches",
      timeLeft: "1 lesson left",
      theme: "🏆",
      color: "bg-purple-500"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span>Your Learning Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {progressData.map((course, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{course.theme}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{course.course}</h3>
                  <p className="text-sm text-gray-600">Next: {course.nextLesson}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">{course.progress}%</p>
                <p className="text-xs text-gray-500">{course.timeLeft}</p>
              </div>
            </div>
            
            <div className="relative">
              <Progress value={course.progress} className="h-3" />
              <div 
                className={`absolute top-0 left-0 h-3 rounded-full ${course.color} transition-all duration-300`}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">85%</p>
            <p className="text-sm text-gray-600">Avg. Comprehension</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">2.3x</p>
            <p className="text-sm text-gray-600">Faster Learning</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
              <Trophy className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Skills Mastered</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
