import "./NavBar.css"
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const NavBar=(props)=>{
  const { cart } = useContext(dataContext);
    return (
        <div className='nav-container'>
          <nav className='navbar'>
            <Link to={"/"}>
              <h1 className='navbar-logo'>Shop</h1>
            </Link>
            <Link to={"/login"}>
              <h1 className=''>Login</h1>
            </Link>
            <Link to={"/register"}>
              <h1 className=''>Register</h1>
            </Link>
           
            <p>{props.name?`Bienvenido - ${props.name}`:"Inicie sesión"}</p>
             <button>Salir</button>

             <Link className='seeCarrito' to={"/cart"}>
              🛒
              {cart.length > 0 ? <TotalItems /> : null}
            </Link>
          </nav>
        </div>
      );
    };
 export default NavBar