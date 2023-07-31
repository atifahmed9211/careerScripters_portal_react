function AssignOrder() {
    return (
        <>
            {/* <div class="modal-header">
                <span>Next Step</span>
                <button type="button" class="close pull-right" aria-label="Close" (click)="hideModal()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div > */}
            <div class="modal-body">
                {/* Form Start */}
                <form>
                    <div class="container-fluid pt-4 px-4">
                        <div class="row g-4">
                            <div class="col-sm-12">
                                <div class="bg-light rounded h-100 p-4">
                                    <fieldset class="mb-3 row">
                                        <div class="col-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="orderType" id="gridRadios2"
                                                    value="completed" checked />
                                                <label class="form-check-label" for="gridRadios2">
                                                    Complete Project
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="orderType" id="gridRadios2"
                                                    value="divide" />
                                                <label class="form-check-label" for="gridRadios2">
                                                    Divide
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div class="form-floating mb-3">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option value="1">Arham</option>
                                            <option value="2">Ibrahim</option>
                                            <option value="3">Reyan</option>
                                            <option value="3">Measiam</option>
                                        </select>
                                        <label for="floatingSelect">Employee</label>
                                    </div>
                                    <div class="mb-3">
                                        <label>Select Employee</label>
                                        <select class="form-select" aria-label="select example" multiple size="2">
                                            <option value="Arham">Arham</option>
                                            <option value="Ibrahim">Ibrahim</option>
                                            <option value="Reyan">Reyan</option>
                                            <option value="Measiam">Measiam</option>
                                        </select >
                                    </div >
                                    <div class="row" >
                                        <div class="form-floating mb-3 col-6" >
                                            <input type="number" class="form-control" id="floatingInput"
                                                placeholder="name@example.com" />
                                            <label for="floatingInput" class="ms-2">count</label>
                                        </div>
                                    </div >
                                    <div class="row" >
                                        <div class="form-floating mb-3 col-12">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder="name@example.com" />
                                            <label for="floatingInput" class="ms-2">Who Will Send Final Draft?</label>
                                        </div>
                                    </div >
                                    <fieldset class="mb-3 col-12">
                                        <div class="col-sm-10">
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                                    value="sendToProofreader" />
                                                <label class="form-check-label" for="gridRadios1">
                                                    Send To Proof Reader
                                                </label>
                                            </div>
                                            <div class="form-floating mb-3 ms-4">
                                                <select class="form-select" id="floatingSelect"
                                                    aria-label="Floating label select example">
                                                    <option value="1">Shahzaib</option>
                                                    <option value="2">Ibrahim</option>
                                                    <option value="3">Reyan</option>
                                                    <option value="3">Measiam</option>
                                                </select>
                                                <label for="floatingSelect">Proofreader</label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                                    value="directSubmit" checked />
                                                <label class="form-check-label" for="gridRadios2">
                                                    Direct Submit
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                                    value="selfAssign" />
                                                <label class="form-check-label" for="gridRadios2">
                                                    Self Assign
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset >
                                    <div class="mb-3">
                                        <input class="form-control" type="file" id="formFileMultiple" multiple />
                                        <p class="px-4 pt-2 text-primary">
                                            <span class="fa fa-times text-danger"></span>
                                        </p >
                                    </div >
                                    <div class="mb-3">
                                        <label for="leave_days" class="form-label">Deadline in Hours</label>
                                        <input type="number" class="form-control" id="leave_days" aria-describedby="emailHelp"
                                            formControlName="deadline_in_hours" />
                                    </div>
                                    <div class="mb-3">
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                            disabled placeholder="Deadline" />
                                    </div>
                                    <div class="form-floating mb-3">
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option>
                                                
                                            </option>
                                        </select>
                                        <label for="floatingSelect">Proofreader</label>
                                    </div >
                                    <div class="mb-3 form-floating">
                                        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                            style={{height: "150px"}}></textarea>
                                        <label for="floatingTextarea">Comments</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary w-100">Add</button>
                                </div >
                            </div >
                        </div >
                    </div >
                </form >
                {/* Form End */}
            </div >
        </>
    )
}
export default AssignOrder;