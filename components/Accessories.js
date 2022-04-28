import React from 'react'
import Itemcard from "./itemcard"
import {CartProvider} from "react-use-cart"

import Tshirt1 from "../src/pages/Womens_cloths/accessories1.jpg"
import Tshirt2 from "../src/pages/Womens_cloths/accessories2.jpg"
import Tshirt3 from "../src/pages/Womens_cloths/accessories3.jpg"
import Tshirt4 from "../src/pages/Womens_cloths/accessories4.jpg"
import Tshirt5 from "../src/pages/Womens_cloths/accessories5.jpg"
import Tshirt6 from "../src/pages/Womens_cloths/accessories6.jpg"
import Tshirt7 from "../src/pages/Womens_cloths/accessories7.jpg"
import Tshirt8 from "../src/pages/Womens_cloths/accessories8.jpg"
const Accessories=()=> {
   
    
    const Accessories_data={
    
        Accessories_productData:[
            {
                id:1,
                img:Tshirt1,
                title: "Csk Smart Watch",
                desc:"",
                price:2500,
            },
            {
                id:2,
                img:Tshirt2,
                title: "Csk Keychain",
                desc:"",
                price:400,
            },
            {
                id:3,
                img:Tshirt3,
                title: "Csk Analog Watch",
                desc:"",
                price:2000,
            },
            {
                id:4,
                img:Tshirt4,
                title: "Csk mouse pad",
                desc:"",
                price:500,
            },
            {
                id:5,
                img:Tshirt5,
                title: "Csk Travel bag 50L",
                desc:"",
                price:5000,
            },
            {
                id:6,
                img:Tshirt6,
                title: "Csk Laptop bag",
                desc:"",
                price:2500,
            },
            {
                id:7,
                img:Tshirt7,
                title: "Csk Travel bag 80L",
                desc:"",
                price:7500,
            },
            {
                id:8,
                img:Tshirt8,
                title: "Csk Gym bag",
                desc:"",
                price:2500,
            },
            
    
    
    
        ], 
    
    
    };
    




  return (
 <>
 <h1 className="text-center mt-3"> Accessories</h1>
 <section className="py-4 container">
     <div className="row justify-content-center">
        {Accessories_data.Accessories_productData.map((item,index)=>{
             return( <CartProvider>
                <Itemcard img={item.img}  title={item.title} desc={item.desc} item={item} price={item.price} key={index}/>
                </CartProvider>
            )  
})}

     </div>


 </section>
 
 
 </>
  )
}

export default Accessories;