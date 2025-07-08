import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

interface Escalation {
  id: string;
  title: string;
  client: string;
  engineer: string;
  date: string;
  status: string;
  priority: string;
  priorityColor: string;
}

interface EscalationCardProps {
  escalations: Escalation[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const EscalationCard = ({ escalations, onEdit, onDelete }: EscalationCardProps) => {
  const getPriorityBorderColor = (color: string) => {
    switch (color) {
      case 'red': return 'border-red-500';
      case 'green': return 'border-green-500';
      case 'orange': return 'border-orange-500';
      default: return 'border-gray-500';
    }
  };

  const getPriorityBadgeColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-green-100 text-green-800 border-green-200';
      case 'Critical': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2">
          ⚠️ Manage Escalations
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded-full">
            3 Total
          </span>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
            Create
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {escalations.map((escalation) => (
          <div 
            key={escalation.id}
            className={`border-l-4 ${getPriorityBorderColor(escalation.priorityColor)} p-4 bg-gray-50 rounded-r-lg`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-sm font-medium text-gray-900">{escalation.title}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getPriorityBadgeColor(escalation.priority)}`}>
                    {escalation.priority} Priority
                  </span>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>Client: {escalation.client}</div>
                  <div>Engineer: {escalation.engineer}</div>
                  <div className="flex items-center gap-4">
                    <span>ETA {escalation.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onEdit(escalation.id)}
                  className="h-8 w-8 p-0 hover:bg-blue-100 hover:text-blue-600"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDelete(escalation.id)}
                  className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="pt-4">
          <Link to="/escalations">
            <Button className="w-full">
              Manage Escalations
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};