
import React from 'react';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { PersonalizedGreeting } from '../components/dashboard/PersonalizedGreeting';
import { ProgressOverview } from '../components/dashboard/ProgressOverview';
import { ContinueLearning } from '../components/dashboard/ContinueLearning';
import { AIRecommendations } from '../components/dashboard/AIRecommendations';
import { GamifiedElements } from '../components/dashboard/GamifiedElements';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { LearningStats } from '../components/dashboard/LearningStats';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <DashboardHeader />
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <PersonalizedGreeting />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ProgressOverview />
            <ContinueLearning />
            <AIRecommendations />
          </div>
          
          <div className="space-y-8">
            <GamifiedElements />
            <ActivityFeed />
            <LearningStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
