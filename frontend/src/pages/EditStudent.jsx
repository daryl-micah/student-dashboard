import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const EditStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    class: "",
    section: "",
    dob: "",
    admissionDate: "",
    gender: "",
    status: "",
  });

  const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  const statusOptions = [
    { label: "Paid", value: "Paid" },
    { label: "Non-Paid", value: "Non-Paid" },
  ];

  const handleCancel = () => {
    setFormData({
      name: "",
      rollNumber: "",
      class: "",
      section: "",
      dob: "",
      admissionDate: "",
      gender: "",
      status: null,
    });
  };

  const handleSelectChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put("http://localhost:8001/api/student/updateStudent", {
        rollNumber: formData.rollNumber,
        student: formData,
      });
      toast.success("Student record updated successfully");

      setFormData({
        name: "",
        rollNumber: "",
        class: "",
        section: "",
        dob: "",
        admissionDate: "",
        gender: null,
        status: null,
      });
    } catch (error) {
      toast.error("Student Not Found");
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-[80%] min-h-screen flex flex-col items-center justify-center">
      <Card className="w-[60%] my-10">
        <CardHeader>
          <CardTitle>Edit Student Record</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleOnSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Name of Student"
                  onChange={handleOnChange}
                  value={formData.name}
                  name="name"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="rollNumber">Roll Number</Label>
                <Input
                  id="rollNumber"
                  placeholder="Roll Number of Student"
                  onChange={handleOnChange}
                  value={formData.rollNumber}
                  name="rollNumber"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="class">Class</Label>
                <Input
                  id="class"
                  placeholder="Class of student"
                  type="text"
                  onChange={handleOnChange}
                  value={formData.class}
                  name="class"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="section">Section</Label>
                <Input
                  id="section"
                  placeholder="Section of student"
                  onChange={handleOnChange}
                  value={formData.section}
                  name="section"
                  required
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="dob">Date Of Birth</Label>
                <Input
                  id="dob"
                  type="date"
                  onChange={handleOnChange}
                  value={formData.dob}
                  name="dob"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="admissionDate">Admission Date</Label>
                <Input
                  id="admissionDate"
                  type="date"
                  onChange={handleOnChange}
                  value={formData.admissionDate}
                  name="admissionDate"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  name="gender"
                  onValueChange={(value) => handleSelectChange("gender", value)}
                  value={formData.gender}
                >
                  <SelectTrigger id="gender">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {genderOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="status">Fee Status</Label>
                <Select
                  name="status"
                  onValueChange={(value) => handleSelectChange("status", value)}
                  value={formData.status}
                  required={true}
                >
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {statusOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EditStudent;
