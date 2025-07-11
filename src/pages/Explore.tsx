
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { Sparkles, Star, TrendingUp, Users, Clock, Search, Filter, BookmarkPlus, Play } from 'lucide-react';

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [difficulty, setDifficulty] = useState('all');

  const aiRecommendations = [
    {
      id: 1,
      title: 'Machine Learning through Sports Predictions',
      description: 'Master neural networks by predicting Premier League match outcomes and player performance',
      interest: '⚽ Football Analytics',
      difficulty: 'Advanced',
      duration: '8 weeks',
      matchScore: 98,
      rating: 4.9,
      students: 1243,
      instructor: 'Dr. AI Sports',
      preview: 'Learn regression models through goal prediction, understand clustering via team formations, master deep learning through player behavior analysis.',
      trending: true,
      new: false
    },
    {
      id: 2,
      title: 'Financial Analysis via Fantasy Football',
      description: 'Master investment strategies and portfolio management through fantasy sports',
      interest: '⚽ Financial Sports',
      difficulty: 'Intermediate', 
      duration: '6 weeks',
      matchScore: 94,
      rating: 4.7,
      students: 856,
      instructor: 'Finance Coach',
      preview: 'Understand risk management through player transfers, learn portfolio theory via team selection, master ROI calculations through fantasy performance.',
      trending: false,
      new: true
    },
    {
      id: 3,
      title: 'Data Science through Recipe Optimization',
      description: 'Learn advanced analytics by optimizing cooking recipes and nutrition data',
      interest: '👨‍🍳 Culinary Data',
      difficulty: 'Intermediate',
      duration: '7 weeks',
      matchScore: 89,
      rating: 4.8,
      students: 567,
      instructor: 'Chef Analytics',
      preview: 'Apply statistical analysis to ingredient combinations, use machine learning for flavor prediction, master data visualization through nutrition charts.',
      trending: true,
      new: false
    }
  ];

  const categories = [
    {
      name: 'Data Science for Sports Fans',
      icon: '⚽',
      count: 24,
      description: 'Analytics, statistics, and ML through sports',
      trending: true
    },
    {
      name: 'Culinary Data Analytics',
      icon: '👨‍🍳',
      count: 18,
      description: 'Data science through cooking and nutrition',
      trending: false
    },
    {
      name: 'Leadership through Sports',
      icon: '🏆',
      count: 15,
      description: 'Management skills via team strategies',
      trending: true
    },
    {
      name: 'Finance via Gaming',
      icon: '🎮',
      count: 12,
      description: 'Investment principles through game mechanics',
      trending: false
    },
    {
      name: 'Psychology through Movies',
      icon: '🎬',
      count: 21,
      description: 'Human behavior analysis via film studies',
      trending: true
    },
    {
      name: 'Physics through Music',
      icon: '🎵',
      count: 16,
      description: 'Scientific principles via sound and rhythm',
      trending: false
    }
  ];

  const trendingCourses = [
    {
      title: 'Advanced Football Analytics',
      students: 2341,
      growth: '+47%',
      interest: '⚽'
    },
    {
      title: 'Cooking Chemistry Mastery',
      students: 1876,
      growth: '+38%',
      interest: '👨‍🍳'
    },
    {
      title: 'Game Theory through Chess',
      students: 1432,
      growth: '+29%',
      interest: '♟️'
    },
    {
      title: 'Statistics via Movie Ratings',
      students: 1198,
      growth: '+25%',
      interest: '🎬'
    }
  ];

  const similarLearners = [
    {
      course: 'Behavioral Economics through Sports Betting',
      similarity: 'Similar to you',
      students: 234,
      interest: '⚽',
      commonInterests: ['Football', 'Data Analysis', 'Psychology']
    },
    {
      course: 'Network Analysis via Social Media Sports',
      similarity: 'Football fans are taking',
      students: 567,
      interest: '⚽',
      commonInterests: ['Football', 'Social Networks', 'Analytics']
    },
    {
      course: 'Optimization through Team Formation',
      similarity: 'Sports analytics enthusiasts love',
      students: 345,
      interest: '⚽',
      commonInterests: ['Football', 'Mathematics', 'Strategy']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <DashboardHeader />
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h1>
          <p className="text-gray-600">Discover personalized learning opportunities tailored to your interests</p>
        </div>

        {/* Advanced Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="e.g., 'teach me coding using sports examples'" 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Interest Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Interests</SelectItem>
                  <SelectItem value="sports">⚽ Sports</SelectItem>
                  <SelectItem value="cooking">👨‍🍳 Cooking</SelectItem>
                  <SelectItem value="gaming">🎮 Gaming</SelectItem>
                  <SelectItem value="movies">🎬 Movies</SelectItem>
                  <SelectItem value="music">🎵 Music</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={difficulty} onValueChange={setDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulty Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              
              <Button>
                <Filter className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* AI Recommendations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Sparkles className="w-6 h-6 text-purple-600 mr-2" />
                AI-Powered Recommendations
              </h2>
              <div className="space-y-6">
                {aiRecommendations.map((course) => (
                  <Card key={course.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">{course.interest.split(' ')[0]}</div>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                                {course.trending && (
                                  <Badge className="bg-orange-100 text-orange-700">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    Trending
                                  </Badge>
                                )}
                                {course.new && (
                                  <Badge className="bg-green-100 text-green-700">New</Badge>
                                )}
                              </div>
                              <p className="text-gray-600 mb-2">{course.description}</p>
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
                            
                            <div className="text-right">
                              <div className="flex items-center space-x-1 mb-2">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="font-medium">{course.matchScore}% match</span>
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-gray-600">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span>{course.rating}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-4">
                            <h4 className="font-medium text-purple-900 mb-2 flex items-center">
                              <Sparkles className="w-4 h-4 mr-1" />
                              Personalization Preview
                            </h4>
                            <p className="text-sm text-purple-700">{course.preview}</p>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                              <Play className="w-4 h-4 mr-2" />
                              Start Course
                            </Button>
                            <Button variant="outline">
                              Preview Lessons
                            </Button>
                            <Button variant="ghost" size="sm">
                              <BookmarkPlus className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Browse by Category */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browse by Interest Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">{category.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-gray-900">{category.name}</h3>
                            {category.trending && (
                              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Hot
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                          <p className="text-sm text-blue-600 font-medium">{category.count} courses available</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Trending Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <span>Trending This Week</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-2xl">{course.interest}</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 text-sm">{course.title}</h4>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{course.students.toLocaleString()} students</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {course.growth}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Courses Others Like You Are Taking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>Popular with Similar Learners</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {similarLearners.map((item, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{item.interest}</div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 text-sm mb-1">{item.course}</h4>
                        <p className="text-xs text-blue-600 mb-2">{item.similarity}</p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {item.commonInterests.map((interest, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {interest}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-xs text-gray-500">{item.students} students enrolled</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Filters */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="w-4 h-4 mr-2" />
                  Courses under 1 hour
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="w-4 h-4 mr-2" />
                  Highly rated (4.5+)
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Popular this month
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Sparkles className="w-4 h-4 mr-2" />
                  New releases
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
