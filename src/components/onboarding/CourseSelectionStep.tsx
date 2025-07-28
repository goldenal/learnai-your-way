import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  Play,
  Clock,
  Users,
  Star,
  BarChart3,
  Code,
  Brain,
  Palette,
  TrendingUp,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const CourseSelectionStep = () => {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [onboardingData, setOnboardingData] = useState<any>({});
  const [showPreview, setShowPreview] = useState<string>('');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('onboardingData') || '{}');
    setOnboardingData(data);
  }, []);

  // Generate personalized courses based on user interests
  const getPersonalizedCourses = () => {
    const { interests = [], goals = [] } = onboardingData;
    const primaryInterest = interests[0] || 'general';
    const primaryGoal = goals[0] || 'personal';

    const courseMap: { [key: string]: any } = {
      cooking: {
        id: 'data-cooking',
        title: 'Data Science Through Culinary Arts',
        description: 'Master data analysis by exploring recipe optimization, nutrition data, and restaurant analytics',
        personalizedContent: 'Learn statistics through ingredient ratios, data visualization through nutritional charts, and machine learning through flavor pairing algorithms.',
        icon: BarChart3,
        difficulty: 'Beginner',
        duration: '8 weeks',
        students: '2.3k',
        rating: 4.8,
        lessons: [
          'Recipe Data Collection & Analysis',
          'Nutritional Statistics & Visualization',
          'Flavor Pairing Algorithms',
          'Restaurant Performance Analytics'
        ]
      },
      sports: {
        id: 'data-sports',
        title: 'Data Analytics Through Sports',
        description: 'Learn data science using player statistics, team performance, and game analytics',
        personalizedContent: 'Analyze player performance data, create predictive models for game outcomes, and visualize team statistics.',
        icon: TrendingUp,
        difficulty: 'Intermediate',
        duration: '10 weeks',
        students: '3.1k',
        rating: 4.9,
        lessons: [
          'Player Performance Metrics',
          'Game Statistics Analysis',
          'Predictive Modeling for Sports',
          'Team Performance Dashboards'
        ]
      },
      music: {
        id: 'web-music',
        title: 'Web Development for Music Lovers',
        description: 'Build web applications focused on music streaming, artist portfolios, and audio analysis',
        personalizedContent: 'Create music streaming interfaces, build artist websites, and develop audio visualization tools.',
        icon: Code,
        difficulty: 'Beginner',
        duration: '12 weeks',
        students: '1.8k',
        rating: 4.7,
        lessons: [
          'Music Player Interface Design',
          'Audio API Integration',
          'Artist Portfolio Websites',
          'Music Recommendation Systems'
        ]
      },
      art: {
        id: 'design-art',
        title: 'Digital Design Through Art History',
        description: 'Learn UI/UX design by studying art movements, color theory, and visual composition',
        personalizedContent: 'Apply art principles to digital interfaces, study color psychology in design, and create art-inspired layouts.',
        icon: Palette,
        difficulty: 'Beginner',
        duration: '8 weeks',
        students: '2.7k',
        rating: 4.8,
        lessons: [
          'Art Movements in Digital Design',
          'Color Theory for Interfaces',
          'Typography Through Art History',
          'Composition & Visual Hierarchy'
        ]
      }
    };

    // Default courses if interest not mapped
    const defaultCourses = [
      {
        id: 'ai-basics',
        title: 'AI Fundamentals Through Your Interests',
        description: 'Learn artificial intelligence concepts through personalized examples and applications',
        personalizedContent: `Explore AI concepts using examples from your interests in ${interests.join(', ')}.`,
        icon: Brain,
        difficulty: 'Beginner',
        duration: '6 weeks',
        students: '4.2k',
        rating: 4.9,
        lessons: [
          'Introduction to AI Concepts',
          'Machine Learning Basics',
          'AI in Everyday Applications',
          'Building Your First AI Project'
        ]
      },
      {
        id: 'project-management',
        title: 'Project Management Through Real Projects',
        description: 'Master project management by organizing events and projects related to your hobbies',
        personalizedContent: 'Learn project management by planning events related to your interests.',
        icon: CheckCircle,
        difficulty: 'Intermediate',
        duration: '8 weeks',
        students: '3.5k',
        rating: 4.7,
        lessons: [
          'Project Planning Fundamentals',
          'Team Management & Communication',
          'Risk Assessment & Mitigation',
          'Project Execution & Monitoring'
        ]
      }
    ];

    const personalizedCourse = courseMap[primaryInterest];
    if (personalizedCourse) {
      return [personalizedCourse, ...defaultCourses];
    }
    return defaultCourses;
  };

  const courses = getPersonalizedCourses();

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const handlePreview = (courseId: string) => {
    setShowPreview(showPreview === courseId ? '' : courseId);
  };

  const handleContinue = () => {
    const existingData = JSON.parse(localStorage.getItem('onboardingData') || '{}');
    const updatedData = {
      ...existingData,
      selectedCourse
    };
    localStorage.setItem('onboardingData', JSON.stringify(updatedData));
    navigate('/onboarding/complete');
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <h2 className="text-xl font-semibold text-slate-800">
              Your Personalized Course Recommendations
            </h2>
          </div>
          <p className="text-slate-700">
            Based on your interests in <strong>{onboardingData.interests?.join(', ')}</strong> and 
            goals for <strong>{onboardingData.goals?.join(', ')}</strong>, here are courses 
            tailored specifically for you.
          </p>
        </CardContent>
      </Card>

      {/* Course Selection */}
      <div className="space-y-6">
        {courses.map((course, index) => (
          <Card
            key={course.id}
            className={`transition-all duration-300 ${
              selectedCourse === course.id
                ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200'
                : 'hover:border-blue-300 hover:shadow-lg'
            }`}
          >
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-slate-800">
                          {course.title}
                        </h3>
                        {index === 0 && (
                          <Badge className="bg-white text-slate-800">
                            Best Match
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-slate-600 mb-4">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students} enrolled</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-white" />
                          <span>{course.rating}</span>
                        </div>
                        <Badge variant="outline">{course.difficulty}</Badge>
                      </div>

                      {/* Personalization Preview */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 mb-4">
                        <h4 className="font-medium text-green-800 mb-2 flex items-center">
                          <Sparkles className="w-4 h-4 mr-2" />
                          How this course is personalized for you:
                        </h4>
                        <p className="text-green-700 text-sm">
                          {course.personalizedContent}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0 lg:ml-6">
                  <Button
                    variant="outline"
                    onClick={() => handlePreview(course.id)}
                    className="flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>{showPreview === course.id ? 'Hide' : 'Preview'}</span>
                  </Button>
                  <Button
                    onClick={() => handleCourseSelect(course.id)}
                    className={selectedCourse === course.id ? 'gradient-primary' : 'bg-slate-800 hover:bg-slate-700'}
                  >
                    {selectedCourse === course.id ? 'Selected' : 'Select Course'}
                  </Button>
                </div>
              </div>

              {/* Course Preview */}
              {showPreview === course.id && (
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-4">Course Curriculum:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.lessons.map((lesson, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-200">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                          {idx + 1}
                        </div>
                        <span className="text-slate-700 text-sm">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          onClick={() => navigate('/onboarding/preferences')}
          className="px-6"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedCourse}
          className="px-8 py-3 text-lg gradient-primary disabled:opacity-50"
        >
          Start Learning Journey
        </Button>
      </div>
    </div>
  );
};

export default CourseSelectionStep;