
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, CheckCircle } from 'lucide-react';

export const ContinueLearning = () => {
  const lastLesson = {
    course: "Data Analysis through Football",
    lesson: "Understanding Pass Success Rates",
    progress: 75,
    timeLeft: "12 minutes",
    context: "You were learning how Messi's passing accuracy correlates with Barcelona's win rate",
    nextTopic: "Analyzing defensive statistics using heat maps"
  };

  const quickActions = [
    { label: "Perfect for lunch break", time: "15 min", icon: "🍽️" },
    { label: "Weekend deep dive", time: "2 hours", icon: "📚" },
    { label: "Quick review", time: "5 min", icon: "⚡" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Play className="w-5 h-5 text-green-600" />
          <span>Continue Learning</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Last Lesson Pickup */}
        <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-2xl">
                ⚽
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{lastLesson.course}</h3>
              <p className="text-sm text-gray-600 mb-2">{lastLesson.lesson}</p>
              <p className="text-sm text-blue-700 bg-blue-100 p-2 rounded mb-3">
                💡 Where you left off: {lastLesson.context}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                Coming up next: {lastLesson.nextTopic}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{lastLesson.timeLeft} to complete</span>
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-green-600">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Smart Recommendations */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Smart Recommendations</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center justify-between p-4 h-auto hover:bg-gray-50"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{action.icon}</span>
                  <div className="text-left">
                    <p className="font-medium text-sm">{action.label}</p>
                    <p className="text-xs text-gray-500">{action.time}</p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
