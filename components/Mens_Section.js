import React from 'react'
import Itemcard from "./itemcard"
import {CartProvider} from "react-use-cart"

import Tshirt1 from "./pages/MensCart/Mens_cloths/Tshirt1.jpg"
import Tshirt2 from "./pages/MensCart/Mens_cloths/Tshirt2.jpg"
import Tshirt3 from "./pages/MensCart/Mens_cloths/Tshirt3.jpg"
import Tshirt4 from "./pages/MensCart/Mens_cloths/Tshirt4.jpg"
import Tshirt5 from "./pages/MensCart/Mens_cloths/Tshirt5.jpg"
import Tshirt6 from "./pages/MensCart/Mens_cloths/Tshirt6.jpg"
import Tshirt7 from "./pages/MensCart/Mens_cloths/Tshirt7.jpg"
import Tshirt8 from "./pages/MensCart/Mens_cloths/Tshirt8.jpg"

const Mens_Section=()=> {

    
const Mens_data={

    Mens_productData:[
        {
            id:1,
            img:Tshirt1,
            title: "Csk mens Tshirt",
            desc:"",
            price:700,
        },
        {
            id:2,
            img:Tshirt2,
            title: "Csk mens Tshirt",
            desc:"",
            price:800,
        },
        {
            id:3,
            img:Tshirt3,
            title: "Csk mens Tshirt",
            desc:"",
            price:1500,
        },
        {
            id:4,
            img:Tshirt4,
            title: "Csk mens Tshirt",
            desc:"",
            price:2500,
        },
        {
            id:5,
            img:Tshirt5,
            title: "Csk mens Tshirt",
            desc:"",
            price:900,
        },
        {
            id:6,
            img:Tshirt6,
            title: "Csk mens Tshirt",
            desc:"",
            price:800,
        },
        {
            id:7,
            img:Tshirt7,
            title: "Csk mens Tshirt",
            desc:"",
            price:700,
        },
        {
            id:8,
            img:Tshirt8,
            title: "Csk mens Tshirt",
            desc:"",
            price:900,
        },
        



    ], 
};
  return (
 <>
 <h1 className="text-center mt-3"> Mens section</h1>
 <section className="py-4 container">
     <div className="row justify-content-center">
        {Mens_data.Mens_productData.map((item,index)=>{
            return(
                <CartProvider>
                <Itemcard img={item.img}  title={item.title} desc={item.desc} item={item} price={item.price} key={index}/>
                </CartProvider>
                )     
})}

     </div>


 </section>
 
 
 </>
  )
}

export default Mens_Section;