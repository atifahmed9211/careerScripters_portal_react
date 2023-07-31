function SalaryDetail() {
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
                                            <div class="col-xl-12">
                                                <div class="row">
                                                    <div class="col-md-5 col-sm-3 col-4">
                                                        <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist"
                                                            aria-orientation="vertical">
                                                            <div class="page-title-box">
                                                                <h4 class="mb-sm-0 font-size-18">salary Detail</h4>
                                                                <p>#id</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7 col-sm-9 col-8">
                                                        <div class="text-end">
                                                            <a routerLink="../updateSalary"
                                                                class="btn btn-primary waves-effect waves-light mt-2 me-1">
                                                                <i class="bx bx-cart me-2"></i> Update
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-12">
                                                <div class="mt-4 mt-xl-3">
                                                    <h4 class="mt-1 mb-3">salary Name</h4>
                                                    <div class="row my-3">
                                                        <div class="col-6">
                                                            <div class="form-check">
                                                                <i class="fas fa-check text-success form-check-input"
                                                                    style={{ border: "none", cursor: "auto" }}></i>
                                                                <label class="form-check-label"
                                                                    for="exampleCheck1"> counter
                                                                    achieved</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number" class="form-control" id="exampleInputEmail1"
                                                                aria-describedby="emailHelp" value="{{basic_salary}}" disabled />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-6">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="qa_bonus_check" />
                                                                <label class="form-check-label" for="qa_bonus_check">QA
                                                                    Bonus</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number" class="form-control"
                                                                id="exampleInputEmail1" aria-describedby="emailHelp" min="250" max="5000" step="250" />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-6">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input"
                                                                    id="target_meeting_check" />
                                                                <label class="form-check-label" for="target_meeting_check">Target
                                                                    Meeting
                                                                    Bonus</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number" class="form-control"
                                                                id="exampleInputEmail1" aria-describedby="emailHelp" value="3000"
                                                                disabled />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-6">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"
                                                                    style={{visibility: "hidden"}} />
                                                                <label class="form-check-label"
                                                                    for="exampleCheck1"> Points
                                                                    Exceeded</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number" class="form-control" id="exampleInputEmail1"
                                                                aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-6">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="exampleCheck1"
                                                                    style={{visibility: "hidden"}} />
                                                                <label class="form-check-label text-danger"
                                                                    for="exampleCheck1">
                                                                    Points
                                                                    Left</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-4">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                                <label class="form-check-label" for="exampleCheck1">Other
                                                                    Funds</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <input type="text" class="form-control"
                                                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                                                placeholder="Reason" />
                                                        </div>
                                                        <div class="col-4">
                                                            <input type="number" class="form-control"
                                                                id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-6">
                                                            <h6 class="text-success text-uppercase ms-4">Gross Salary</h6>
                                                        </div>
                                                        <div class="col-6">
                                                            <h6 class="text-success text-uppercase ms-2">
                                                            </h6>
                                                        </div>
                                                    </div>

                                                    <p class="text-muted mb-4">Deductions</p>
                                                    <div class="row my-3">
                                                        <div class="col-6">
                                                            <label class="form-check-label ms-4" for="exampleCheck1">Tax
                                                                Deduction</label>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number" class="form-control" id="exampleInputEmail1"
                                                                aria-describedby="emailHelp" value="{{tax}}" disabled />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-3">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                                <label class="form-check-label" for="exampleCheck1">Leave
                                                                    Deduction</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <p class="text-danger">Leaves</p>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number"
                                                                class="form-control"
                                                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                                                min="0" />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-3">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                                <label class="form-check-label" for="exampleCheck1">Late Coming
                                                                    Deduction</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <p class="text-danger">Late Coming</p>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number" class="form-control"
                                                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                                                min="0" />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-3">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                                <label class="form-check-label" for="exampleCheck1">Remaining Order
                                                                    Deduction</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <p class="text-danger">Remaining Count</p>
                                                        </div>
                                                        <div class="col-6">
                                                            <input type="number"
                                                                class="form-control" id="exampleInputEmail1"
                                                                aria-describedby="emailHelp"
                                                                min="0" />
                                                        </div>
                                                    </div>
                                                    <div class="row my-3">
                                                        <div class="col-4">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                                <label class="form-check-label" for="exampleCheck1">Other
                                                                    Deduction</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                                aria-describedby="emailHelp" placeholder="Reason" />
                                                        </div>
                                                        <div class="col-4">
                                                            <input type="number"
                                                                class="form-control" id="exampleInputEmail1"
                                                                aria-describedby="emailHelp" min="0" />
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-6">
                                                            <h6 class="text-success text-uppercase ms-4">Net Salary</h6>
                                                        </div>
                                                        <div class="col-6">
                                                            <h6 class="text-success text-uppercase ms-2"></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* end row */}

                                    </div>
                                </div>
                                {/* end card */}
                            </div>
                        </div>
                        {/* end row */}

                    </div>
                    {/* container-fluid */}
                </div >
                {/* End Page - content */}
            </div >
            {/* END layout - wrapper */}
        </>
    )
}
export default SalaryDetail;