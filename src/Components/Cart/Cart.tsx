import { FC } from "react";
import Class from "./Cart.module.scss"

interface CartProps{
    cartItemCounter:number;
}



const Cart:FC<CartProps> = ({cartItemCounter}) => {


    const titleText = () => {
        switch (cartItemCounter) {
            case 0:
                return "Your cart is empty!"
                break;
            case 1:
                return `Your have ${cartItemCounter} item in your cart`
                break;
            default:
                return `You have ${cartItemCounter} items in your cart`
                break;
        }
    }

  return (
    <button className={Class.cartButtonParent} title={titleText()} >
        <img src="/shared/desktop/icon-cart.svg" alt="Cart"  width="20px" height="20px"/>
        {cartItemCounter > 0 ? <span className={Class.cartCount}>{cartItemCounter}</span> : ""} 
    </button>
  )
}
export default Cart
