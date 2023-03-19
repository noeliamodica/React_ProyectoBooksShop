import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
  const {data, cart, setCart} =useContext(dataContext);

  const buyProducts = (product) =>{
    console.log(product);
    //para buscar si en el carrito hay otro producto con el mismo id
    const productrepeat = cart.find ((item)=> item.id === product.id  )

    if (productrepeat){
      setCart(cart.map((item)=> (item.id === product.id ? {...product, quanty:productrepeat.quanty + 1} : item)))
    } else{
      setCart([...cart, product]);
    }
    
  }

  return data.map((product) => {
    return (
      <div className='card' key={product.id}>
        <img src={product.img} alt='img-product-card' />
        <h3>{product.name}</h3>
        <h4>{product.price}$</h4>
        <button onClick={() => buyProducts(product)}>buy</button>
      </div>
    );
  });
};

export default Products;