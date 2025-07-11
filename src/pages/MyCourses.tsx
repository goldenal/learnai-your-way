
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Play, BookOpen, Clock, Users, Star, Search, Filter, BookmarkPlus, Award } from 'lucide-react';

const MyCourses = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const activeCourses = [
    {
      id: 1,
      title: 'Data Analysis through Football Statistics',
      subtitle: 'Master data science using your favorite sport',
      progress: 75,
      nextLesson: 'Analyzing Player Performance Metrics',
      totalLessons: 24,
      completedLessons: 18,
      timeInvested: '12 hours',
      estimatedCompletion: '3 hours',
      interest: '⚽',
      difficulty: 'Intermediate',
      engagement: 94,
      comprehension: 92,
      instructor: 'Dr. Sarah Martinez',
      rating: 4.8,
      students: 1243
    },
    {
      id: 2,
      title: 'Statistics via Recipe Optimization',
      subtitle: 'Learn statistical analysis through cooking science',
      progress: 45,
      nextLesson: 'Correlation in Cooking Times',
      totalLessons: 18,
      completedLessons: 8,
      timeInvested: '8 hours',
      estimatedCompletion: '10 hours',
      interest: '👨‍🍳',
      difficulty: 'Beginner',
      engagement: 89,
      comprehension: 88,
      instructor: 'Chef Analytics Pro',
      rating: 4.7,
      students: 856
    },
    {
      id: 3,
      title: 'Project Management through Team Strategy',
      subtitle: 'Leadership lessons from sports team management',
      progress: 90,
      nextLesson: 'Leadership Lessons from Legendary Coaches',
      totalLessons: 16,
      completedLessons: 14,
      timeInvested: '15 hours',
      estimatedCompletion: '2 hours',
      interest: '🏆',
      difficulty: 'Advanced',
      engagement: 96,
      comprehension: 95,
      instructor: 'Coach Leadership',
      rating: 4.9,
      students: 432
    }
  ];

  const completedCourses = [
    {
      id: 4,
      title: 'Basic Statistics through Sports Analytics',
      subtitle: 'Foundation course completed',
      completedDate: '2 weeks ago',
      finalGrade: 'A+',
      certificateUrl: '#',
      interest: '⚽',
      skills: ['Data Analysis', 'Statistical Thinking', 'Sports Analytics'],
      timeInvested: '20 hours'
    },
    {
      id: 5,
      title: 'Introduction to Data Visualization',
      subtitle: 'Charts and graphs mastery',
      completedDate: '1 month ago',
      finalGrade: 'A',
      certificateUrl: '#',
      interest: '📊',
      skills: ['Data Visualization', 'Chart Design', 'Storytelling with Data'],
      timeInvested: '16 hours'
    }
  ];

  const bookmarkedCourses = [
    {
      id: 6,
      title: 'Machine Learning through Sports Predictions',
      subtitle: 'Advanced ML using football match predictions',
      interestMatch: 95,
      duration: '8 weeks',
      difficulty: 'Advanced',
      interest: '⚽',
      rating: 4.8,
      students: 234,
      personalizationPreview: 'Learn neural networks by predicting Premier League outcomes, understand algorithms through player performance analysis.'
    },
    {
      id: 7,
      title: 'Financial Analysis via Fantasy Football',
      subtitle: 'Budget management and ROI through fantasy sports',
      interestMatch: 88,
      duration: '6 weeks', 
      difficulty: 'Intermediate',
      interest: '⚽',
      rating: 4.6,
      students: 567,
      personalizationPreview: 'Master portfolio theory through team selection, learn risk management via transfer strategies.'
    }
  ];

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <DashboardHeader />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
          <p className="text-gray-600">Track your personalized learning journey</p>
        </div>

        {/* Search and Filter Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search your courses..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter courses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Courses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="bookmarked">Bookmarked</SelectItem>
                  <SelectItem value="football">⚽ Football</SelectItem>
                  <SelectItem value="cooking">👨‍🍳 Cooking</SelectItem>
                  <SelectItem value="leadership">🏆 Leadership</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Active Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Active Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{course.interest}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{course.title}</CardTitle>
                      <p className="text-sm text-gray-600 mb-2">{course.subtitle}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{course.difficulty}</Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs text-gray-600">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-sm text-gray-600 mt-2">
                      Next: {course.nextLesson}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Time Invested</p>
                      <p className="font-medium">{course.timeInvested}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Est. Remaining</p>
                      <p className="font-medium">{course.estimatedCompletion}</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Personalization Effectiveness</h4>
                    <div className="flex justify-between text-sm">
                      <span>Engagement: {course.engagement}%</span>
                      <span>Comprehension: {course.comprehension}%</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </Button>
                    <Button variant="outline" size="sm">
                      Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Completed Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Completed Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {completedCourses.map((course) => (
              <Card key={course.id} className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{course.interest}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{course.subtitle}</p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge className="bg-green-100 text-green-700">
                          <Award className="w-3 h-3 mr-1" />
                          {course.finalGrade}
                        </Badge>
                        <span className="text-sm text-gray-500">Completed {course.completedDate}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {course.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{course.timeInvested} invested</span>
                        <Button variant="outline" size="sm">
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bookmarked Courses */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bookmarked Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {bookmarkedCourses.map((course) => (
              <Card key={course.id} className="border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">{course.interest}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{course.subtitle}</p>
                      
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge variant="secondary">{course.difficulty}</Badge>
                        <span className="text-sm text-gray-500">{course.duration}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <span className="text-xs">{course.rating}</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg mb-3">
                        <h4 className="font-medium text-sm mb-1">
                          {course.interestMatch}% Interest Match
                        </h4>
                        <p className="text-xs text-blue-700">
                          {course.personalizationPreview}
                        </p>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          Enroll Now
                        </Button>
                        <Button variant="outline" size="sm">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
