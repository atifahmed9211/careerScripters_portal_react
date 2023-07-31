import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons"

function LeaveList() {
    return (
        <>
            <div className="col-sm-12 col-xl-12">
                <div className="bg-light rounded h-100 p-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Employee Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>E123</td>
                                <td>John</td>
                                <td>jhon@email.com</td>
                                <td>
                                    <a className="btn btn-primary me-1"><Link to="leave_detail" className="text-decoration-none link-light"><FontAwesomeIcon icon={faEye} /></Link></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>E123</td>
                                <td>Mark</td>
                                <td>mark@email.com</td>
                                <td>
                                    <a className="btn btn-primary me-1"><Link to="leave_detail" className="text-decoration-none link-light"><FontAwesomeIcon icon={faEye} /></Link></a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>E123</td>
                                <td>Jacob</td>
                                <td>jacob@email.com</td>
                                <td>
                                    <a className="btn btn-primary me-1"><Link to="leave_detail" className="text-decoration-none link-light"><FontAwesomeIcon icon={faEye} /></Link></a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default LeaveList;