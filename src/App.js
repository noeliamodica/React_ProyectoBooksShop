import Home from './components/Home/Home';
import CartContent from "./components/CartContent/CartContent"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
