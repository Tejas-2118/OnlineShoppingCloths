/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { BrowserRouter , Route,Routes ,Link} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Abouts_us from './pages/Abouts_us';
import Mens_section from './Mens_Section';
import Womens_section from './Womens_section';
import Kids_section from './Kids_section';
import Accessories from './Accessories';
import Sign_in_page from './pages/Sign_in_page';
import Showcart  from './Show_cart';
import Help from "./pages/Help"
import Home from './Home';



export function App( ) {


    return (
        <div className='bg-dark'>
        <div id="Top">
        <BrowserRouter>
        <div className='navbar navbar-dark bg-primary' style={{ display: "flex", justifyContent: "space-between" }}>
                <Link className="link" to="/Womens" >Womens section</Link>
                <Link className="link" to="/Mens" >Mens section</Link>
                <Link className="link" to="/Kids">Kids section</Link>
                <Link className="link" to="/Accessories" >Accessories</Link>
                <Link className="link" to="/home"><i class="fas fa-home"></i></Link>
                <Link className="link" id ="/cart" to ="/cart" > <i class="fas fa-shopping-cart"></i> </Link>
                <Link className="link" to="/signin">Log in</Link>
        </div>
        <Routes>	
            <Route path='/Mens' element={<Mens_section />} />
            <Route path='/Womens' element={<Womens_section />} /> 
            <Route path='/Kids' element={<Kids_section />} /> 
            <Route path='/Accessories' element={<Accessories />} />
             <Route path='/cart' element={<Showcart/>} />
             <Route path='/about' element={<Abouts_us/>} />
             <Route path='/home' element={<Home/>} />
            <Route path='/signin' element={< Sign_in_page />} />
        </Routes>
        </BrowserRouter>
        </div>


        <div id="buttom">
        <BrowserRouter>
        <div className='navbar navbar-dark bg-primary display-1' style={{ display: "flex", justifyContent: "space-between" }}>
                <Link className="link1" to="/about" >About us</Link>
                <Link className="link1" to="/" ><i class="fas fa-home"></i></Link>
                <Link className="link1" to="/help" >Help pages</Link>
                
        </div>
        <Routes>	
            <Route path='/about'  element={<Abouts_us/>} />
            <Route path='/help' element={<Help/>} />
            
        </Routes>
        </BrowserRouter>
        </div>
    
        
        
      
        </div>
    );



}

export default App;


