import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import CreateAccount from "./Createaccount";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import React,{ useState} from 'react';
import Login  from "./Login";
import Axios  from "axios";


  
  

function App() {
  
  const [prod,setprod]=useState([])
  React.useEffect(()=>{
    const fetchd=async()=>{
      try{
        const res=await Axios.get('http://localhost:5000/');
       // console.log('fff',res.data)
        setprod(res.data)
      }catch(error){
        console.error('error fetching data',error)
      }}
      fetchd()
    },[])

      //console.log('zdxa',prod)
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
         
         
          <Routes>
            <Route path="/" element={<CreateAccount />}/>
          <Route path="/login"  element={<Login />}/>
            <Route path="/shop" element={<Shop data={prod}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart data={prod}/>} />
            <Route path="/checkout"  />
           
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
