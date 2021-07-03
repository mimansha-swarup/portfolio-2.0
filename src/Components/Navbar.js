import logo from '../assets/logo.svg';
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <img className="navbrand" src={logo} alt="navbrand" />
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