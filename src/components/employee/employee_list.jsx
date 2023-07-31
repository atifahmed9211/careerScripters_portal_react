import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye,faPencil,faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const userData = [
    {
        id: 1,
        employeeCode: "E123",
        name: "Atif Ahmed",
        father_name: "Fayyaz Ahmed",
        email: "atif@gmail.com",
        designation: "IT",
        gender: "Male",
        joining_date: "25 jan 2023",
        basic_salary: "35000",
        address: "H # A, St # B, Lahore",
        contact: "03350401095",
        highest_education_degree: "BSCS",
        cnic_no: "35202-12345678-9",
        employee_status: "present",
        emergency_contact_no_1: "03351411095",
        emergency_contact_no_2: "03001401095",
        DOB: "15-Nov-1995",
        bank_detail: {
            bank_name: "Meezan",
            account_title: "Atif Ahmed",
            account_no: "123456789"
        }
    },
    {
        id: 2,
        employeeCode: "E456",
        name: "Adil",
        email: "adil@gmail.com",
        designation: "IT",
        gender: "Male",
        joining_date: "25 jan 2023",
        basic_salary: "35000",
        address: "H # A, St # B, Lahore",
        contact: "03350401095",
        highest_education_degree: "BSCS",
        cnic_no: "35202-12345678-9",
        employee_status: "present",
        emergency_contact_no_1: "03351411095",
        emergency_contact_no_2: "03001401095",
        DOB: "15-Nov-1995",
        bank_detail: {
            bank_name: "Faisal",
            account_title: "Adil",
            account_no: "123456789"
        }
    },
    {
        id: 3,
        employeeCode: "E789",
        name: "Arham",
        email: "arham@gmail.com",
        designation: "IT",
        gender: "Male",
        joining_date: "25 jan 2023",
        basic_salary: "35000",
        address: "H # A, St # B, Lahore",
        contact: "03350401095",
        highest_education_degree: "BSCS",
        cnic_no: "35202-12345678-9",
        employee_status: "present",
        emergency_contact_no_1: "03351411095",
        emergency_contact_no_2: "03001401095",
        DOB: "15-Nov-1995",
        bank_detail: {
            bank_name: "Alfalah",
            account_title: "Arham",
            account_no: "123456789"
        }
    },
    {
        id: 4,
        employeeCode: "E101",
        name: "Abdullah",
        email: "abdullah@gmail.com",
        designation: "IT",
        gender: "Male",
        joining_date: "25 jan 2023",
        basic_salary: "35000",
        address: "H # A, St # B, Lahore",
        contact: "03350401095",
        highest_education_degree: "BSCS",
        cnic_no: "35202-12345678-9",
        employee_status: "present",
        emergency_contact_no_1: "03351411095",
        emergency_contact_no_2: "03001401095",
        DOB: "15-Nov-1995",
        bank_detail: {
            bank_name: "Askari",
            account_title: "Abdullah",
            account_no: "123456789"
        }
    },
    {
        id: 5,
        employeeCode: "E111",
        name: "Rehan",
        email: "rehan@gmail.com",
        designation: "IT",
        gender: "Male",
        joining_date: "25 jan 2023",
        basic_salary: "35000",
        address: "H # A, St # B, Lahore",
        contact: "03350401095",
        highest_education_degree: "BSCS",
        cnic_no: "35202-12345678-9",
        employee_status: "present",
        emergency_contact_no_1: "03351411095",
        emergency_contact_no_2: "03001401095",
        DOB: "15-Nov-1995",
        bank_detail: {
            bank_name: "Habib",
            account_title: "Rehan",
            account_no: "123456789"
        }
    },
    {
        id: 6,
        employeeCode: "E121",
        name: "Waleed",
        email: "waleed@gmail.com",
        designation: "IT",
        gender: "Male",
        joining_date: "25 jan 2023",
        basic_salary: "35000",
        address: "H # A, St # B, Lahore",
        contact: "03350401095",
        highest_education_degree: "BSCS",
        cnic_no: "35202-12345678-9",
        employee_status: "present",
        emergency_contact_no_1: "03351411095",
        emergency_contact_no_2: "03001401095",
        DOB: "15-Nov-1995",
        bank_detail: {
            bank_name: "Allied",
            account_title: "Waleed",
            account_no: "123456789"
        }
    },
    {
        id: 7,
        employeeCode: "E314",
        name: "sadaqat",
        email: "sadaqat@gmail.com",
        designation: "IT",
        gender: "Male",
        joining_date: "25 jan 2023",
        basic_salary: "35000",
        address: "H # A, St # B, Lahore",
        contact: "03350401095",
        highest_education_degree: "BSCS",
        cnic_no: "35202-12345678-9",
        employee_status: "present",
        emergency_contact_no_1: "03351411095",
        emergency_contact_no_2: "03001401095",
        DOB: "15-Nov-1995",
        bank_detail: {
            bank_name: "JS",
            account_title: "sadaqat",
            account_no: "123456789"
        }
    },
]

function EmployeeList() {
    const location = useLocation();
    const [role,setRole]=useState(location.state.role)
    function getSelectedUser(id) {
        return userData.filter((user) => user.id === id);
    }
    return (
        <>
            <div class="col-sm-12 col-xl-12">
                <div class="bg-light rounded h-100 p-4">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Employee Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map((user, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.employeeCode}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <a class="btn btn-primary me-1">
                                                <Link to={"" + user.id} className="text-decoration-none link-light" state={{ user: getSelectedUser(user.id) }}>
                                                    <FontAwesomeIcon icon={faEye} />
                                                </Link>
                                            </a>
                                            {
                                                (role === "admin" || role === "manager") &&
                                                < a class="btn btn-primary waves-effect waves-light me-1">
                                                    <i class="bx bx-cart me-2"></i><Link to="update_employee" className="text-decoration-none link-light"><FontAwesomeIcon icon={faPencil}/></Link>
                                                </a>
                                            }
                                            {
                                                role === "hr" &&
                                                <a class="btn btn-primary waves-effect waves-light me-1">
                                                    <i class="bx bx-cart me-2"></i> <Link to="update_basic_info" className="text-decoration-none link-light"><FontAwesomeIcon icon={faPencil}/></Link>
                                                </a>
                                            }
                                            {
                                                (role === "admin" || role === "manager") &&
                                                <a class="btn btn-success waves-effect waves-light">
                                                    <i class="bx bx-shopping-bag me-2"></i><FontAwesomeIcon icon={faTrashCan}/>
                                                </a>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody >
                    </table >
                </div >
            </div >
        </>
    )
}
export default EmployeeList;