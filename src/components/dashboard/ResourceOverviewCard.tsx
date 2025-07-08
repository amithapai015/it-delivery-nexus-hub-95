import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RoleDistribution {
  role: string;
  count: number;
  percentage: number;
}

interface ExperienceDistribution {
  level: string;
  count: number;
  percentage: number;
}

interface BillableRatio {
  billable: number;
  nonBillable: number;
  billablePercentage: number;
}

interface ResourceOverviewCardProps {
  totalEngineers: number;
  benchPercentage: number;
  allocationPercentage: number;
  roleDistribution: RoleDistribution[];
  experienceDistribution: ExperienceDistribution[];
  billableRatio: BillableRatio;
}

export const ResourceOverviewCard = ({
  totalEngineers,
  benchPercentage,
  allocationPercentage,
  roleDistribution,
  experienceDistribution,
  billableRatio
}: ResourceOverviewCardProps) => {
  const getProgressBarColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>👥 Resource Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{totalEngineers}</div>
            <div className="text-sm text-gray-600">Total Engineers</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600">{benchPercentage}%</div>
            <div className="text-sm text-gray-600">People on Bench</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{allocationPercentage}%</div>
            <div className="text-sm text-gray-600">Allocation %</div>
          </div>
        </div>

        {/* Role Distribution */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Role Distribution</h4>
          <div className="space-y-3">
            {roleDistribution.map((role) => (
              <div key={role.role} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-sm font-medium w-20">{role.role}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${role.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-sm text-gray-600">{role.count}</span>
                  <span className="text-xs text-gray-500">({role.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Distribution */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Experience Distribution</h4>
          <div className="space-y-3">
            {experienceDistribution.map((exp) => (
              <div key={exp.level} className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-sm font-medium w-20">{exp.level}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${exp.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-sm text-gray-600">{exp.count}</span>
                  <span className="text-xs text-gray-500">({exp.percentage}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Billable vs Non-Billable */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Billable vs Non-Billable Ratio</h4>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Billable Resources</span>
            <span className="text-sm font-medium">{billableRatio.billablePercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className={`h-3 rounded-full ${getProgressBarColor(billableRatio.billablePercentage)}`}
              style={{ width: `${billableRatio.billablePercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Billable: {billableRatio.billable}</span>
            <span>Non-Billable: {billableRatio.nonBillable}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};