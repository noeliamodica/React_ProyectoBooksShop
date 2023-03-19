import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar=()=>{
    return (
        <div className='nav-container'>
          <nav className='navbar'>
            <Link to={"/"}>
              <h1 className='navbar-logo'>Shop.</h1>
            </Link>
            <Link className='seeCarrito' to={"/cart"}>
              🛒
            </Link>
          </nav>
        </div>
      );
    };
 export default NavBar