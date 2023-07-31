import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./admin_dashboard";
import EmployeeLayout from "../employee/employee_layout";
import EmployeeList from "../employee/employee_list";
import AddBasicInfo from "../employee/add_basic_info";
import AddEmployee from "../employee/add_employee";
import EmployeeDetail from "../employee/employee_detail";
import OrderList from "../order/order_list";
import Attendance from "../attendance/attendance";
import LeaveLayout from "../leaves/leaves_layout";
import LeaveList from "../leaves/leaves_list";
import LeaveDetail from "../leaves/leaves_detail";
import AdminLayout from './admin_layout';
import SalaryLayout from "../salary/salary_layout";
import SalaryList from "../salary/salary_list";
import SalaryDetail from "../salary/salary_detail";
import UpdateSalary from "../salary/update_salary";
import DailyExpense from "../dailyExpense/daily_expense";
import UpdateEmployee from "../employee/update_employee";
import UpdateBasicInfo from "../employee/update_basic_info";
import OrderLayout from "../order/order_layout";
import AddOrder from "../order/add_order";
import OrderDetail from "../order/order_detail";
import UpdateOrder from "../order/update_order";
import AssignOrder from "../order/assign_order";
import OrderSubmit from "../order/order_submit";

function AdminRoutes() {

  return (
    <>
      <Routes>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="user" element={<EmployeeLayout />}>
            <Route index element={<EmployeeList />} />
            <Route path="add_basic_info" element={<AddBasicInfo />} />
            <Route path="add_employee" element={<AddEmployee />} />
            <Route path=":employee_id" element={<EmployeeDetail />} />
            <Route path="update_employee" element={<UpdateEmployee />} />
            <Route path="update_basic_info" element={<UpdateBasicInfo />} />
          </Route>
          <Route path="order" element={<OrderLayout />}>
            <Route index element={<OrderList />} />
            <Route path="add_order" element={<AddOrder />} />
            <Route path=":order_id" element={<OrderDetail />} />
            <Route path="update_order" element={<UpdateOrder />} />
            <Route path="assign_order" element={<AssignOrder />} />
            <Route path="order_submit" element={<OrderSubmit />} />
          </Route>
          <Route path="attendance" element={<Attendance />} />
          <Route path="leaves" element={<LeaveLayout />} >
            <Route index element={<LeaveList />} />
            <Route path="leave_detail" element={<LeaveDetail />} />
          </Route>
          <Route path="salary" element={<SalaryLayout />}>
            <Route index element={<SalaryList />} />
            <Route path=":salary_id" element={<SalaryDetail />} />
            <Route path="update_salary" element={<UpdateSalary />} />
          </Route>
          <Route path="daily_expense" element={<DailyExpense />} />
        </Route>
      </Routes>
    </>
  );
}

export default AdminRoutes;