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
        <CardTitle>Resource Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Key Metrics - Horizontal Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-primary">{totalEngineers}</div>
            <div className="text-xs text-muted-foreground">Total Engineers</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">{benchPercentage}%</div>
            <div className="text-xs text-muted-foreground">Bench %</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{allocationPercentage}%</div>
            <div className="text-xs text-muted-foreground">Allocation %</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-xl font-bold text-primary">{roleDistribution.length}</div>
            <div className="text-xs text-muted-foreground">Role Types</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-xl font-bold text-primary">{experienceDistribution.length}</div>
            <div className="text-xs text-muted-foreground">Exp. Levels</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{billableRatio.billablePercentage}%</div>
            <div className="text-xs text-muted-foreground">Billable</div>
          </div>
        </div>

        {/* Role Distribution - Compact */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Role Distribution</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {roleDistribution.map((role) => (
              <div key={role.role} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm font-medium">{role.role}</span>
                <div className="text-right">
                  <div className="text-sm font-bold">{role.count}</div>
                  <div className="text-xs text-muted-foreground">{role.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Distribution - Compact */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Experience Distribution</h4>
          <div className="grid grid-cols-3 gap-3">
            {experienceDistribution.map((exp) => (
              <div key={exp.level} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-sm font-medium">{exp.level}</span>
                <div className="text-right">
                  <div className="text-sm font-bold">{exp.count}</div>
                  <div className="text-xs text-muted-foreground">{exp.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};