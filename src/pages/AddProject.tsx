
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AddProject = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    engineeringManager: "",
    priority: "",
    startDate: "",
    expectedEndDate: "",
    projectBudget: "",
    requiredSkills: "",
    projectDescription: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Project Added Successfully",
      description: "New project has been created in the system.",
    });
    console.log("Project form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        <h1 className="text-3xl font-bold text-gray-900">Add New Project</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Information</CardTitle>
          <CardDescription>Create a new project for resource allocation</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectName">Project Name *</Label>
                <Input
                  id="projectName"
                  value={formData.projectName}
                  onChange={(e) => handleInputChange("projectName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="clientName">Client Name *</Label>
                <Input
                  id="clientName"
                  value={formData.clientName}
                  onChange={(e) => handleInputChange("clientName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="engineeringManager">Engineering Manager</Label>
                <Select onValueChange={(value) => handleInputChange("engineeringManager", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Engineering Manager" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                    <SelectItem value="mike-chen">Mike Chen</SelectItem>
                    <SelectItem value="alex-rodriguez">Alex Rodriguez</SelectItem>
                    <SelectItem value="emily-davis">Emily Davis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select onValueChange={(value) => handleInputChange("priority", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => handleInputChange("startDate", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="expectedEndDate">Expected End Date</Label>
                <Input
                  id="expectedEndDate"
                  type="date"
                  value={formData.expectedEndDate}
                  onChange={(e) => handleInputChange("expectedEndDate", e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="projectBudget">Project Budget</Label>
                <Input
                  id="projectBudget"
                  type="number"
                  placeholder="Enter budget amount"
                  value={formData.projectBudget}
                  onChange={(e) => handleInputChange("projectBudget", e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="requiredSkills">Required Skills (Multi-select)</Label>
              <Textarea
                id="requiredSkills"
                placeholder="Enter required skills separated by commas (e.g., React, Node.js, Python)"
                value={formData.requiredSkills}
                onChange={(e) => handleInputChange("requiredSkills", e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="projectDescription">Project Description</Label>
              <Textarea
                id="projectDescription"
                placeholder="Enter detailed project description"
                value={formData.projectDescription}
                onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="px-8">
                Create Project
              </Button>
              <Link to="/resource-management">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProject;
