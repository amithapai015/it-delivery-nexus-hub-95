import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Escalations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "API Performance Issues",
    priority: "High",
    customer: "TechCorp Industries",
    projectOwner: "Alex Rodriguez",
    description: "Critical performance degradation in API response times affecting customer operations. Response times have increased by 300% over the past 48 hours, causing timeout issues for end users. Immediate investigation and resolution required.",
    status: "In Progress",
    dateRaised: "2024-06-01",
    resolutionETA: "2024-06-08",
    impactAssessment: "Customer operations severely impacted. SLA breach imminent if not resolved within 24 hours. Potential revenue loss of £50K per day. Customer satisfaction at risk.",
    actionsTaken: "Infrastructure team notified and investigating. Database performance analysis initiated. Customer informed of ongoing investigation. Backup systems activated to mitigate impact."
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    toast({
      title: "Changes Saved",
      description: "Escalation details have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Escalations</h1>
        <p className="text-gray-600">Track and manage project escalations and exceptions</p>
      </div>

      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>Escalation Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Escalation Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">Priority *</Label>
              <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Critical">Critical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customer">Customer *</Label>
              <Input
                id="customer"
                value={formData.customer}
                onChange={(e) => handleInputChange("customer", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="projectOwner">Project Owner *</Label>
              <Input
                id="projectOwner"
                value={formData.projectOwner}
                onChange={(e) => handleInputChange("projectOwner", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateRaised">Date Raised</Label>
              <Input
                id="dateRaised"
                type="date"
                value={formData.dateRaised}
                onChange={(e) => handleInputChange("dateRaised", e.target.value)}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="resolutionETA">Resolution ETA *</Label>
              <Input
                id="resolutionETA"
                type="date"
                value={formData.resolutionETA}
                onChange={(e) => handleInputChange("resolutionETA", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              rows={4}
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="impactAssessment">Impact Assessment</Label>
            <Textarea
              id="impactAssessment"
              rows={3}
              value={formData.impactAssessment}
              onChange={(e) => handleInputChange("impactAssessment", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="actionsTaken">Actions Taken</Label>
            <Textarea
              id="actionsTaken"
              rows={3}
              value={formData.actionsTaken}
              onChange={(e) => handleInputChange("actionsTaken", e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Button onClick={handleSave} className="px-8">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Escalations;