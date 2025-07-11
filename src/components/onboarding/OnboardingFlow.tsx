
import React, { useState } from 'react';
import OnboardingLayout from './OnboardingLayout';
import WelcomeStep from './WelcomeStep';
import PreferencesStep from './PreferencesStep';
import CourseSelectionStep from './CourseSelectionStep';
import CompletionStep from './CompletionStep';

interface UserProfile {
  interests: string[];
  learningStyle: string[];
  goals: string[];
  timeCommitment: string;
  contentTypes: string[];
  difficultyLevel: string;
  learningPace: string;
  notifications: string[];
  selectedCourse: string;
  sampleLessonCompleted: boolean;
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userProfile, setUserProfile] = useState<Partial<UserProfile>>({});
  const totalSteps = 4;

  const handleWelcomeNext = (data: any) => {
    setUserProfile(prev => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handlePreferencesNext = (data: any) => {
    setUserProfile(prev => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  const handleCourseSelectionNext = (data: any) => {
    setUserProfile(prev => ({ ...prev, ...data }));
    setCurrentStep(4);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <WelcomeStep onNext={handleWelcomeNext} />;
      case 2:
        return (
          <PreferencesStep 
            onNext={handlePreferencesNext} 
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <CourseSelectionStep 
            onNext={handleCourseSelectionNext} 
            onBack={handleBack}
            userProfile={userProfile}
          />
        );
      case 4:
        return (
          <CompletionStep 
            userProfile={userProfile}
            selectedCourse={userProfile.selectedCourse || ''}
          />
        );
      default:
        return <WelcomeStep onNext={handleWelcomeNext} />;
    }
  };

  return (
    <OnboardingLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      onBack={currentStep > 1 ? handleBack : undefined}
      showBack={currentStep > 1 && currentStep < 4}
    >
      {renderCurrentStep()}
    </OnboardingLayout>
  );
};

export default OnboardingFlow;
