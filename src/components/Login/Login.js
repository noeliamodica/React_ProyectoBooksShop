import { Link } from "react-router-dom";
import "./Login.css";
export function Login (){
   
    
    return (
      <div className="container">
         <div className="innerBox">
          <h1 className="heading">Login</h1>
         
          <div className="footer">
            <b className="error"> Error</b>
            <button>Login btn</button>
            <p>
              Crear cuenta
              <span>
                <Link to="/register">Ir  </Link>
              </span>
            </p>
          </div>
          </div>

      </div>
      
    );
  }