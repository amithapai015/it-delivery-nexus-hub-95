
import { KPICard } from "@/components/dashboard/KPICard";
import { Link } from "react-router-dom";
import { 
  Users, 
  LayoutDashboard, 
  Calendar, 
  Database,
  CheckCircle,
  AlertTriangle 
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">IT Delivery Summary Dashboard</h1>
        <p className="text-gray-600">Executive overview of project delivery health and performance</p>
      </div>

      {/* KPIs Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-border p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">12</div>
          <div className="text-sm text-gray-600">Active Projects</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-border p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div className="text-2xl font-bold text-green-600">9</div>
          <div className="text-sm text-gray-600">On Track</div>
          <div className="text-xs text-gray-500">75%</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-border p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="h-8 w-8 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-orange-600">3</div>
          <div className="text-sm text-gray-600">At Risk</div>
          <div className="text-xs text-gray-500">25%</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-border p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Calendar className="h-8 w-8 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">4</div>
          <div className="text-sm text-gray-600">Completed MTD</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-border p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <div className="text-2xl font-bold text-red-600">2</div>
          <div className="text-sm text-gray-600">Escalations (30d)</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-border p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <LayoutDashboard className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-2xl font-bold text-blue-600">82</div>
          <div className="text-sm text-gray-600">Avg Health Score</div>
          <div className="text-xs text-gray-500">/100</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Delivery Metrics Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg Sprint Velocity</span>
              <span className="font-bold text-blue-600">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Milestone Achievement</span>
              <span className="font-bold text-green-600">87%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Budget Compliance</span>
              <span className="font-bold text-gray-900">12%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Avg Risk Closure Time</span>
              <span className="font-bold text-orange-600">5.2 days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Open High-API Projects</span>
              <span className="font-bold text-red-600">14</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">⚗️ Engineering & QA Metrics</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Development Metrics</span>
                <span className="text-sm font-medium">42h</span>
              </div>
              <div className="text-xs text-green-600">Daily</div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Code Coverage</span>
                <span className="text-sm font-medium">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "94%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">QA Metrics</span>
                <span className="text-sm font-medium">8.7</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "87%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Test Coverage</span>
                <span className="text-sm font-medium">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Performance Score</span>
              <span className="font-bold text-green-600">2.1 req/sec</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">👥 Team & Resource Overview</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">48</div>
              <div className="text-sm text-gray-600">Total Team Members</div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">New Hires</span>
              <span className="font-bold text-green-600">15%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Retention Rate</span>
              <span className="font-bold text-green-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-600">New Mobile App</span>
                <span className="text-green-600">Ramp Up</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-600">Legacy Migration</span>
                <span className="text-orange-600">Being Closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Key Role Gaps / Challenges</span>
                <span className="text-red-600">HIGH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-600">DevOps Engineer</span>
                <span className="text-orange-600">Medium</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-600">Senior React Developer</span>
                <span className="text-red-600">HIGH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">⚠️ Escalation & Exception View</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-3">
              <div className="text-sm font-medium">API Performance Issues</div>
              <div className="text-xs text-gray-600">Customer: TechCorp Industries - Alex Rodriguez - 6/1/2024 - In Progress</div>
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              <div className="text-sm font-medium">Budget Overrun Discussion</div>
              <div className="text-xs text-gray-600">Customer: InnovateCorp - Sarah Johnson - 5/28/2024 - Resolved</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-3">
              <div className="text-sm font-medium">Resource Allocation Conflict</div>
              <div className="text-xs text-gray-600">Customer: GlobalTech - Mike Chen - 6/3/2024 - Open</div>
            </div>
            <div className="mt-4">
              <Link 
                to="/escalations" 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Manage Escalations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Health Overview Section */}
      <div className="bg-white rounded-lg shadow-sm border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-gray-900">Project Health Overview</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Project Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Health Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Current Stage</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">On-Time %</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">End Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Risk Level</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">DM/PO</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Project Alpha</td>
                  <td className="py-3 px-4">TechCorp Industries</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-green">Green</span>
                  </td>
                  <td className="py-3 px-4">Development</td>
                  <td className="py-3 px-4">92%</td>
                  <td className="py-3 px-4">6/30/2024</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-green">Low</span>
                  </td>
                  <td className="py-3 px-4">Sarah Johnson</td>
                  <td className="py-3 px-4">
                    <Link to="/project-details/1" className="text-blue-600 hover:text-blue-800">View Details</Link>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Beta Platform</td>
                  <td className="py-3 px-4">InnovateCorp</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-yellow">Amber</span>
                  </td>
                  <td className="py-3 px-4">UAT</td>
                  <td className="py-3 px-4">78%</td>
                  <td className="py-3 px-4">5/15/2024</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-yellow">Medium</span>
                  </td>
                  <td className="py-3 px-4">Mike Chen</td>
                  <td className="py-3 px-4">
                    <Link to="/project-details/2" className="text-blue-600 hover:text-blue-800">View Details</Link>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Customer Portal</td>
                  <td className="py-3 px-4">GlobalTech</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-green">Green</span>
                  </td>
                  <td className="py-3 px-4">Testing</td>
                  <td className="py-3 px-4">95%</td>
                  <td className="py-3 px-4">7/20/2024</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-green">Low</span>
                  </td>
                  <td className="py-3 px-4">Alex Rodriguez</td>
                  <td className="py-3 px-4">
                    <Link to="/project-details/3" className="text-blue-600 hover:text-blue-800">View Details</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
