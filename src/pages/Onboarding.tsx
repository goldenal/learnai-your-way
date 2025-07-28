import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import WelcomeStep from '@/components/onboarding/WelcomeStep';
import PreferencesStep from '@/components/onboarding/PreferencesStep';
import CourseSelectionStep from '@/components/onboarding/CourseSelectionStep';
import CompletionStep from '@/components/onboarding/CompletionStep';

const Onboarding = () => {
  const { step } = useParams<{ step: string }>();

  const stepConfig = {
    'welcome': {
      component: WelcomeStep,
      currentStep: 1,
      title: 'Tell Us About Yourself',
      subtitle: 'Help us personalize your learning experience by sharing your interests and goals.'
    },
    'preferences': {
      component: PreferencesStep,
      currentStep: 2,
      title: 'Learning Preferences',
      subtitle: 'How do you learn best? Let us customize the content delivery for you.'
    },
    'course-selection': {
      component: CourseSelectionStep,
      currentStep: 3,
      title: 'Choose Your First Course',
      subtitle: 'Based on your profile, here are personalized course recommendations.'
    },
      'complete': {
      component: CompletionStep,
      currentStep: 4,
      title: 'Welcome to Imoye!',
      subtitle: 'Your personalized learning journey is ready to begin.'
    }
  };

  const currentStepConfig = stepConfig[step as keyof typeof stepConfig];

  if (!currentStepConfig) {
    return <Navigate to="/onboarding/welcome" replace />;
  }

  const StepComponent = currentStepConfig.component;

  return (
    <OnboardingLayout
      currentStep={currentStepConfig.currentStep}
      totalSteps={4}
      title={currentStepConfig.title}
      subtitle={currentStepConfig.subtitle}
    >
      <StepComponent />
    </OnboardingLayout>
  );
};

export default Onboarding;