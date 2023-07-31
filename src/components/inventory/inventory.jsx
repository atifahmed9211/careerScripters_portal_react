function Inventory() {
    return (
        <>
            <div class="col-sm-12 col-xl-12 text-end">
                <div class="bg-light rounded h-100 p-4">
                    <a class="btn btn-primary">Add New Product</a>
                </div>
            </div >
            <div class="col-sm-12">
                <div class="bg-light rounded h-100 p-4">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Added On</th>
                                <th scope="col">updated On</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>1</td>
                                <td>Sugar</td>
                                <td>Food Items</td>
                                <td>kg</td>
                                <td>12</td>
                                <td>20-Apr-2023</td>
                                <td>25-Apr-2023</td>
                                <td>
                                    <a class="btn btn-primary me-1" routerLink="inventory-detail">View</a>
                                    <a class="btn btn-primary waves-effect waves-light me-1">
                                        <i class="bx bx-cart me-2"></i> Update
                                    </a>
                                    <a class="btn btn-success waves-effect waves-light me-1">
                                        <i class="bx bx-shopping-bag me-2"></i>Delete
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>2</td>
                                <td>Soap</td>
                                <td>Hygiene</td>
                                <td>pieces</td>
                                <td>12</td>
                                <td>20-Apr-2023</td>
                                <td>25-Apr-2023</td>
                                <td>
                                    <a class="btn btn-primary me-1" routerLink="inventory-detail">View</a>
                                    <a class="btn btn-primary waves-effect waves-light me-1">
                                        <i class="bx bx-cart me-2"></i> Update
                                    </a>
                                    <a class="btn btn-success waves-effect waves-light me-1">
                                        <i class="bx bx-shopping-bag me-2"></i>Delete
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>3</td>
                                <td>Milk</td>
                                <td>Food Items</td>
                                <td>kg</td>
                                <td>12</td>
                                <td>20-Apr-2023</td>
                                <td>25-Apr-2023</td>
                                <td>
                                    <a class="btn btn-primary me-1" routerLink="inventory-detail">View</a>
                                    <a class="btn btn-primary waves-effect waves-light me-1">
                                        <i class="bx bx-cart me-2"></i> Update
                                    </a>
                                    <a class="btn btn-success waves-effect waves-light me-1">
                                        <i class="bx bx-shopping-bag me-2"></i>Delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table >
                </div >
            </div >
        </>
    )
}
export default Inventory;