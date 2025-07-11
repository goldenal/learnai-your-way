
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Clock, Brain, TrendingUp, Target } from 'lucide-react';

export const LearningStats = () => {
  const stats = [
    {
      icon: Clock,
      label: 'Total Learning Time',
      value: '47 hours',
      subtext: 'This month',
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      icon: Brain,
      label: 'Comprehension Rate',
      value: '94%',
      subtext: 'Above average',
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      icon: TrendingUp,
      label: 'Learning Speed',
      value: '2.3x',
      subtext: 'vs traditional',
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      icon: Target,
      label: 'Skills Acquired',
      value: '12',
      subtext: 'This quarter',
      color: 'text-orange-600',
      bg: 'bg-orange-100'
    }
  ];

  const interestBreakdown = [
    { interest: '⚽ Football Analytics', hours: 28, percentage: 60 },
    { interest: '👨‍🍳 Recipe Data Science', hours: 12, percentage: 25 },
    { interest: '🏆 Leadership Strategy', hours: 7, percentage: 15 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-blue-600" />
          <span>Learning Analytics</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-10 h-10 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-2`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
              <p className="text-xs text-gray-400">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Interest Breakdown */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Learning Time by Interest</h4>
          <div className="space-y-3">
            {interestBreakdown.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="text-gray-700">{item.interest}</span>
                  <span className="text-gray-500">{item.hours}h</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparative Insights */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">🎯 Personalization Impact</h4>
          <div className="space-y-1 text-sm">
            <p className="text-green-700">✓ 40% better retention vs standard courses</p>
            <p className="text-green-700">✓ 2.3x faster skill acquisition</p>
            <p className="text-green-700">✓ 94% engagement rate maintained</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
