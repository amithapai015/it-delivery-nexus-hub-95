import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface CreateEscalationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateEscalationDialog = ({ open, onOpenChange }: CreateEscalationDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    customer: "",
    project: "",
    owner: "",
    status: "Open",
    dateRaised: new Date().toISOString().split('T')[0],
    resolutionETA: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    toast({
      title: "Escalation Created",
      description: "The new escalation has been created successfully.",
    });
    onOpenChange(false);
    setFormData({
      title: "",
      priority: "Medium",
      customer: "",
      project: "",
      owner: "",
      status: "Open",
      dateRaised: new Date().toISOString().split('T')[0],
      resolutionETA: "",
      description: ""
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            ⚠️ Create New Escalation
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Escalation Title *</Label>
              <Input
                id="title"
                placeholder="Brief description of the issue"
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
              <Select value={formData.customer} onValueChange={(value) => handleInputChange("customer", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select customer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TechCorp Industries">TechCorp Industries</SelectItem>
                  <SelectItem value="InnovateCorp">InnovateCorp</SelectItem>
                  <SelectItem value="GlobalTech">GlobalTech</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project">Associated Project *</Label>
              <Select value={formData.project} onValueChange={(value) => handleInputChange("project", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Project Alpha">Project Alpha</SelectItem>
                  <SelectItem value="Beta Platform">Beta Platform</SelectItem>
                  <SelectItem value="Customer Portal">Customer Portal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="owner">Escalation Owner *</Label>
              <Select value={formData.owner} onValueChange={(value) => handleInputChange("owner", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select owner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Alex Rodriguez">Alex Rodriguez</SelectItem>
                  <SelectItem value="Sarah Johnson">Sarah Johnson</SelectItem>
                  <SelectItem value="Mike Chen">Mike Chen</SelectItem>
                </SelectContent>
              </Select>
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

            <div className="space-y-2">
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
              placeholder="Detailed description of the escalation"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
        </div>

        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-primary text-primary-foreground">
            Create Escalation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};