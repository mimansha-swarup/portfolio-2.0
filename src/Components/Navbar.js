import logo from '../assets/logo.svg';
import {FiMenu} from "react-icons/fi"
const Navbar = () => {
    return ( 
        <nav className="navbar">
          <img className="navbrand" src={logo} alt="navbrand" />
            <input type="checkbox" name="menu" id="menu" />
            <label className="hammenu-icon" htmlFor="menu"><FiMenu /></label>
          
          
          <ul className="navlinks-cont">
            <li>Home</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
      </nav>
     );
}
 
export default Navbar;