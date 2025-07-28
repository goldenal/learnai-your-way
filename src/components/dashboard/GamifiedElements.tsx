
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Award, Flame, Target, Crown, Medal } from 'lucide-react';

export const GamifiedElements = () => {
  const achievements = [
    { icon: "⚽", name: "Football Analytics Pro", description: "Completed 5 football-based lessons", earned: true },
    { icon: "📊", name: "Data Viz Champion", description: "Created 10 visualizations", earned: true },
    { icon: "🔥", name: "Week Warrior", description: "7-day learning streak", earned: true },
    { icon: "🧠", name: "Quick Learner", description: "95% comprehension rate", earned: false, progress: 85 }
  ];

  const leaderboard = [
    { rank: 1, name: "Alex M.", points: 2450, interest: "⚽" },
    { rank: 2, name: "You", points: 2380, interest: "⚽", isUser: true },
    { rank: 3, name: "Jordan K.", points: 2340, interest: "🍳" },
    { rank: 4, name: "Sam L.", points: 2290, interest: "⚽" }
  ];

  return (
    <div className="space-y-6">
      {/* Learning Streak */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-orange-500" />
            <span>Learning Streak</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">7</div>
            <p className="text-gray-600 mb-4">Days in a row! 🔥</p>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-orange-500 rounded-full"></div>
              ))}
            </div>
            <p className="text-sm text-gray-500">Keep it up! Next milestone: 14 days</p>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-white" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className={`flex items-center space-x-3 p-2 rounded-lg ${
              achievement.earned ? 'bg-green-50' : 'bg-gray-50'
            }`}>
              <div className="text-2xl">{achievement.icon}</div>
              <div className="flex-1">
                <h4 className={`font-medium ${achievement.earned ? 'text-green-700' : 'text-gray-700'}`}>
                  {achievement.name}
                </h4>
                <p className="text-xs text-gray-500">{achievement.description}</p>
                {!achievement.earned && achievement.progress && (
                  <Progress value={achievement.progress} className="mt-1 h-1" />
                )}
              </div>
              {achievement.earned && (
                <Badge className="bg-green-100 text-green-700">Earned</Badge>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-purple-500" />
            <span>Football Fans Leaderboard</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {leaderboard.map((user, index) => (
            <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
              user.isUser ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
            }`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                user.rank === 1 ? 'bg-white text-slate-800' :
                user.rank === 2 ? 'bg-gray-400 text-white' :
                user.rank === 3 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-700'
              }`}>
                {user.rank}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{user.name}</span>
                  <span className="text-lg">{user.interest}</span>
                  {user.isUser && <Badge variant="secondary">You</Badge>}
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-gray-900">{user.points.toLocaleString()}</p>
                <p className="text-xs text-gray-500">points</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
