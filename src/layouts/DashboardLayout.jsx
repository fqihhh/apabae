import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

export default DashboardLayout;