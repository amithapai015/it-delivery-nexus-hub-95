
import { KPICard } from "@/components/dashboard/KPICard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Users, 
  UserCheck, 
  UserX, 
  User, 
  Building,
  Plus,
  FolderPlus,
  UserPlus
} from "lucide-react";

const ResourceManagement = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Resource Management</h1>
        <p className="text-gray-600">Comprehensive resource allocation and management system</p>
      </div>

      {/* Resource KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <KPICard
          title="Total Resources"
          value={142}
          trend={{ value: "+2.5% from last month", isPositive: true }}
          icon={Users}
          iconColor="text-blue-500"
        />
        <KPICard
          title="Billable"
          value={89}
          subtitle="62.7%"
          icon={UserCheck}
          iconColor="text-green-500"
        />
        <KPICard
          title="Benched"
          value={23}
          subtitle="16.2%"
          icon={UserX}
          iconColor="text-orange-500"
        />
        <KPICard
          title="Shadow"
          value={12}
          subtitle="8.5%"
          icon={User}
          iconColor="text-gray-500"
        />
        <KPICard
          title="Internal"
          value={8}
          subtitle="5.6%"
          icon={Building}
          iconColor="text-purple-500"
        />
        <KPICard
          title="Zapminds"
          value={10}
          subtitle="7.0%"
          icon={Building}
          iconColor="text-indigo-500"
        />
      </div>

      {/* Resource Management Tabs */}
      <Tabs defaultValue="manager" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="manager">Resource Manager</TabsTrigger>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="projects">Project Management</TabsTrigger>
        </TabsList>

        <TabsContent value="manager" className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resource Manager Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/add-resource">
                <Button className="w-full h-24 flex flex-col gap-2" variant="outline">
                  <UserPlus size={24} />
                  <span>Add Resource</span>
                </Button>
              </Link>
              <Link to="/add-project">
                <Button className="w-full h-24 flex flex-col gap-2" variant="outline">
                  <FolderPlus size={24} />
                  <span>Add Project</span>
                </Button>
              </Link>
              <Link to="/project-allocation">
                <Button className="w-full h-24 flex flex-col gap-2" variant="outline">
                  <Plus size={24} />
                  <span>Project Allocation</span>
                </Button>
              </Link>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="overview" className="space-y-6">
          <Link to="/resource-overview">
            <Button>View Detailed Resource Overview</Button>
          </Link>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Link to="/project-management">
            <Button>View Project Management Details</Button>
          </Link>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResourceManagement;
