
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectAllocation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    selectedProject: "",
    selectedResource: "",
    allocationStartDate: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Resource Allocated Successfully",
      description: "Resource has been allocated to the selected project.",
    });
    console.log("Allocation form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSmartAllocation = () => {
    toast({
      title: "Smart Allocation Initiated",
      description: "Auto-matching resources based on skills and availability...",
    });
    // In a real application, this would trigger ML-based matching
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
        <h1 className="text-3xl font-bold text-gray-900">Project Allocation</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Manual Allocation</CardTitle>
            <CardDescription>Manually assign resources to projects</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="selectedProject">Select Project</Label>
                <Select onValueChange={(value) => handleInputChange("selectedProject", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="project-alpha">Project Alpha - TechCorp Industries</SelectItem>
                    <SelectItem value="beta-platform">Beta Platform - InnovateCorp</SelectItem>
                    <SelectItem value="customer-portal">Customer Portal - GlobalTech</SelectItem>
                    <SelectItem value="data-migration">Data Migration - MegaCorp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="selectedResource">Select Resource</Label>
                <Select onValueChange={(value) => handleInputChange("selectedResource", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a resource" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="john-doe">John Doe - React Developer (Available)</SelectItem>
                    <SelectItem value="jane-smith">Jane Smith - Python Developer (Available)</SelectItem>
                    <SelectItem value="bob-wilson">Bob Wilson - Full Stack Developer (Available)</SelectItem>
                    <SelectItem value="alice-brown">Alice Brown - QA Engineer (Available)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="allocationStartDate">Allocation Start Date</Label>
                <Input
                  id="allocationStartDate"
                  type="date"
                  value={formData.allocationStartDate}
                  onChange={(e) => handleInputChange("allocationStartDate", e.target.value)}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="px-8">
                  Allocate Resource
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              Smart Resource Allocation
            </CardTitle>
            <CardDescription>AI-powered resource matching based on skills and availability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">How Smart Allocation Works:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Analyzes project requirements and required skills</li>
                <li>• Matches available resources with relevant expertise</li>
                <li>• Considers current workload and availability</li>
                <li>• Suggests optimal resource allocation</li>
              </ul>
            </div>
            
            <Button onClick={handleSmartAllocation} className="w-full" variant="outline">
              <Sparkles className="h-4 w-4 mr-2" />
              Run Smart Allocation
            </Button>

            <div className="mt-6 space-y-3">
              <h4 className="font-medium">Recommended Allocations:</h4>
              <div className="space-y-2">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Project Alpha</p>
                      <p className="text-sm text-gray-600">Recommended: John Doe (React - 95% match)</p>
                    </div>
                    <Button size="sm" variant="outline">Apply</Button>
                  </div>
                </div>
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Beta Platform</p>
                      <p className="text-sm text-gray-600">Recommended: Jane Smith (Python - 88% match)</p>
                    </div>
                    <Button size="sm" variant="outline">Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectAllocation;
