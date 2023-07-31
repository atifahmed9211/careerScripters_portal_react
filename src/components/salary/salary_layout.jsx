import { Outlet } from "react-router-dom";
function SalaryLayout() {
    return (
        <>
            <div class="col-sm-12 col-xl-12">
                <div class="bg-light rounded h-100 p-4">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}
export default SalaryLayout;