import { Routes, Route } from "react-router-dom";
import UserDashboard from "./user_dashboard";
import OrderLayout from "../order/order_layout";
import OrderList from "../order/order_list";
import Attendance from "../attendance/attendance";
import LeaveLayout from "../leaves/leaves_layout";
import LeaveList from "../leaves/leaves_list";
import LeaveDetail from "../leaves/leaves_detail";
import UserLayout from './user_layout';
import SalaryLayout from "../salary/salary_layout";
import SalaryList from "../salary/salary_list";
import SalaryDetail from "../salary/salary_detail";

function UserRoutes() {

  return (
    <>
      <Routes>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="order" element={<OrderLayout />}>
            <Route index element={<OrderList />} />
          </Route>
          <Route path="attendance" element={<Attendance />} />
          <Route path="leaves" element={<LeaveLayout />} >
            <Route index element={<LeaveList />} />
            <Route path="leave_detail" element={<LeaveDetail />} />
          </Route>
          <Route path="salary" element={<SalaryLayout />}>
            <Route index element={<SalaryList />} />
            <Route path="salary_detail" element={<SalaryDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default UserRoutes;