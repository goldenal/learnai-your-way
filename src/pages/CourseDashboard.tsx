
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  Target, 
  Clock, 
  TrendingUp, 
  BookOpen, 
  Star,
  Calendar,
  PlayCircle,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const CourseDashboard = () => {
  const progressData = {
    overall: 68,
    modules: [
      { name: "Quarterback Stats Analysis", progress: 100, type: "completed", icon: "🏈" },
      { name: "Team Performance Metrics", progress: 85, type: "current", icon: "📊" },
      { name: "Fantasy Football Analytics", progress: 30, type: "upcoming", icon: "⚡" },
      { name: "Championship Predictions", progress: 0, type: "locked", icon: "🏆" }
    ]
  };

  const performanceMetrics = [
    { label: "Learning Efficiency", value: "32% faster", trend: "up", color: "text-green-600" },
    { label: "Engagement Score", value: "94%", trend: "up", color: "text-blue-600" },
    { label: "Retention Rate", value: "87%", trend: "up", color: "text-purple-600" },
    { label: "Interest Alignment", value: "96%", trend: "stable", color: "text-slate-800" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Welcome back, Coach! 🏈
              </h1>
              <p className="text-blue-100 mb-4">
                Ready to analyze some game-changing data? You're dominating this course like a championship team!
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  68% Complete
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  12 lessons mastered
                </Badge>
              </div>
            </div>
            <div className="hidden md:block text-6xl opacity-20">
              🏈
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>Football Field Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <div className="bg-green-100 h-20 rounded-lg border-2 border-green-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-green-300 opacity-50"></div>
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000"
                    style={{ width: `${progressData.overall}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-bold text-gray-700">
                      {progressData.overall} Yard Line
                    </span>
                  </div>
                  {/* Yard markers */}
                  {[20, 40, 60, 80].map((yard) => (
                    <div 
                      key={yard}
                      className="absolute top-0 h-full w-0.5 bg-white/50"
                      style={{ left: `${yard}%` }}
                    >
                      <span className="absolute -top-6 -left-2 text-xs font-medium text-gray-600">
                        {yard}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  You're at the <strong>68-yard line</strong> - almost in the red zone! 
                  32 yards to touchdown! 🏆
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <span>Performance Analytics</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.label}
                  </div>
                  <div className="text-xs text-green-600 flex items-center justify-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {metric.trend === 'up' ? '+15%' : 'Stable'}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module Navigation */}
      <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span>Your Learning Playbook</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {progressData.modules.map((module, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="text-2xl">{module.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{module.name}</h3>
                    <div className="flex items-center space-x-2">
                      {module.type === 'completed' && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      {module.type === 'current' && (
                        <PlayCircle className="h-5 w-5 text-blue-600" />
                      )}
                      <span className="text-sm font-medium text-gray-600">
                        {module.progress}%
                      </span>
                    </div>
                  </div>
                  <Progress value={module.progress} className="h-2 mb-2" />
                  <div className="flex items-center justify-between">
                    <Badge variant={
                      module.type === 'completed' ? 'default' :
                      module.type === 'current' ? 'secondary' :
                      module.type === 'upcoming' ? 'outline' : 'outline'
                    }>
                      {module.type === 'completed' ? 'Mastered' :
                       module.type === 'current' ? 'In Progress' :
                       module.type === 'upcoming' ? 'Ready to Start' : 'Locked'}
                    </Badge>
                    {module.type !== 'locked' && (
                      <Button size="sm" variant="ghost">
                        {module.type === 'completed' ? 'Review' : 'Continue'}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Lesson Recommendation */}
      <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                🎯 Next Up: Defensive Statistics Analysis
              </h3>
              <p className="text-purple-100 mb-4">
                Learn how to analyze defensive performance using real NFL data. 
                Perfect timing - you've mastered offensive stats!
              </p>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Clock className="h-3 w-3 mr-1" />
                  25 minutes
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  <Star className="h-3 w-3 mr-1" />
                  High Impact
                </Badge>
              </div>
            </div>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Start Lesson
              <PlayCircle className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Study Schedule */}
      <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-green-600" />
            <span>Your Game Plan This Week</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { day: "Today", task: "Defensive Stats", time: "6:00 PM", status: "upcoming" },
              { day: "Tomorrow", task: "Practice Quiz", time: "7:00 PM", status: "scheduled" },
              { day: "Thursday", task: "Fantasy Analytics", time: "6:30 PM", status: "scheduled" },
              { day: "Weekend", task: "Project Review", time: "Flexible", status: "optional" }
            ].map((schedule, index) => (
              <div key={index} className="p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                <div className="font-medium text-gray-900">{schedule.day}</div>
                <div className="text-sm text-gray-600 mt-1">{schedule.task}</div>
                <div className="text-xs text-gray-500 mt-2">{schedule.time}</div>
                <Badge 
                  variant={schedule.status === 'upcoming' ? 'default' : 'outline'}
                  className="mt-2"
                >
                  {schedule.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseDashboard;
