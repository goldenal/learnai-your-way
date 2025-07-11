
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, CheckCircle, MessageCircle, Award, BookOpen } from 'lucide-react';

export const ActivityFeed = () => {
  const activities = [
    {
      type: 'completion',
      icon: CheckCircle,
      title: 'Lesson Completed',
      description: 'Understanding Correlation through Player Stats',
      time: '2 hours ago',
      context: '⚽ Football Analytics',
      color: 'text-green-600'
    },
    {
      type: 'insight',
      icon: Activity,
      title: 'Breakthrough Moment',
      description: 'Connected regression analysis to predicting match outcomes',
      time: '1 day ago',
      context: '🧠 Aha! Moment',
      color: 'text-purple-600'
    },
    {
      type: 'discussion',
      icon: MessageCircle,
      title: 'Joined Discussion',
      description: 'Debated Messi vs Ronaldo stats in Data Analysis forum',
      time: '2 days ago',
      context: '💬 Community',
      color: 'text-blue-600'
    },
    {
      type: 'achievement',
      icon: Award,
      title: 'Achievement Unlocked',
      description: 'Football Analytics Champion badge earned',
      time: '3 days ago',
      context: '🏆 Achievement',
      color: 'text-yellow-600'
    },
    {
      type: 'course',
      icon: BookOpen,
      title: 'Course Started',
      description: 'Project Management through Team Strategy',
      time: '5 days ago',
      context: '📚 New Course',
      color: 'text-indigo-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-blue-600" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className={`p-2 rounded-full bg-gray-100 ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className="font-medium text-gray-900 text-sm">{activity.title}</h4>
                <Badge variant="secondary" className="text-xs">{activity.context}</Badge>
              </div>
              <p className="text-sm text-gray-600 mb-1">{activity.description}</p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t">
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};
