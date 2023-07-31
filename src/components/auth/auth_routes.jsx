import { Routes, Route } from "react-router-dom";
import Signin from "./signin";

function AuthRoutes() {
    return (
        <>
                <Routes>
                    <Route path="/" element={<Signin />}>
                    </Route>
                </Routes>
        </>
    )

}
export default AuthRoutes;