import React from 'react'
import Itemcard from "./itemcard"
import {CartProvider} from "react-use-cart"

import Tshirt1 from "../src/pages/Womens_cloths/kids_Tshirt1.jpg"
import Tshirt2 from "../src/pages/Womens_cloths/kids_Tshirt2.jpg"
import Tshirt3 from "../src/pages/Womens_cloths/kids_Tshirt3.jpg"
import Tshirt4 from "../src/pages/Womens_cloths/kids_Tshirt4.jpg"
import Tshirt5 from "../src/pages/Womens_cloths/kids_Tshirt5.jpg"
import Tshirt6 from "../src/pages/Womens_cloths/kids_Tshirt6.jpg"
import Tshirt7 from "../src/pages/Womens_cloths/kids_Tshirt7.jpg"
import Tshirt8 from "../src/pages/Womens_cloths/kids_Tshirt8.jpg"
const Kids_Section=()=> {
   
    
    const Kids_data={
    
        Kids_productData:[
            {
                id:1,
                img:Tshirt1,
                title: "Csk Kids Tshirt",
                desc:"",
                price:1000,
            },
            {
                id:2,
                img:Tshirt2,
                title: "Csk Kids Tshirt",
                desc:"",
                price:1500,
            },
            {
                id:3,
                img:Tshirt3,
                title: "Csk Kids Tshirt",
                desc:"",
                price:600,
            },
            {
                id:4,
                img:Tshirt4,
                title: "Csk Kids Tshirt",
                desc:"",
                price:700,
            },
            {
                id:5,
                img:Tshirt5,
                title: "Csk Kids Tshirt",
                desc:"",
                price:700,
            },
            {
                id:6,
                img:Tshirt6,
                title: "Csk Kids Tshirt",
                desc:"",
                price:500,
            },
            {
                id:7,
                img:Tshirt7,
                title: "Csk Kids Tshirt",
                desc:"",
                price:500,
            },
            {
                id:8,
                img:Tshirt8,
                title: "Csk Kids Tshirt",
                desc:"",
                price:400,
            },
            
    
    
    
        ], 
    
    
    };
    




  return (
 <>
 <h1 className="text-center mt-3"> Kids section</h1>
 <section className="py-4 container">
     <div className="row justify-content-center">
        {Kids_data.Kids_productData.map((item,index)=>{
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

export default Kids_Section;