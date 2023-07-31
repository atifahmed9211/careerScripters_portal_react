import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil } from "@fortawesome/free-solid-svg-icons";

const salaryData = [{
    id: 1,
    basic_Salary: 43000,
    bonus: 3000,
    medical_allowance: 1500,
    total: 47500,
    month: "Apr 2023",
    status: "Pending"

}, {
    id: 2,
    basic_Salary: 43000,
    bonus: 3000,
    medical_allowance: 1500,
    total: 47500,
    month: "Apr 2023",
    status: "Approved"
},
{
    id: 3,
    basic_Salary: 43000,
    bonus: 3000,
    medical_allowance: 1500,
    total: 47500,
    month: "Apr 2023",
    status: "Rejected"
}]
function SalaryList() {
    const location = useLocation();
    let role = location.state.role;
    return (
        <>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Basic Salary</th>
                        <th scope="col">Bonus</th>
                        <th scope="col">Medical Allowance</th>
                        <th scope="col">Total</th>
                        <th scope="col">Month</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        salaryData.map((salary) =>
                            <tr>
                                <th scope="row"></th>
                                <td>{salary.basic_Salary}</td>
                                <td>{salary.bonus}</td>
                                <td>{salary.medical_allowance}</td>
                                <td>{salary.total}</td>
                                <td>{salary.month}</td>
                                <td>{salary.status}</td>
                                <td>
                                    <a class="btn btn-primary me-1" routerLink="salaryDetail"><Link to={"" + salary.id} className="text-decoration-none link-light"><FontAwesomeIcon icon={faEye} /></Link></a>
                                    {
                                        (role === "admin" || role === "manager") &&
                                        <a class="btn btn-primary me-1" routerLink="updateSalary"><Link to="update_salary" className="text-decoration-none link-light"><FontAwesomeIcon icon={faPencil} /></Link></a>
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
export default SalaryList;