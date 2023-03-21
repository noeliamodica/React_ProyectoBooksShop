import Home from './components/Home/Home';
import CartContent from "./components/CartContent/CartContent"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataProvider from "./components/Context/DataContext"
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { auth } from './firebase';
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [userName,setUserName]=useState([])
 useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }else setUserName("")
  })
 },[])
  
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
