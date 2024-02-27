import { VscAdd } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { GrEdit } from "react-icons/gr";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-full w-[250px] flex-col bg-[#161d29] border-r border-slate-500">
      <div className=" h-full shadow-right shadow-slate-300">
        <div className="flex flex-col text-slate-400 gap-y-2 mt-16">
          <div
            className={`relative flex items-center gap-x-2 cursor-pointer p-2 ${
              location.pathname.includes("/dashboard")
                ? "bg-[#3d2a01] text-[#cfa205]"
                : ""
            }`}
            onClick={() => navigate("/dashboard")}
          >
            <span
              className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-400 ${
                location.pathname.includes("/dashboard")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            ></span>

            <CgProfile className="text-xl ml-7" />
            <h1>Dashboard</h1>
          </div>

          <div
            className={`relative flex items-center gap-x-2 cursor-pointer p-2 ${
              location.pathname.includes("/add-student")
                ? "bg-[#3d2a01] text-[#cfa205]"
                : ""
            }`}
            onClick={() => navigate("/add-student")}
          >
            <span
              className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-400 ${
                location.pathname.includes("/add-student")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            ></span>
            <VscAdd className="text-xl ml-7" />
            <h1>Add Student Record</h1>
          </div>

          <div
            className={`relative p-2 flex items-center gap-x-2 cursor-pointer ${
              location.pathname.includes("/edit-student")
                ? "bg-[#3d2a01] text-[#cfa205]"
                : ""
            }`}
            onClick={() => navigate("/edit-student")}
          >
            <span
              className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-400 ${
                location.pathname.includes("/edit-student")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            ></span>
            <GrEdit className="text-xl ml-7" />
            <h1>Edit student record</h1>
          </div>

          <div
            className={`relative p-2 flex items-center gap-x-2 cursor-pointer ${
              location.pathname.includes("/notification")
                ? "bg-[#3d2a01] text-[#cfa205]"
                : ""
            }`}
            onClick={() => navigate("/notification")}
          >
            <span
              className={`absolute left-0 top-0 h-full w-[0.15rem] bg-yellow-400 ${
                location.pathname.includes("/notification")
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            ></span>
            <IoIosNotificationsOutline className="text-xl ml-7" />
            <h1>Notification Page</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
