import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faHashtag, faBars, faEnvelope, faBell,faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from "react-router-dom";
import { useState } from "react";

function AdminLayout() {
    const [location, setLocation] = useState(useLocation());
    return (
        <>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                {/* Spinner Start */}
                {/* <div id="spinner"
                    class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> */}
                {/* Spinner End */}


                {/* Sidebar Start */}
                <div className="sidebar pe-4 pb-3">
                    <nav className="navbar bg-light navbar-light">
                        <a href="index.html" className="navbar-brand mx-4 mb-3">
                            <h3 className="text-primary"><FontAwesomeIcon icon={faHashtag} className="fa me-2" />DASHMIN</h3>
                        </a>
                        <div className="d-flex align-items-center ms-4 mb-4">
                            <div className="position-relative">
                                <img className="rounded-circle" src="img/user.jpg" alt="" style={{ width: "40px", height: "40px" }} />
                                <div
                                    className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1">
                                </div>
                            </div>
                            <div className="ms-3">
                                <h6 className="mb-0">Jhon Doe</h6>
                                <span>Admin</span>
                            </div>
                        </div>
                        <div className="navbar-nav w-100">
                            <a className="sidebar_nav nav-item nav-link">
                                <FontAwesomeIcon icon={faTachometerAlt} className="fa me-2" />
                                <Link to="">Dashboard</Link></a>
                            <a className="sidebar_nav nav-item nav-link">
                                <FontAwesomeIcon icon={faTachometerAlt} className="fa me-2" />
                                <Link to="user" state={{ role: location.state.loginRole }}>User</Link></a>
                            <a className="sidebar_nav nav-item nav-link">
                                <FontAwesomeIcon icon={faTachometerAlt} className="fa me-2" />
                                <Link to="attendance">Attendance</Link></a>
                            <a className="sidebar_nav nav-item nav-link">
                                <FontAwesomeIcon icon={faTachometerAlt} className="fa me-2" />
                                <Link to="leaves" state={{ role: location.state.loginRole }}>Leaves</Link></a >
                            <a className="sidebar_nav nav-item nav-link">
                                <FontAwesomeIcon icon={faTachometerAlt} className="fa me-2" />
                                <Link to="inventory">Inventory</Link></a >
                            {/* <a href="index.html" className="sidebar_nav nav-item nav-link" > <i
                                className="fa fa-tachometer-alt me-2"></i>Profile</a > */}
                        </div >
                    </nav >
                </div >
                {/* Sidebar End */}


                {/* Content Start */}
                <div className="content">
                    {/* Navbar Start */}
                    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                            <h2 className="text-primary mb-0"><FontAwesomeIcon icon={faHashtag} className="fa" /></h2>
                        </a>
                        <a className="sidebar-toggler flex-shrink-0">
                            <FontAwesomeIcon icon={faBars} className="fa" />
                        </a>
                        <form className="d-none d-md-flex ms-4">
                            <input className="form-control border-0" type="search" placeholder="Search" />
                        </form>
                        <div className="navbar-nav align-items-center ms-auto">
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <FontAwesomeIcon icon={faEnvelope} className="fa me-lg-2" />
                                    <span className="d-none d-lg-inline-flex">Message</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt=""
                                                style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt=""
                                                style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src="img/user.jpg" alt=""
                                                style={{ width: "40px", height: "40px" }} />
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                                <small>15 minutes ago</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item text-center">See all message</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <FontAwesomeIcon icon={faBell} className="fa me-lg-2" />
                                    <span className="d-none d-lg-inline-flex">Notificatin</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                    <a href="#" className="dropdown-item">
                                        <h6 className="fw-normal mb-0">Profile updated</h6>
                                        <small>15 minutes ago</small>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <h6 className="fw-normal mb-0">New user added</h6>
                                        <small>15 minutes ago</small>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">
                                        <h6 className="fw-normal mb-0">Password changed</h6>
                                        <small>15 minutes ago</small>
                                    </a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item text-center">See all notifications</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <img className="rounded-circle me-lg-2" src="img/user.jpg" alt=""
                                        style={{ width: "40px", height: "40px" }} />
                                    <span className="d-none d-lg-inline-flex">John Doe</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                    <a href="#" className="dropdown-item">My Profile</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    <a href="#" className="dropdown-item">Log Out</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Navbar End */}
                    <Outlet />
                    {/* Footer Start */}
                    {/* <div class="container-fluid pt-4 px-4">
                        <div class="bg-light rounded-top p-4">
                            <div class="row">
                                <div class="col-12 col-sm-6 text-center text-sm-start">
                                    &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                                </div>
                                <div class="col-12 col-sm-6 text-center text-sm-end">
                                    This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.
                                    Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                                    <br />
                                    Distributed By <a class="border-bottom" href="https://themewagon.com"
                                        target="_blank">ThemeWagon</a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* Footer End */}
                </div>
                {/* Content End */}


                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><FontAwesomeIcon icon={faArrowUp}/></a>
            </div>
        </>
    )
}
export default AdminLayout;
