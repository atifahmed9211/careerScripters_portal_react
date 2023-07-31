import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {

    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    let role;
    function handleChange(e) {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        switch (signInData.email) {
            case "admin@gmail.com":
                role = "admin";
                navigate("admin", { state: { loginRole: role } });
                break;
            case "hr@gmail.com":
                role = "hr";
                navigate("hr", { state: { loginRole: role } });
                break;
            case "manager@gmail.com":
                role = "manager";
                navigate("manager", { state: { loginRole: role } });
                break;
            case "user@gmail.com":
                role = "user";
                navigate("user", { state: { loginRole: role } });
                break;
        }
    }
    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <a href="index.html" className="">
                                        <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                                    </a>
                                    <h3>Sign In</h3>
                                </div>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={handleChange} value={signInData.email} />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={handleChange} value={signInData.password} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                        </div>
                                        <a href="">Forgot Password</a>
                                    </div>
                                    <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={handleSubmit}>Sign In</button>
                                </form>
                                <p className="text-center mb-0">Don't have an Account? <a href="">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin;