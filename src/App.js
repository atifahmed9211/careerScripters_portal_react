import './App.css';
import AdminRoutes from './components/admin/admin_routes';
import HrRoutes from './components/hr/hr_routes';
import ManagerRoutes from './components/manager/manager_routes';
import UserRoutes from './components/user/user_routes';
import AuthRoutes from './components/auth/auth_routes';

function App() {

  return (
    <>
      <AuthRoutes />
      <AdminRoutes />
      <HrRoutes />
      <ManagerRoutes />
      <UserRoutes />
    </>
  );
}

export default App;