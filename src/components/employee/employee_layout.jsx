import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function EmployeeLayout() {
    const [location,setLocation] = useState(useLocation());
    const [role,setRole] = useState(location.state.role);
    return (
        <>
            {(role === "admin" || role === "manager") &&
                <div class="col-sm-12 text-end">
                    <div class="bg-light rounded h-100 p-4">
                        <a class="btn btn-primary"><Link to="add_employee" className="text-decoration-none link-light">Add New User</Link></a>
                    </div>
                </div >
            }
            {
                role === "hr"  &&
                <div class="col-sm-12 text-end" >
                    <div class="bg-light rounded h-100 p-4">
                        <a class="btn btn-primary"><Link to="add_basic_info" className="text-decoration-none link-light">Add Basic Info</Link></a>
                    </div>
                </div >
            }
            <Outlet />
        </>
    )
}
export default EmployeeLayout;