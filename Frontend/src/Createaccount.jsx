import {  useNavigate } from "react-router-dom"
import "./App.css"
import {useState} from 'react';
import React from "react";
import Axios from 'axios';

var v={}
function CreateAccount(){
    const nav=useNavigate();

    const [details,setdetails]=useState({
        phone:"",
        mail:"",
        password:"",
        Repeatpass:""
    })
    const handlechange=(e)=>{
        const {name,value}=e.target;
        setdetails({...details,[name]:value})
    }
    const Senddata=async (e)=>{

    
           
            e.preventDefault();
             try{
               const res=await Axios.post('http://localhost:5000/Create-account',{phone:details.phone,
                mail:details.mail,
                password:details.password
               });
                v=res.data
               console.log(v,details)
               setdetails({
                phone:"",
                mail:"",
                password:"",
                Repeatpass:""
            })
               
             }catch(error){
               console.error('error posting data',error)
             }
             
          
         if(v.stat){
           nav("/login");
         } 
            }
    return (
        <div className="real">
            <h1 className="dd">SreemanTech Shop</h1><br></br>
            <h1 className="jj">Sign up</h1>
<div className="Loginpage">
    <form onSubmit={Senddata}>
    <label className="lb">Phone : </label>
    <input type="text" name="phone" value={details.phone} onChange={handlechange}/><br/>
    <label className="lb">Email : </label>
    <input type="text" name="mail" value={details.mail} onChange={handlechange}/><br/>
    <label className="lb">Password   : </label>
    <input type="text" name="password" value={details.password} onChange={handlechange} /><br></br>
    <label className="lb">Repeat Password   : </label>
    <input type="text" name="Repeatpass" value={details.Repeatpass} onChange={handlechange}/><br></br>
    <br></br>
    {(details.password!==details.Repeatpass && details.Repeatpass!=="") && <p>Passwords doesn match</p>}
    <button type="submit">Sign up</button>
    <label className="lb"> Already Signed up ?</label>
    <a href="http://localhost:3000/login">Login</a>
    </form>
    
</div>
</div>
);}
export default CreateAccount;