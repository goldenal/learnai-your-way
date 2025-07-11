
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Users, Star, Sparkles } from 'lucide-react';

interface CourseSelectionStepProps {
  onNext: (data: CourseSelectionData) => void;
  onBack: () => void;
  userProfile: any;
}

interface CourseSelectionData {
  selectedCourse: string;
  sampleLessonCompleted: boolean;
}

const CourseSelectionStep = ({ onNext, onBack, userProfile }: CourseSelectionStepProps) => {
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [showPreview, setShowPreview] = useState<string>('');
  const [sampleLessonCompleted, setSampleLessonCompleted] = useState<boolean>(false);

  // Generate personalized courses based on user interests
  const getPersonalizedCourses = () => {
    const courses = [
      {
        id: 'data-analysis',
        title: 'Data Analysis & Visualization',
        personalizedTitle: userProfile?.interests?.includes('sports') 
          ? 'Data Analysis Through Sports Statistics'
          : userProfile?.interests?.includes('cooking')
          ? 'Data Analysis Through Recipe & Nutrition Data'
          : 'Data Analysis & Visualization',
        description: 'Master statistical analysis and data visualization',
        personalizedDescription: userProfile?.interests?.includes('sports')
          ? 'Learn statistical analysis using player performance metrics, team analytics, and match statistics'
          : userProfile?.interests?.includes('cooking')
          ? 'Discover data patterns through recipe optimization, nutrition analysis, and ingredient correlations'
          : 'Master statistical analysis and data visualization with real-world examples',
        duration: '6 weeks',
        difficulty: 'Intermediate',
        students: '12,450',
        rating: 4.8,
        topics: userProfile?.interests?.includes('sports')
          ? ['Player Statistics', 'Team Performance', 'Match Analytics', 'Predictive Modeling']
          : userProfile?.interests?.includes('cooking')
          ? ['Recipe Analytics', 'Nutrition Data', 'Ingredient Analysis', 'Cooking Optimization']
          : ['Statistical Analysis', 'Data Visualization', 'Python/R', 'Real-world Projects'],
        preview: userProfile?.interests?.includes('sports')
          ? 'Analyze Messi vs Ronaldo career statistics to understand correlation analysis'
          : userProfile?.interests?.includes('cooking')
          ? 'Discover why some recipes work better by analyzing ingredient ratios and cooking times'
          : 'Learn to find patterns in complex datasets using real business examples'
      },
      {
        id: 'project-management',
        title: 'Project Management Fundamentals',
        personalizedTitle: userProfile?.interests?.includes('cooking')
          ? 'Project Management Through Restaurant Operations'
          : userProfile?.interests?.includes('sports')
          ? 'Project Management Like Coaching a Championship Team'
          : 'Project Management Fundamentals',
        description: 'Learn to plan, execute, and deliver projects successfully',
        personalizedDescription: userProfile?.interests?.includes('cooking')
          ? 'Master project management by learning how restaurants coordinate complex operations from kitchen to customer'
          : userProfile?.interests?.includes('sports')
          ? 'Learn project management principles through the lens of coaching teams to championship victories'
          : 'Learn to plan, execute, and deliver projects successfully',
        duration: '4 weeks',
        difficulty: 'Beginner',
        students: '8,230',
        rating: 4.7,
        topics: userProfile?.interests?.includes('cooking')
          ? ['Menu Planning', 'Kitchen Workflow', 'Staff Coordination', 'Customer Experience']
          : userProfile?.interests?.includes('sports')
          ? ['Team Strategy', 'Player Development', 'Game Planning', 'Performance Tracking']
          : ['Project Planning', 'Team Management', 'Risk Assessment', 'Agile Methods'],
        preview: userProfile?.interests?.includes('cooking')
          ? 'Learn how a restaurant plans a new menu launch from concept to customer plate'
          : userProfile?.interests?.includes('sports')
          ? 'Discover how coaches plan an entire season from training camp to playoffs'
          : 'Plan and execute a real project from start to finish'
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing Mastery',
        personalizedTitle: userProfile?.interests?.includes('arts')
          ? 'Digital Marketing for Creative Professionals'
          : userProfile?.interests?.includes('technology')
          ? 'Technical Product Marketing & Growth'
          : 'Digital Marketing Mastery',
        description: 'Build and execute effective digital marketing campaigns',
        personalizedDescription: userProfile?.interests?.includes('arts')
          ? 'Learn marketing strategies specifically designed for artists, photographers, and creative professionals'
          : userProfile?.interests?.includes('technology')
          ? 'Master technical product marketing, developer relations, and growth hacking strategies'
          : 'Build and execute effective digital marketing campaigns',
        duration: '5 weeks',
        difficulty: 'Intermediate',
        students: '15,680',
        rating: 4.6,
        topics: userProfile?.interests?.includes('arts')
          ? ['Portfolio Marketing', 'Social Media for Artists', 'Creative Brand Building', 'Client Acquisition']
          : userProfile?.interests?.includes('technology')
          ? ['Product Launches', 'Developer Communities', 'Technical Content', 'Growth Metrics']
          : ['Social Media Marketing', 'Content Strategy', 'Email Marketing', 'Analytics'],
        preview: userProfile?.interests?.includes('arts')
          ? 'See how a photographer built their brand from 0 to 100K Instagram followers'
          : userProfile?.interests?.includes('technology')
          ? 'Learn how tech startups achieve viral growth through technical marketing'
          : 'Create your first marketing campaign and track its performance'
      }
    ];

    return courses;
  };

  const personalizedCourses = getPersonalizedCourses();

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
  };

  const handleSampleLesson = (courseId: string) => {
    setShowPreview(courseId);
    setSampleLessonCompleted(true);
  };

  const handleNext = () => {
    if (selectedCourse) {
      onNext({
        selectedCourse,
        sampleLessonCompleted,
      });
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900">
          Your Personalized Course Recommendations
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Based on your interests and preferences, here are courses tailored specifically for you.
        </p>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 mx-auto max-w-2xl">
          <p className="text-blue-800 font-medium">
            ✨ Notice how each course adapts to your interests: {userProfile?.interests?.join(', ') || 'your selected interests'}
          </p>
        </div>
      </div>

      {/* Course Cards */}
      <div className="space-y-6">
        {personalizedCourses.map((course) => (
          <div
            key={course.id}
            className={`border-2 rounded-2xl overflow-hidden transition-all hover:shadow-xl ${
              selectedCourse === course.id
                ? 'border-primary bg-blue-50'
                : 'border-slate-200 hover:border-slate-300 bg-white'
            }`}
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1 space-y-4">
                  {/* Course Header */}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{course.personalizedTitle}</h3>
                        <p className="text-slate-600 mt-1">{course.personalizedDescription}</p>
                      </div>
                      <input
                        type="radio"
                        checked={selectedCourse === course.id}
                        onChange={() => handleCourseSelect(course.id)}
                        className="mt-1 w-5 h-5"
                      />
                    </div>
                  </div>

                  {/* Course Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students} students
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                    <Badge variant="secondary">{course.difficulty}</Badge>
                  </div>

                  {/* Personalized Topics */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">What you'll learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Personalization Highlight */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-3">
                    <p className="text-purple-800 font-medium text-sm">
                      🎯 Personalized for you: {course.preview}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 lg:ml-6">
                  <Button
                    onClick={() => handleCourseSelect(course.id)}
                    variant={selectedCourse === course.id ? "default" : "outline"}
                    className={selectedCourse === course.id ? "gradient-primary" : ""}
                  >
                    {selectedCourse === course.id ? "Selected" : "Select Course"}
                  </Button>
                  <Button
                    onClick={() => handleSampleLesson(course.id)}
                    variant="ghost"
                    className="gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Try Sample Lesson
                  </Button>
                </div>
              </div>

              {/* Sample Lesson Preview */}
              {showPreview === course.id && (
                <div className="mt-6 p-4 bg-slate-50 rounded-xl border">
                  <h4 className="font-semibold mb-2">Sample Lesson Preview</h4>
                  <div className="bg-white rounded-lg p-4 border">
                    <p className="text-slate-700 mb-3">
                      <strong>Lesson 1:</strong> {course.preview}
                    </p>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-3">
                      <p className="text-green-800 text-sm">
                        ✅ This is exactly how we'll teach every concept - through examples that match your interests!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Note */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="font-semibold text-yellow-800 mb-2">See the Difference?</h3>
        <p className="text-yellow-700">
          Traditional courses teach data analysis with generic business examples. 
          We teach the same concepts using {userProfile?.interests?.includes('sports') ? 'sports statistics you already understand' : 
          userProfile?.interests?.includes('cooking') ? 'cooking scenarios you can relate to' : 'examples from your interests'}.
          Same learning outcomes, but way more engaging!
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-8">
        <Button
          onClick={onBack}
          variant="outline"
          className="px-8 py-3"
        >
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedCourse}
          className="gradient-primary px-8 py-3 text-lg hover-lift"
        >
          Start My Journey
        </Button>
      </div>
    </div>
  );
};

export default CourseSelectionStep;
