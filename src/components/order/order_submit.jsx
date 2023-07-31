function OrderSubmit() {
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
                <div class="container-fluid pt-4 px-4">
                    <div class="row g-4">
                        <div class="col-sm-12">
                            <div class="bg-light rounded h-100 p-4">
                                <div class="mb-3">
                                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                                </div>
                                <fieldset class="mb-3 col-12">
                                    <div class="col-sm-10">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1"
                                                value="option1" checked />
                                            <label class="form-check-label" for="gridRadios1">
                                                Send Back To Writer
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                                value="option2" />
                                            <label class="form-check-label" for="gridRadios2">
                                                Ready For Dispatching
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2"
                                                value="option2" />
                                            <label class="form-check-label" for="gridRadios2">
                                                Few Files Left.
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                                <div class="mb-3 form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                        style={{ height: "150px" }}></textarea>
                                    <label for="floatingTextarea">Comments</label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Form End */}
            </div>
        </>
    )
}
export default OrderSubmit;