import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface Escalation {
  id: string;
  title: string;
  customer: string;
  project: string;
  owner: string;
  priority: string;
  status: string;
  dateRaised: string;
  resolutionETA: string;
  description?: string;
}

interface EditEscalationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  escalation: Escalation | null;
}

export const EditEscalationDialog = ({ open, onOpenChange, escalation }: EditEscalationDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    customer: "",
    project: "",
    owner: "",
    status: "Open",
    dateRaised: "",
    resolutionETA: "",
    description: ""
  });

  useEffect(() => {
    if (escalation) {
      setFormData({
        title: escalation.title,
        priority: escalation.priority,
        customer: escalation.customer,
        project: escalation.project,
        owner: escalation.owner,
        status: escalation.status,
        dateRaised: escalation.dateRaised,
        resolutionETA: escalation.resolutionETA,
        description: escalation.description || ""
      });
    }
  }, [escalation]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    toast({
      title: "Escalation Updated",
      description: "The escalation has been updated successfully.",
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            ⚠️ Edit Escalation
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
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
              <Select value={formData.customer} onValueChange={(value) => handleInputChange("customer", value)}>
                <SelectTrigger>
                  <SelectValue />
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
                  <SelectValue />
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
                  <SelectValue />
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
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
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
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};