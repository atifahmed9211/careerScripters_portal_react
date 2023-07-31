import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function OrderLayout() {
    const [location,setLocation] = useState(useLocation());
    let role = location.state.role;
    return (
        <>
            {
                role==="admin" &&
                <div className="col-sm-12 col-xl-12 text-end">
                    <div className="bg-light rounded h-100 p-4">
                        <a className="btn btn-primary"><Link to="add_order" className="text-decoration-none link-light">Add New Order</Link></a>
                    </div>
                </div>
            }
            <Outlet />
        </>
    )
}
export default OrderLayout;