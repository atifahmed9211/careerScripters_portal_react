import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPencil, faTrashCan, faListCheck,faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const orderData = [
    {
        id: 1,
        title: "order_1",
        type: "DMS",
        status: "unassigned",
        deadline: "26-july-2023"
    },
    {
        id: 2,
        title: "order_2",
        type: "Talent",
        status: "assigned",
        assigned_to: "Arham",
        proofreader: "Shahzaib",
        deadline: "24-july-2023"
    },
    {
        id: 3,
        title: "order_3",
        type: "SLR",
        status: "proofread",
        assigned_to: "Abdullah",
        proofreader: "Aftab",
        deadline: "22-july-2023"
    },
    {
        id: 4,
        title: "order_4",
        type: "Revision",
        status: "ready for dispatch",
        assigned_to: "Rehan",
        proofreader: "Shahzaib",
        deadline: "20-july-2023"
    },
    {
        id: 5,
        title: "order_5",
        type: "DMS",
        status: "close",
        assigned_to: "Waleed",
        proofreader: "Aftab",
        deadline: "18-july-2023"
    },
]

function OrderList() {
    const location = useLocation();
    let role = location.state.role;
    function getSelectedOrder(id) {
        return orderData.filter((order) => order.id === id);
    }

    return (
        <>
            <div className="col-sm-12">
                <div className="bg-light rounded h-100 p-4">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">id</th>
                                <th scope="col">Title</th>
                                <th scope="col">Type</th>
                                <th scope="col">Status</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderData.map((order, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{order.id}</td>
                                        <td>{order.title}</td>
                                        <td>{order.type}</td>
                                        <td>{order.status}</td>
                                        <td>{order.deadline}</td>
                                        <td>
                                            <a className="btn btn-primary me-1"><Link to={"" + order.id} className="text-decoration-none link-light" state={{ order: getSelectedOrder(order.id) }}><FontAwesomeIcon icon={faEye} /></Link></a>
                                            {
                                                (role === "admin" || role === "manager") &&
                                                <a class="btn btn-primary waves-effect waves-light me-1">
                                                    <i className="bx bx-cart me-2"></i> <Link to="update_order" className="text-decoration-none link-light"><FontAwesomeIcon icon={faPencil} /></Link>
                                                </a>
                                            }
                                            {
                                                role === "admin" &&
                                                <a className="btn btn-success waves-effect waves-light me-1">
                                                    <i className="bx bx-shopping-bag me-2"></i><FontAwesomeIcon icon={faTrashCan} />
                                                </a>
                                            }
                                            {
                                                role === "manager" &&
                                                <a className="btn btn-primary me-1"><Link to="assign_order" className="text-decoration-none link-light"><FontAwesomeIcon icon={faListCheck} /></Link></a>
                                            }
                                            {
                                                role === "user" &&
                                                <a className="btn btn-primary me-1"><Link to="order_submit" className="text-decoration-none link-light"><FontAwesomeIcon icon={faPaperPlane}/></Link></a>
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody >
                    </table >
                </div >
            </div >
        </>
    )
}
export default OrderList;
