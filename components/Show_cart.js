import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart"
import {CartProvider} from "react-use-cart"
function Showcart() {

  return(
    <>
    <CartProvider>
    <Cart/>
    </CartProvider>
    </>
  )
}

export default Showcart;
