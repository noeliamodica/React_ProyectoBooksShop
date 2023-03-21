import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function Register() {
  
    const navigate = useNavigate();
    const [values, setvalues] = useState({ name: "", email: "", pass: "" });
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const registro = () => {
        if (!values.name || !values.email || !values.pass) {
          setErrorMsg("Llene todos los campos");
          return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        //primero valido la autenticacion y despues le paso los valores
        createUserWithEmailAndPassword(auth, values.email, values.pass)
          .then(async (res) => {
            setSubmitButtonDisabled(false);
            //opcionalmente guardo el usuario
            const user = res.user;
            await updateProfile(user, {
              displayName: values.name,
            });
            navigate("/");
          })
          .catch((err) => {
            setSubmitButtonDisabled(false);
            setErrorMsg(err.message);
          });
      };
  
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