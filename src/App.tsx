
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ResourceManagement from "./pages/ResourceManagement";
import FinancialDepartment from "./pages/FinancialDepartment";
import Escalations from "./pages/Escalations";
import Settings from "./pages/Settings";
import AddResource from "./pages/AddResource";
import AddProject from "./pages/AddProject";
import ProjectAllocation from "./pages/ProjectAllocation";
import ResourceOverview from "./pages/ResourceOverview";
import ProjectManagement from "./pages/ProjectManagement";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <Routes>
              <Route path="/" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="resource-management" element={<ResourceManagement />} />
                <Route path="financial-department" element={<FinancialDepartment />} />
                <Route path="settings" element={<Settings />} />
                <Route path="add-resource" element={<AddResource />} />
                <Route path="add-project" element={<AddProject />} />
                <Route path="project-allocation" element={<ProjectAllocation />} />
                <Route path="resource-overview" element={<ResourceOverview />} />
                <Route path="project-management" element={<ProjectManagement />} />
                <Route path="escalations" element={<Escalations />} />
                <Route path="project-details/:projectId" element={<ProjectDetails />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
