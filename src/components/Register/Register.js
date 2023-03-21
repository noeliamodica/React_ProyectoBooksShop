import "./Register.css";
import { Link } from "react-router-dom";

export function Register() {
  
  
    return (
        <div className="container">
        <div className="innerBox">
          <h1 className="heading">Registro</h1>
         
    
          <div className="footer">
            <b className="error">Error</b>
            <button>
              Guardar
            </button>
            <p>
              Si ya tienes una cuenta inicia sesión
              <span>
                <Link to="/login"> Login</Link>
              </span>
            </p>
          </div>
       
       
        </div>
      </div>
    );
  }