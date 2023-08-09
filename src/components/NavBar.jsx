import './styles/Navbar.css'
import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.png'

const NavBar = () => {
  return (
    <div className="navbar">
         <div className="navbar__logo">
            <img src={Logo} alt="logo" className="logo"/>
         </div>
         <div className="navbar__links">
            <Link to="/" className="link">
                Home
            </Link>
         </div>
         <div className="navbar__links">
            <Link to="/about" className="link">
                About
            </Link>
         </div>
         <div className="navbar__links">
            <Link to="/contact" className="link">
                Contact
            </Link>
         </div>

         <div className="navbar__button">
            <button>Login</button>
         </div>


        
    </div>
   
  )
}

export default NavBar;