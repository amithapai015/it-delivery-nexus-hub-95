
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AddResource = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // HR Fields
    employeeId: "",
    name: "",
    email: "",
    contactNumber: "",
    designation: "",
    department: "",
    reportingManager: "",
    location: "",
    workMode: "",
    joiningDate: "",
    workExperience: "",
    zapcomExperience: "",
    nationality: "",
    workAuthorization: "",
    performanceScore: "",
    monthlySalary: "",
    primarySkill: "",
    secondarySkills: "",
    
    // Resource Manager Fields
    certifications: "",
    domainExpertise: "",
    currentProject: "",
    clientName: "",
    projectStartDate: "",
    projectEndDate: "",
    billabilityStatus: "",
    projectManager: "",
    projectUtilization: "",
    expectedRollOff: "",
    benchStatus: "",
    benchStartDate: "",
    upcomingAllocation: "",
    trainingPlan: "",
    trainingCompletionDate: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Resource Added Successfully",
      description: "New resource has been added to the system.",
    });
    console.log("Form submitted:", formData);
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
        <h1 className="text-3xl font-bold text-gray-900">Add New Resource</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Tabs defaultValue="hr" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="hr">HR Information</TabsTrigger>
            <TabsTrigger value="rm">Resource Manager Information</TabsTrigger>
          </TabsList>

          <TabsContent value="hr" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>HR Fields</CardTitle>
                <CardDescription>Basic employee information managed by HR</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="employeeId">Employee ID *</Label>
                    <Input
                      id="employeeId"
                      value={formData.employeeId}
                      onChange={(e) => handleInputChange("employeeId", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="contactNumber">Contact Number</Label>
                    <Input
                      id="contactNumber"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="designation">Designation</Label>
                    <Select onValueChange={(value) => handleInputChange("designation", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select designation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="software-engineer">Software Engineer</SelectItem>
                        <SelectItem value="senior-software-engineer">Senior Software Engineer</SelectItem>
                        <SelectItem value="tech-lead">Tech Lead</SelectItem>
                        <SelectItem value="project-manager">Project Manager</SelectItem>
                        <SelectItem value="business-analyst">Business Analyst</SelectItem>
                        <SelectItem value="qa-engineer">QA Engineer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select onValueChange={(value) => handleInputChange("department", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="qa">Quality Assurance</SelectItem>
                        <SelectItem value="project-management">Project Management</SelectItem>
                        <SelectItem value="business-analysis">Business Analysis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="reportingManager">Reporting Manager</Label>
                    <Input
                      id="reportingManager"
                      value={formData.reportingManager}
                      onChange={(e) => handleInputChange("reportingManager", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Select onValueChange={(value) => handleInputChange("location", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="workMode">Work Mode</Label>
                    <Select onValueChange={(value) => handleInputChange("workMode", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="joiningDate">Joining Date</Label>
                    <Input
                      id="joiningDate"
                      type="date"
                      value={formData.joiningDate}
                      onChange={(e) => handleInputChange("joiningDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="workExperience">Work Experience (Years)</Label>
                    <Input
                      id="workExperience"
                      type="number"
                      value={formData.workExperience}
                      onChange={(e) => handleInputChange("workExperience", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zapcomExperience">ZapCom Experience (Years)</Label>
                    <Input
                      id="zapcomExperience"
                      type="number"
                      value={formData.zapcomExperience}
                      onChange={(e) => handleInputChange("zapcomExperience", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input
                      id="nationality"
                      value={formData.nationality}
                      onChange={(e) => handleInputChange("nationality", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="workAuthorization">Work Authorization</Label>
                    <Select onValueChange={(value) => handleInputChange("workAuthorization", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work authorization" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="citizen">Citizen</SelectItem>
                        <SelectItem value="h1b">H1B</SelectItem>
                        <SelectItem value="l1">L1</SelectItem>
                        <SelectItem value="opt">OPT</SelectItem>
                        <SelectItem value="green-card">Green Card</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="performanceScore">Last Performance Review Score</Label>
                    <Input
                      id="performanceScore"
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      value={formData.performanceScore}
                      onChange={(e) => handleInputChange("performanceScore", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthlySalary">Monthly Salary</Label>
                    <Input
                      id="monthlySalary"
                      type="number"
                      value={formData.monthlySalary}
                      onChange={(e) => handleInputChange("monthlySalary", e.target.value)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="primarySkill">Primary Skill</Label>
                    <Select onValueChange={(value) => handleInputChange("primarySkill", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select primary skill" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="angular">Angular</SelectItem>
                        <SelectItem value="vue">Vue.js</SelectItem>
                        <SelectItem value="nodejs">Node.js</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="dotnet">.NET</SelectItem>
                        <SelectItem value="php">PHP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="secondarySkills">Secondary Skills</Label>
                    <Textarea
                      id="secondarySkills"
                      placeholder="Enter secondary skills separated by commas"
                      value={formData.secondarySkills}
                      onChange={(e) => handleInputChange("secondarySkills", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rm" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resource Manager / DM Fields</CardTitle>
                <CardDescription>Project and allocation information managed by Resource Manager</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="certifications">Certifications</Label>
                    <Textarea
                      id="certifications"
                      placeholder="Enter certifications"
                      value={formData.certifications}
                      onChange={(e) => handleInputChange("certifications", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="domainExpertise">Domain Expertise</Label>
                    <Select onValueChange={(value) => handleInputChange("domainExpertise", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select domain" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="currentProject">Current Project Name</Label>
                    <Input
                      id="currentProject"
                      value={formData.currentProject}
                      onChange={(e) => handleInputChange("currentProject", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="clientName">Client Name</Label>
                    <Input
                      id="clientName"
                      value={formData.clientName}
                      onChange={(e) => handleInputChange("clientName", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectStartDate">Project Start Date</Label>
                    <Input
                      id="projectStartDate"
                      type="date"
                      value={formData.projectStartDate}
                      onChange={(e) => handleInputChange("projectStartDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectEndDate">Project End Date</Label>
                    <Input
                      id="projectEndDate"
                      type="date"
                      value={formData.projectEndDate}
                      onChange={(e) => handleInputChange("projectEndDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="billabilityStatus">Billability Status</Label>
                    <Select onValueChange={(value) => handleInputChange("billabilityStatus", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="billable">Billable</SelectItem>
                        <SelectItem value="non-billable">Non-Billable</SelectItem>
                        <SelectItem value="internal">Internal</SelectItem>
                        <SelectItem value="bench">Bench</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="projectManager">Project Manager Name</Label>
                    <Input
                      id="projectManager"
                      value={formData.projectManager}
                      onChange={(e) => handleInputChange("projectManager", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="projectUtilization">Project Utilization (%)</Label>
                    <Input
                      id="projectUtilization"
                      type="number"
                      min="0"
                      max="100"
                      value={formData.projectUtilization}
                      onChange={(e) => handleInputChange("projectUtilization", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedRollOff">Expected Roll-Off Date</Label>
                    <Input
                      id="expectedRollOff"
                      type="date"
                      value={formData.expectedRollOff}
                      onChange={(e) => handleInputChange("expectedRollOff", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="benchStatus">Bench Status</Label>
                    <Select onValueChange={(value) => handleInputChange("benchStatus", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bench status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="bench">Bench</SelectItem>
                        <SelectItem value="shadow">Shadow</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="benchStartDate">Bench Start Date</Label>
                    <Input
                      id="benchStartDate"
                      type="date"
                      value={formData.benchStartDate}
                      onChange={(e) => handleInputChange("benchStartDate", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="upcomingAllocation">Upcoming Project Allocation</Label>
                    <Select onValueChange={(value) => handleInputChange("upcomingAllocation", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="trainingPlan">Assigned Training Plan</Label>
                    <Select onValueChange={(value) => handleInputChange("trainingPlan", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="trainingCompletionDate">Training Completion Date</Label>
                    <Input
                      id="trainingCompletionDate"
                      type="date"
                      value={formData.trainingCompletionDate}
                      onChange={(e) => handleInputChange("trainingCompletionDate", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex gap-4">
          <Button type="submit" className="px-8">
            Add Resource
          </Button>
          <Link to="/resource-management">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddResource;
