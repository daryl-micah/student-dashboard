<<<<<<< HEAD
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { DialogClose } from "@radix-ui/react-dialog";

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8001/api/student/getAllStudents"
      );
      setData(response.data.students);
      setFilteredData(response.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:8001/api/student/deleteStudent", {
        data: { rollNumber: rollNumber },
      });
      toast.success("Student Profile Deleted Succesfully");
    } catch (error) {
      toast.error("Student not found");
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Roll Number",
      selector: (row) => row.rollNumber,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Section",
      selector: (row) => row.section,
    },
    {
      name: "Enrollment Date",
      selector: (row) => row.admissionDate,
    },
    {
      name: "Date Of Birth",
      selector: (row) => row.dob,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Fee Status",
      selector: (row) => row.status,
      // selector: (row) => (row.status == "Paid" ? "Paid" : "Not Paid"),
    },
  ];

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const trimmedSearchTerm = search.trim();
    if (trimmedSearchTerm === "") {
      setFilteredData(data);
      return;
    }
    const result = data.filter((item) => {
      return item.name?.toLowerCase().match(trimmedSearchTerm);
    });
    setFilteredData(result);
  }, [search, data]);

  return (
    <div className="">
      {/* First Data Table */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        fixedHeaderScrollHeight="500px"
        highlightOnHover
        subHeader
        subHeaderComponent={
          <div className="w-full py-7 flex justify-between ">
            <Input
              className="text-black w-[30%]"
              type="text"
              placeholder="Search Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button>Delete Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Delete profile</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right w-[90px]">
                      Roll Number
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3"
                      onChange={(e) => setRollNumber(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" onClick={deleteHandler}>
                      Delete
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        }
      />
    </div>
  );
};

export default Table;
=======
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { DialogClose } from "@radix-ui/react-dialog";

const Table = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8001/api/student/getAllStudents"
      );
      setData(response.data.students);
      setFilteredData(response.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const deleteHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.delete("http://localhost:8001/api/student/deleteStudent", {
        data: { rollNumber: rollNumber },
      });
      toast.success("Student Profile Deleted Succesfully");
    } catch (error) {
      toast.error("Student not found");
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Roll Number",
      selector: (row) => row.rollNumber,
    },
    {
      name: "Class",
      selector: (row) => row.class,
    },
    {
      name: "Section",
      selector: (row) => row.section,
    },
    {
      name: "Enrollment Date",
      selector: (row) => row.admissionDate,
    },
    {
      name: "Date Of Birth",
      selector: (row) => row.dob,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Fee Status",
      selector: (row) => row.status,
      // selector: (row) => (row.status == "Paid" ? "Paid" : "Not Paid"),
    },
  ];

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const trimmedSearchTerm = search.trim();
    if (trimmedSearchTerm === "") {
      setFilteredData(data);
      return;
    }
    const result = data.filter((item) => {
      return item.name?.toLowerCase().match(trimmedSearchTerm);
    });
    setFilteredData(result);
  }, [search, data]);

  return (
    <div className="">
      {/* First Data Table */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        fixedHeaderScrollHeight="500px"
        highlightOnHover
        subHeader
        subHeaderComponent={
          <div className="w-full py-7 flex justify-between ">
            <Input
              className="text-black w-[30%]"
              type="text"
              placeholder="Search Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button>Delete Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Delete profile</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right w-[90px]">
                      Roll Number
                    </Label>
                    <Input
                      id="name"
                      className="col-span-3"
                      onChange={(e) => setRollNumber(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" onClick={deleteHandler}>
                      Delete
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        }
      />
    </div>
  );
};

export default Table;
>>>>>>> 0444ca3a8af56e4f15e7035249290c244e2f12e0
