import "./NavBar.css"
import TotalItems from "../CartContent/TotalItems";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import {auth} from "../../firebase"




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
           
            <div>
            <h2>{props.name?`Bienvenido - ${props.name}`:"Inicie sesión"}</h2>
           <button>Salir</button>
     
             </div>    

             <Link className='seeCarrito' to={"/cart"}>
              🛒
              {cart.length > 0 ? <TotalItems /> : null}
            </Link>
          </nav>
        </div>
      );
    };
 export default NavBar