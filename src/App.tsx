import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import JudgingCriteriaPage from "./pages/JudgingCriteriaPage";
import SubmissionGuidelinesPage from "./pages/SubmissionGuidelinesPage";
import ProgramSchedulePage from "./pages/ProgramSchedulePage";
import ResourcesPage from "./pages/ResourcesPage";
import TimelinePage from "./pages/TimelinePage";
import ThemesPage from "./pages/ThemesPage";
import EligibilityPage from "./pages/EligibilityPage";
import AwardsPage from "./pages/AwardsPage";
import JudgeAppointmentCriteriaPage from "./pages/JudgeAppointmentCriteriaPage";
import JudgeRecognitionAwardsPage from "./pages/JudgeRecognitionAwardsPage";
import ResultsPage from "./pages/ResultPage";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule" element={<ProgramSchedulePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/themes" element={<ThemesPage />} />
          <Route path="/eligibility" element={<EligibilityPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/judging-criteria" element={<JudgingCriteriaPage />} />
          <Route path="/submission-guidelines" element={<SubmissionGuidelinesPage />} />
          <Route path="/program-schedule" element={<ProgramSchedulePage />} />
          <Route path="/judge-appointment-criteria" element={<JudgeAppointmentCriteriaPage />} />
          <Route path="/judge-recognition-awards" element={<JudgeRecognitionAwardsPage />} />
          <Route path="/results" element={<ResultsPage />} />

          {/* Catch-all route for 404 Not Found */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
