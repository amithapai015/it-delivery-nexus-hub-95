
import { useState, useEffect } from "react";
import { KPICardEnhanced } from "@/components/dashboard/KPICardEnhanced";
import { EscalationCard } from "@/components/dashboard/EscalationCard";
import { ResourceOverviewCard } from "@/components/dashboard/ResourceOverviewCard";
import { ProjectHealthTable } from "@/components/dashboard/ProjectHealthTable";
import { useToast } from "@/hooks/use-toast";
import dashboardData from "@/data/dashboardData.json";

const Dashboard = () => {
  const [data, setData] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate API call - replace with actual API call later
    setData(dashboardData);
  }, []);

  const handleEditEscalation = (id: string) => {
    toast({
      title: "Edit Escalation",
      description: `Editing escalation with ID: ${id}`,
    });
  };

  const handleDeleteEscalation = (id: string) => {
    toast({
      title: "Delete Escalation",
      description: `Deleting escalation with ID: ${id}`,
      variant: "destructive",
    });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">IT Delivery Summary Dashboard</h1>
        <p className="text-gray-600">Executive overview of project delivery health and performance</p>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {data.kpis.map((kpi: any) => (
          <KPICardEnhanced
            key={kpi.id}
            title={kpi.title}
            value={kpi.value}
            subtitle={kpi.subtitle}
            icon={kpi.icon}
            iconColor={kpi.iconColor}
          />
        ))}
      </div>

      {/* Project Health Overview Section - Moved up */}
      <ProjectHealthTable projects={data.projectHealth} />

      {/* Grid with Resource Overview and Escalations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResourceOverviewCard
          totalEngineers={data.resourceOverview.totalEngineers}
          benchPercentage={data.resourceOverview.benchPercentage}
          allocationPercentage={data.resourceOverview.allocationPercentage}
          roleDistribution={data.resourceOverview.roleDistribution}
          experienceDistribution={data.resourceOverview.experienceDistribution}
          billableRatio={data.resourceOverview.billableRatio}
        />

        <EscalationCard
          escalations={data.escalations}
          onEdit={handleEditEscalation}
          onDelete={handleDeleteEscalation}
        />
      </div>
    </div>
  );
};

export default Dashboard;
