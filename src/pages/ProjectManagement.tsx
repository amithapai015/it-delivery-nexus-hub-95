
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Edit } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectManagement = () => {
  const projects = [
    {
      id: 1,
      name: "Project Alpha",
      client: "TechCorp Industries",
      manager: "Sarah Johnson",
      status: "Development",
      progress: 65,
      startDate: "1/15/2024",
      endDate: "6/30/2024",
      budget: "$500,000",
      team: 8,
      health: "Green"
    },
    {
      id: 2,
      name: "Beta Platform",
      client: "InnovateCorp",
      manager: "Mike Chen",
      status: "UAT",
      progress: 78,
      startDate: "2/1/2024",
      endDate: "5/15/2024",
      budget: "$750,000",
      team: 12,
      health: "Amber"
    },
    {
      id: 3,
      name: "Customer Portal",
      client: "GlobalTech",
      manager: "Alex Rodriguez",
      status: "Testing",
      progress: 95,
      startDate: "12/1/2023",
      endDate: "7/20/2024",
      budget: "$300,000",
      team: 6,
      health: "Green"
    },
    {
      id: 4,
      name: "Data Migration",
      client: "MegaCorp",
      manager: "Emily Davis",
      status: "Planning",
      progress: 45,
      startDate: "3/1/2024",
      endDate: "8/15/2024",
      budget: "$400,000",
      team: 5,
      health: "Red"
    }
  ];

  const getHealthBadgeClass = (health: string) => {
    switch (health) {
      case 'Green': return 'status-badge status-green';
      case 'Amber': return 'status-badge status-yellow';
      case 'Red': return 'status-badge status-red';
      default: return 'status-badge';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Link to="/resource-management">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resource Management
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Project Management</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-border">
        <div className="p-6 border-b border-border">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">All Projects</h2>
            <Link to="/add-project">
              <Button>Add New Project</Button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-gray-50">
                <th className="text-left py-4 px-6 font-medium text-gray-600">Project Name</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Client</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Project Manager</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Progress</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Timeline</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Budget</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Team Size</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Health</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-border hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium">{project.name}</td>
                  <td className="py-4 px-6">{project.client}</td>
                  <td className="py-4 px-6">{project.manager}</td>
                  <td className="py-4 px-6">{project.status}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 bg-blue-500 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">
                      <div>{project.startDate} - {project.endDate}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">{project.budget}</td>
                  <td className="py-4 px-6">{project.team}</td>
                  <td className="py-4 px-6">
                    <span className={getHealthBadgeClass(project.health)}>
                      {project.health}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Project Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Projects</h3>
          <div className="text-3xl font-bold text-blue-600">{projects.length}</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">On Track</h3>
          <div className="text-3xl font-bold text-green-600">
            {projects.filter(p => p.health === 'Green').length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">At Risk</h3>
          <div className="text-3xl font-bold text-yellow-600">
            {projects.filter(p => p.health === 'Amber').length}
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Critical</h3>
          <div className="text-3xl font-bold text-red-600">
            {projects.filter(p => p.health === 'Red').length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
