import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";


const CartElements = () => {
  const { cart } = useContext(dataContext);

 

  return cart.map((product) => {
    return (
      <div className='cartContent' key={product.id}>
        <img src={product.img} alt='product-card' />
        <h3 className='name'>{product.name}</h3>
        <CartItemCounter product={product} quanty={product.quanty} />
        <h4 className='price'>{product.price}$</h4>   
        
      </div>
    );
  });
};

export default CartElements;