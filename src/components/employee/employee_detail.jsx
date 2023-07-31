import { useLocation } from "react-router-dom";
function EmployeeDetail() {
    const location = useLocation();
    const user = location.state.user[0];
    return (
        <>
            {/* Begin page */}
            <div id="layout-wrapper">

                {/* ==============================================================
                Start right Content here
                ============================================================== */}
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="text-end">
                                                    <a routerLink="../updateEmployee"
                                                        class="btn btn-primary waves-effect waves-light mt-2 me-1">
                                                        <i class="bx bx-cart me-2"></i> Update
                                                    </a>
                                                    <a class="btn btn-success waves-effect waves-light mt-2">
                                                        <i class="bx bx-shopping-bag me-2"></i>Delete
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="mt-4 mt-xl-3">
                                                    <h4 class="mt-1 mb-3">Employee Name : {user.name}</h4>
                                                    <p class="text-muted mb-4">Employee Code : {user.employeeCode}</p>
                                                    <h6 class="text-success text-uppercase">Designation : {user.designation}</h6>
                                                    <div class="row mb-3">
                                                        <div class="col-md-6">
                                                            <div>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-unlink font-size-16 align-middle text-primary me-1"></i>
                                                                    Father Name : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-shape-triangle font-size-16 align-middle text-primary me-1"></i>
                                                                    Gender : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Joining Date : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Basic Salary : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Address : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Contact : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Email : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Highest Education Degree : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    CNIC NO : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Employee Status : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Emergency Contact No.1 : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Emergency Contact No.2 : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    D.O.B : </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div>

                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.father_name}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.gender}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.joining_date}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.basic_salary}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.address}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.contact}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.email}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.highest_education_degree}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.cnic_no}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.employee_status}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.emergency_contact_no_1}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.emergency_contact_no_2}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {user.DOB}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end row */}

                                        <div class="mt-5">
                                            <h5 class="mb-3">Bank Account Detail :</h5>

                                            <div class="table-responsive">
                                                <table class="table mb-0 table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row" style={{ width: "400px" }}>Name of Bank</th>
                                                            <td>{user.bank_detail.bank_name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Account Title</th>
                                                            <td>{user.bank_detail.account_title}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Account No</th>
                                                            <td>{user.bank_detail.account_no}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* end Specifications */}

                                    </div>
                                </div>
                                {/* end card */}
                            </div>
                        </div>
                        {/* end row */}

                    </div>
                    {/* container-fluid */}
                </div>
                {/* End Page-content */}
            </div >
            {/* END layout - wrapper     */}
        </>
    )
}

export default EmployeeDetail;