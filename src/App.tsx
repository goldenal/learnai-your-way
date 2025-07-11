
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import MyCourses from "./pages/MyCourses";
import Explore from "./pages/Explore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/onboarding/:step" element={<Onboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/progress" element={<Dashboard />} />
          {/* Future routes */}
          <Route path="/how-it-works" element={<div>How It Works - Coming Soon</div>} />
          <Route path="/courses" element={<div>Courses - Coming Soon</div>} />
          <Route path="/pricing" element={<div>Pricing - Coming Soon</div>} />
          <Route path="/login" element={<div>Login - Coming Soon</div>} />
          <Route path="/register" element={<div>Register - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
