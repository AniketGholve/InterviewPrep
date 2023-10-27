import { Link } from "react-router-dom"

const Student = () => {
    let data = [
        { id: "1", name: "Aniket" },
        { id: "2", name: "Shubham" },
        { id: "3", name: "Rohan" },
        { id: "4", name: "Dhanu" }
    ];
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