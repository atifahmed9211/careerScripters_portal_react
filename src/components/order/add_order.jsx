function AddOrder() {
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
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option value="1">DMS</option>
                                        <option value="2">Talent</option>
                                        <option value="3">SLR</option>
                                        <option value="3">Independent</option>
                                        <option value="3">Others</option>
                                    </select>
                                    <label for="floatingSelect">Category</label>
                                </div>
                                <div class="mb-3">
                                    <input class="form-control" type="file" id="formFileMultiple" multiple />
                                    <p class="px-4 pt-2 text-primary">
                                        <span class="fa fa-times text-danger"></span>
                                    </p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Deadline</label>
                                    <input type="datetime-local" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3 form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                        style={{height: "150px"}}></textarea>
                                    <label for="floatingTextarea">Comments</label>
                                </div>
                                <button type="submit" class="btn btn-primary w-100">Add</button>
                            </div>
                        </div>
                    </div>
                </div >
                {/* Form End */}
            </div >
        </>
    )
}
export default AddOrder;