import { Routes, Route } from "react-router-dom";
import HrDashboard from "./hr_dashboard";
import EmployeeLayout from "../employee/employee_layout";
import EmployeeList from "../employee/employee_list";
import Attendance from "../attendance/attendance";
import LeaveList from "../leaves/leaves_list";
import HrLayout from './hr_layout';
import Inventory from "../inventory/inventory";

function HrRoutes() {

  return (
    <>
      <Routes>
        <Route path="/hr" element={<HrLayout />}>
          <Route index element={<HrDashboard />} />
          <Route path="user" element={<EmployeeLayout />} >
            <Route index element={<EmployeeList />} />
          </Route>
          <Route path="attendance" element={<Attendance />} />
          <Route path="leaves" element={<LeaveList />} />
          <Route path="inventory" element={<Inventory />} />
        </Route>
      </Routes >
    </>
  );
}
export default HrRoutes;