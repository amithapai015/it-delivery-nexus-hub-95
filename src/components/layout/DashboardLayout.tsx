
import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { Footer } from "@/components/ui/footer";

const DashboardLayout = () => {
  return (
    <>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 p-6 bg-muted/20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DashboardLayout;
