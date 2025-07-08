
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="dashboard-header h-16 flex items-center justify-between px-6 text-white">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-white hover:bg-white/20" />
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/901ba3a0-5a28-46c1-9884-11cf836fd454.png" 
            alt="Zapcom Logo" 
            className="h-8"
          />
          <div className="text-sm opacity-90">
            Welcome, John Doe (john.doe@company.com)
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          All Systems Operational
        </div>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
          Sign Out
        </Button>
      </div>
    </header>
  );
};
