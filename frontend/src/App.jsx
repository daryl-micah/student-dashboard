import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import EditStudent from "./pages/EditStudent";
import AddStudent from "./pages/AddStudent";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="text-white flex gap-x-9 min-h-screen bg-[#000814]">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-student" element={<EditStudent />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </div>
  );
}

export default App;
