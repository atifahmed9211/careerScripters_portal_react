import { useLocation, Outlet } from "react-router-dom";
import { useState } from "react";
function LeaveLayout() {
    const [location,setLocation] = useState(useLocation());
    let role = location.state.role;
    return (
        <>
            {
                role === "user" &&
                <div className="col-sm-12 col-xl-12 text-end">
                    <div className="bg-light rounded h-100 p-4">
                        <a className="btn btn-primary">Apply Leave</a>
                    </div >
                </div >
            }
            <Outlet />
        </>
    )
}
export default LeaveLayout;