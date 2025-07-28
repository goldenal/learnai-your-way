
import React, { useState } from 'react';
import { Bell, Search, User, BookOpen, Compass, BarChart3, Home, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';

export const DashboardHeader = () => {
  const [notifications] = useState(3);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sylliq
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <Home className="w-4 h-4" />
                <span>Dashboard</span>
              </NavLink>
              
              <NavLink 
                to="/my-courses" 
                className={({ isActive }) => 
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <BookOpen className="w-4 h-4" />
                <span>My Courses</span>
              </NavLink>
              
              <NavLink 
                to="/explore" 
                className={({ isActive }) => 
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <Compass className="w-4 h-4" />
                <span>Explore</span>
              </NavLink>
              
              <NavLink 
                to="/progress" 
                className={({ isActive }) => 
                  `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                <BarChart3 className="w-4 h-4" />
                <span>Progress</span>
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search courses, skills..." 
                className="pl-10 w-64"
              />
            </div>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              {notifications > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500">
                  {notifications}
                </Badge>
              )}
            </Button>
            
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
