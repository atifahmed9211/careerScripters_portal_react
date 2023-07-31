function UpdateOrder() {
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
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Employee Name</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Father Name</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <fieldset class="mb-3 col-12 col-sm-6 col-md-4">
                                            <legend class="col-form-label pt-0">Gender</legend>
                                            <div class="col-sm-10">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                                        value="option1" checked/>
                                                        <label class="form-check-label" for="gridRadios1">
                                                            Male
                                                        </label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                                        value="option2"/>
                                                        <label class="form-check-label" for="gridRadios2">
                                                            Female
                                                        </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Joining Date</label>
                                            <input type="date" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp"/>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Basic Salary</label>
                                            <input type="number" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="123"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-12 col-sm-6">
                                            <label class="form-label">Designation</label>
                                            <select class="form-select mb-3" aria-label="Default select example">
                                                <option value="1">Writer</option>
                                                <option value="2">Proofreader</option>
                                            </select>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                                </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Address</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" value="xyz"/>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Highest Edcuation Degree</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">CNIC No</label>
                                            <input type="text" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Contact</label>
                                            <input type="tel" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Emergency Contact No. 1</label>
                                            <input type="tel" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">Emergency Contact No. 2</label>
                                            <input type="tel" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp" value="xyz"/>
                                        </div>
                                        <div class="mb-3 col-12 col-sm-6 col-md-4">
                                            <label for="exampleInputEmail1" class="form-label">D.O.B</label>
                                            <input type="date" class="form-control" id="exampleInputEmail1"
                                                aria-describedby="emailHelp"/>
                                        </div>
                                    </div>
                                    <h6 class="mb-4">Bank Account Detail</h6>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Name Of Bank</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" value="xyz"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Account Title</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" value="xyz"/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Account No.</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" value="xyz"/>
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
export default UpdateOrder;