import Table from "@/components/core/NotifyTable";

const Notification = () => {
  return (
    <div className="w-[80%] min-h-screen flex flex-col items-center">
      <div className="my-16 w-[90%]">
        <Table />
      </div>
    </div>
  );
};

export default Notification;
