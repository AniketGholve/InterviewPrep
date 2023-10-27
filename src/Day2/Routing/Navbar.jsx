import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:'20px'}}>
                <Link to={"/"}>Home ||</Link>
                <Link to={"/student"}>Student||</Link>
                <Link to={"/about"}>About Us||</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </>
    )
}

export default Navbar