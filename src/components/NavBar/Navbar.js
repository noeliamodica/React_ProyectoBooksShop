import "./NavBar.css"
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const NavBar=()=>{
  const { cart } = useContext(dataContext);
    return (
        <div className='nav-container'>
          <nav className='navbar'>
            <Link to={"/"}>
              <h1 className='navbar-logo'>Shop</h1>
            </Link>
            <Link className='seeCarrito' to={"/cart"}>
              🛒
              {cart.length > 0 ? <TotalItems /> : null}
            </Link>
          </nav>
        </div>
      );
    };
 export default NavBar