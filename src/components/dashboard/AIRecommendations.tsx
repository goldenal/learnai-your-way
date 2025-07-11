
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Star, TrendingUp, Users } from 'lucide-react';

export const AIRecommendations = () => {
  const recommendations = [
    {
      title: "Machine Learning through Sports Predictions",
      description: "Since you love football analytics, learn ML by predicting match outcomes",
      interest: "⚽ Football",
      difficulty: "Intermediate",
      duration: "6 weeks",
      matchScore: 95,
      trending: true,
      students: 1243
    },
    {
      title: "Financial Analysis via Fantasy Football",
      description: "Master budgeting and ROI analysis through fantasy team management",
      interest: "⚽ Football",
      difficulty: "Beginner",
      duration: "4 weeks", 
      matchScore: 88,
      trending: false,
      students: 856
    },
    {
      title: "Psychology of Team Performance",
      description: "Understand group dynamics and leadership through sports team analysis",
      interest: "🏆 Leadership",
      difficulty: "Advanced",
      duration: "8 weeks",
      matchScore: 82,
      trending: true,
      students: 432
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <span>AI-Powered Recommendations</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((course, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{course.title}</h3>
                  {course.trending && (
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2">{course.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{course.interest}</span>
                  <span>•</span>
                  <span>{course.difficulty}</span>
                  <span>•</span>
                  <span>{course.duration}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
              </div>
              
              <div className="text-right ml-4">
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{course.matchScore}% match</span>
                </div>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Preview Course
                </Button>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-3 rounded-lg">
              <p className="text-sm text-purple-700">
                <Sparkles className="w-4 h-4 inline mr-1" />
                <strong>Personalization Preview:</strong> "Learn regression analysis by predicting goal scores, 
                understand data visualization through match statistics, and master probability through win rate calculations."
              </p>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full">
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  );
};
