import { Link } from "react-router-dom";
export function Login (){
   
    
    return (
      <div className="container">
         <div className="innerBox">
          <h1 className="heading">Login</h1>
          </div>
          <div className="footer">
            <b className="error"></b>
            <button>Login btn</button>
            <p>
              Crear cuenta
              <span>
                <Link to="/register">Ir  </Link>
              </span>
            </p>
          </div>

      </div>
      
    );
  }