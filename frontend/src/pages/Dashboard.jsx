import Table from "@/components/core/DataTable";

const Dashboard = () => {
  return (
    <div className="w-[80%] min-h-screen flex flex-col items-center">
      <div className="my-16 w-[90%]">
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
