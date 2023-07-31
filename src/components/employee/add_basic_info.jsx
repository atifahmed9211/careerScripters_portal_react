function AddBasicInfo() {
    return (
        <>
            <div class="container-xxl position-relative bg-white d-flex p-0">

                {/* Form Start */}
                <div class="container-fluid pt-4 px-4">
                    <div class="row g-4">
                        <div class="col-sm-12">
                            <div class="bg-light rounded h-100 p-4">
                                <h6 class="mb-4">Basic Form</h6>
                                <form>
                                    <div class="row">
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Employee Code</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>

                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Father Name</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Contact</label>
                                            <input type="tel" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-7">
                                            <label for="exampleInputEmail1" class="form-label">Highest Edcuation Degree</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3 col-5">
                                            <label for="exampleInputEmail1" class="form-label">CNIC No</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Emergency Contact No. 1</label>
                                            <input type="tel" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Emergency Contact No. 2</label>
                                            <input type="tel" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">D.O.B</label>
                                            <input type="date" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <h6 class="mb-4">Bank Account Detail</h6>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Name Of Bank</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Account Title</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Account No.</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form End */}
            </div>
        </>
    )
}
export default AddBasicInfo;