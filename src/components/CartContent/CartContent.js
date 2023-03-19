import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


const CartContent = () => {

    const { cart } = useContext(dataContext);
    
  
    return cart.length > 0 ?    (
        <div>
            <CartElements />
            <CartTotal />
         </div>
    ) : (
        <h2 className="cart-message-center">
            Your cart is empy
        </h2>
    )
    
  };
  
  export default CartContent;