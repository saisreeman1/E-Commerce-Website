import {  useNavigate } from "react-router-dom"
import "./App.css"
import React,{ useState } from "react";
import Axios  from "axios";

function Login(){
  var v={}
  const [hi,sethi]=useState()
      const nav=useNavigate();
    
    const [details,setdetails]=useState({
        mail:"",
        password:""
    })
    const handlechange=(e)=>{
        const {name,value}=e.target;
        setdetails({...details,[name]:value})
    }
    const Senddata=async (e)=>{

    
           
      e.preventDefault();
       try{
         const res=await Axios.post('http://localhost:5000/login',{
          mail:details.mail,
          password:details.password
         });
         v=res.data
         sethi(res.data)
         setdetails({
          
          mail:"",
          password:"",
         
      })
      console.log("updated details",details)
      console.log("dcsd",hi)
         
       }catch(error){
         console.error('error posting data',error)
       }
       
     
    if(v.stat===true){
     nav("/shop");}
     console.log(v)
  };
    return (
        <div className="real">

            
            <h1 className="dd">SreemanTech Shop</h1><br></br>
<div className="Loginpage">
    <form onSubmit={Senddata }>
    <label className="lb">Mail : </label>
    <input type="text" name="mail" value={details.mail} onChange={handlechange}/><br/>
    <label className="lb">Password   : </label>
    <input type="text" name="password" value={details.password} onChange={handlechange}/><br></br>
    <br></br>
    <button type="submit"  >LOG IN</button><br></br>
    {<p>v.message</p>}
    </form>
</div>
</div>
);}
export default Login;