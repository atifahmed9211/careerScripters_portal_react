import { useLocation } from "react-router-dom";
function OrderDetail() {
    const location = useLocation();
    const order = location.state.order[0];
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
                                                                <h4 class="mb-sm-0 font-size-18">Order Detail</h4>
                                                                <p>#id : {order.id}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7 col-sm-9 col-8">
                                                        <div class="text-end">
                                                            <a routerLink="../order-update"
                                                                class="btn btn-primary waves-effect waves-light mt-2 me-1">
                                                                <i class="bx bx-cart me-2"></i> Update
                                                            </a>
                                                            <a
                                                                class="btn btn-success waves-effect  mt-2 waves-light me-1">
                                                                <i class="bx bx-shopping-bag me-2"></i>Delete
                                                            </a>
                                                            <a class="btn btn-primary mt-2 me-1">Assign</a>
                                                            <a class="btn btn-primary mt-2 me-1">Submit</a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-xl-12">
                                                <div class="mt-4 mt-xl-3">
                                                    <h4 class="mt-1 mb-3">Order Name : {order.title}</h4>
                                                    <p class="text-muted mb-4">Order Category : {order.type}</p>
                                                    <p class="text-muted mb-4">Order Date : {order.deadline}</p>
                                                    <h6 class="text-success text-uppercase">Deadline</h6>
                                                    <div class="row mb-3">
                                                        <div class="col-md-6">
                                                            <div>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-unlink font-size-16 align-middle text-primary me-1"></i>
                                                                    Status</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-shape-triangle font-size-16 align-middle text-primary me-1"></i>
                                                                    Assigned to : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Proofreader : </p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-battery font-size-16 align-middle text-primary me-1"></i>
                                                                    Submitted : </p>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {order.status}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-cog font-size-16 align-middle text-primary me-1"></i>
                                                                    {order.assigned_to}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    {order.proofreader}</p>
                                                                <p class="text-muted"><i
                                                                    class="bx bx-user-voice font-size-16 align-middle text-primary me-1"></i>
                                                                    <span class="text-success">On-time</span> / <span
                                                                        class="text-danger">Late </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h5 class="mb-4">Added By Admin</h5>
                                                    <p class="text-muted mb-4">To achieve this, it would be necessary to
                                                        have uniform grammar pronunciation and more common words If several
                                                        languages coalesce</p>
                                                    <div class="">
                                                        <h5 class="font-size-15">Files :</h5>
                                                        <a href="#" class="px-5">
                                                            file 1<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                        <a href="#" class="px-5">
                                                            file 2<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                        <a href="#" class="px-5">
                                                            file 3<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                    </div>
                                                    <h5 class="mb-4">Added By Manager</h5>
                                                    <p class="text-muted mb-4">To achieve this, it would be necessary to
                                                        have uniform grammar pronunciation and more common words If several
                                                        languages coalesce</p>
                                                    <div class="">
                                                        <h5 class="font-size-15">Files :</h5>
                                                        <a href="#" class="px-5">
                                                            file 1<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                        <a href="#" class="px-5">
                                                            file 2<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                        <a href="#" class="px-5">
                                                            file 3<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                    </div>
                                                    <h5 class="mb-4">Added By Writer</h5>
                                                    <p class="text-muted mb-4">To achieve this, it would be necessary to
                                                        have uniform grammar pronunciation and more common words If several
                                                        languages coalesce</p>
                                                    <div class="">
                                                        <h5 class="font-size-15">Files :</h5>
                                                        <a href="#" class="px-5">
                                                            file 1<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                        <a href="#" class="px-5">
                                                            file 2<i class="ml-2 fa fa-download"></i>
                                                        </a>
                                                        <a href="#" class="px-5">
                                                            file 3<i class="ml-2 fa fa-download"></i>
                                                        </a>
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

                    </div >
                    {/* container - fluid */}
                </div >
                {/* End Page - content */}
            </div >
            {/* END layout - wrapper */}
        </>
    )
}
export default OrderDetail;