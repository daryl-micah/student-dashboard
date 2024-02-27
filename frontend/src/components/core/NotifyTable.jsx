<<<<<<< HEAD
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Input } from "../ui/input";

const NotifyTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8001/api/student/notify"
      );
      setData(response.data.students);
      setFilteredData(response.data.students);
    } catch (error) {
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
      selector: (row) => (row.isFeePaid === true ? "Paid" : "Not Paid"),
    },
  ];

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className="w-full py-7">
            <Input
              className="text-black w-[30%]"
              type="text"
              placeholder="Search Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        }
        subHeaderAlign="left"
      />
    </div>
  );
};

export default NotifyTable;
=======
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Input } from "../ui/input";

const NotifyTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8001/api/student/notify"
      );
      setData(response.data.students);
      setFilteredData(response.data.students);
    } catch (error) {
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
      selector: (row) => (row.isFeePaid === true ? "Paid" : "Not Paid"),
    },
  ];

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <div className="w-full py-7">
            <Input
              className="text-black w-[30%]"
              type="text"
              placeholder="Search Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        }
        subHeaderAlign="left"
      />
    </div>
  );
};

export default NotifyTable;
>>>>>>> 0444ca3a8af56e4f15e7035249290c244e2f12e0
