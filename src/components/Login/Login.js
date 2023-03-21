import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { InputControl } from "../InputControl/InputControl";


export function Login (){

  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
   

  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
    
    return (
      <div className="container-login">
         <div className="innerBox">
          <h1 className="heading">Login</h1>

          <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingrese su contraseña"
        />
         
          <div className="footer">
            <b className="error">{errorMsg} </b>
            <button onClick={Iniciar} disabled={submitButtonDisabled}>Login btn</button>
            <p>
              Crear cuenta
              <span>
                <Link to="/register">  </Link>
              </span>
            </p>
          </div>
          </div>

      </div>
      
    );
  }