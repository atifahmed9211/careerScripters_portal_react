import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./manager_dashboard";
import EmployeeLayout from "../employee/employee_layout";
import EmployeeList from "../employee/employee_list";
import OrderLayout from "../order/order_layout";
import OrderList from "../order/order_list";
import Attendance from "../attendance/attendance";
import LeaveList from "../leaves/leaves_list";
import AdminLayout from './manager_layout';
import SalaryLayout from "../salary/salary_layout";
import SalaryList from "../salary/salary_list";
import SalaryDetail from "../salary/salary_detail";
import UpdateSalary from "../salary/update_salary";
import DailyExpense from "../dailyExpense/daily_expense";

function ManagerRoutes() {

  return (
    <>
      <Routes>
        <Route path="manager" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="user" element={<EmployeeLayout />} >
            <Route index element={<EmployeeList />} />
          </Route>
          <Route path="order" element={<OrderLayout />}>
            <Route index element={<OrderList />} />
          </Route>
          <Route path="attendance" element={<Attendance />} />
          <Route path="leaves" element={<LeaveList />} />
          <Route path="salary" element={<SalaryLayout />}>
            <Route index element={<SalaryList />} />
            <Route path="salary_detail" element={<SalaryDetail />} />
            <Route path="update_salary" element={<UpdateSalary />} />
          </Route>
          <Route path="daily_expense" element={<DailyExpense />} />
        </Route>
      </Routes >
    </>
  );
}

export default ManagerRoutes;