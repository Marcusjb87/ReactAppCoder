import "./styleNav.css"
import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
  return (
    <div className="navbar">
        <div>
            Mi Futuro Logo
        </div>
        <div>
            <ul className="list">
                <li>
                <NavLink className="nav-link text-danger" to={"/"}><b>Inicio</b></NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-danger" to={"/category/autos"}><b>Autos</b></NavLink>
                </li>
                <li>
                <NavLink className="nav-link text-danger" to={"/category/inmuebles"}><b>Inmuebles</b></NavLink>
                </li>
            </ul>
        </div>
        <div>
            <CartWidget />
        </div>
    </div>
  )
}

export default NavBar