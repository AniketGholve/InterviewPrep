import { useContext } from "react"
import { Link } from "react-router-dom"
import Store from "./Store";

const Student = () => {
    let data = useContext(Store).data;
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Student</h1>
            <div style={{ display: "grid", justifyContent: "center", fontSize: '20px' }}>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td><Link to={`/details/${item.id}`}>Edit</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student