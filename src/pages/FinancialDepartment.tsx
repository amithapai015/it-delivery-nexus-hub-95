
import { KPICard } from "@/components/dashboard/KPICard";
import { DollarSign, TrendingUp, TrendingDown, CreditCard } from "lucide-react";

const FinancialDepartment = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Department</h1>
        <p className="text-gray-600">Financial overview and project cost management</p>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value="$2.4M"
          trend={{ value: "+12.5% from last month", isPositive: true }}
          icon={DollarSign}
          iconColor="text-green-500"
        />
        <KPICard
          title="Project Costs"
          value="$1.8M"
          trend={{ value: "+5.2% from last month", isPositive: false }}
          icon={TrendingUp}
          iconColor="text-blue-500"
        />
        <KPICard
          title="Profit Margin"
          value="25%"
          trend={{ value: "+2.1% improvement", isPositive: true }}
          icon={TrendingUp}
          iconColor="text-purple-500"
        />
        <KPICard
          title="Outstanding Invoices"
          value="$480K"
          icon={CreditCard}
          iconColor="text-orange-500"
        />
      </div>

      {/* Financial Summary */}
      <div className="bg-white rounded-lg shadow-sm border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-gray-900">Project Financial Summary</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Project</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Budget Allocated</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Spent</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Remaining</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Burn Rate</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Project Alpha</td>
                  <td className="py-3 px-4">$500,000</td>
                  <td className="py-3 px-4">$325,000</td>
                  <td className="py-3 px-4">$175,000</td>
                  <td className="py-3 px-4">$45K/month</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-green">On Budget</span>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Beta Platform</td>
                  <td className="py-3 px-4">$750,000</td>
                  <td className="py-3 px-4">$620,000</td>
                  <td className="py-3 px-4">$130,000</td>
                  <td className="py-3 px-4">$62K/month</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-yellow">Over Budget</span>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Customer Portal</td>
                  <td className="py-3 px-4">$300,000</td>
                  <td className="py-3 px-4">$245,000</td>
                  <td className="py-3 px-4">$55,000</td>
                  <td className="py-3 px-4">$35K/month</td>
                  <td className="py-3 px-4">
                    <span className="status-badge status-green">On Budget</span>
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

export default FinancialDepartment;
