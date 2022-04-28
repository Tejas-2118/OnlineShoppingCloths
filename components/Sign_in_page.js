/* eslint-disable no-lone-blocks */
/* //eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React ,{useState}from 'react'
//import { Link } from 'react-router-dom';
import { BrowserRouter , Route,Routes ,Link} from 'react-router-dom';
import './Sign_in_page.css'
//import submit from "./Submit.jpg"
// import image from './Csk_logo.jpg';
//import App from '../App';
//import Sign_in_page from './pages/Sign_in_page';
//import { useHistory } from "react-router-dom";
 //import App from '../App'

 function Sign_in_page() {

//let history = useHistory(); 
//history.push('/App')
  // }

  


const [firstname,setfirstname]=useState(null)
const [lastname,setlastname]=useState(null)
const [password,setpassword]=useState(null)
// const [Getmain,setmain]=useState(false)
  //<Link to="/App"> hii </Link>;
  // window.location='http://www.example.com';
   function firstData(val)
  {
    
    setfirstname(val.target.value)
    if (!firstname) {
      alert("firstname is required!")
    }
    
  }
  function lastData(val)
  {
    setlastname(val.target.value)
    if (!lastname)
{
  alert("last Name can't be blank");

}
  }
  function PasswordData(val)
  {
    setpassword(val.target.value)
    if(!password)
    {
      window.alert("Password must be at least 6 characters long.");

    }
    }

  function main(e)
  {
    e.preventDefault()
  }
  
  return (
    <div  className="App">
     {/* <img src={image} className="App-logo" alt="logo" /> */}
     {/* <img src={image} className="App-logo" alt="logo" /> */}
    <div className="Div1">
    <span id="title" style={{textAlign:'center', marginLeft:'70px'}}>Login to Csk page </span> 

   <form className ="form1" onSubmit={main}>
   <br/><br/>
    <label for="firstname"> First Name: </label>
    <input type="text" name="firstname" id="firstname" required maxlength="10"onchange={firstData} ></input>
    <br/><br/><br/>
    <label for="lastname"> Last Name: </label>
    <input type="text" name="lastname" id="lastname"  required maxlength="10" onchange={lastData}></input>
	<br/><br/><br/>
    <label for="password">  Password: </label>
    <input type="password" name="password" id="Password" required maxlength="6"onchange={PasswordData}></input>
	<br/><br/>

                   {/* <a href="/Kids"> <img src={(submit) } onClick={main} alt=" Home"/></a> */}
                   
     <button classname="submitbutton" onClick={main}> submit </button>
    </form>
    </div>
    </div>
    
  );
}
export default Sign_in_page;



//  <BrowserRouter>
//     {/* {/* <ul>
//                    <li>
//                       <Link to="/App">Womens_section</Link>
//                   </li>
                  
//               </ul>
//     <Routes>      
//       <Route path='/App' element={<App />} /> }
//     </Routes> */}
//     <Navigate to ="/App"></Navigate>npm start

//      </BrowserRouter>
//     {<button className="btn btn-success" >
//                   Back to Home
//               </button>}
 