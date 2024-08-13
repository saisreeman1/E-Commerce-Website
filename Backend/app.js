const products = require('./Products')
const mongoose=require('mongoose')
const cors=require('cors')
var express=require('express')
const app=express()
const Arr=[];
app.use(cors())
app.use(express.json())
app.use(express.static(__dirname+'./products'))
mongoose.connect('mongodb://localhost:27017/Customer-Data',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('Conned to Mongodb'))
.catch(err=> console.error('could not connect to Mongodb',err))
const itemschema=new mongoose.Schema({
    phone:{type:String,requied:true},
    mail:{type:String,requied:true},
    password:{type:String,requied:true}
})
const customerdetail=mongoose.model('customerdetail',itemschema);
app.post('/Create-account',async (req,res)=>{
    const {phone,mail,password}=req.body
    const newdata={phone,mail,password}
    console.log("esssf",newdata)
    const newitem=new customerdetail(newdata);
    try{
        const saveitem=await newitem.save();
        res.status(201).json({stat:true})
    }
    catch(err){
        res.status(400)
    }
    
;})
app.get('/',(req,res)=>{
    
    console.log("Server starteing at 5003");
    console.log(products);
res.json(products)
})
app.get('/img/:id',(req,res)=>{
    res.setHeader('content-type',"image/png")
    console.log("Server starteing at 5000");
    //console.log(req.params)
  
res.sendFile(req.params.id+'.png',{root:__dirname+'/products'})
})

app.post('/login',async(req,res)=>{
    const {mail,password}=req.body
    const newdat={mail,password}
   
   try{
    const users= await customerdetail.findOne({mail});
    console.log("users here",users)
    if(!users){
        res.json({stat:false,message:"credentials doesnt exist"})
    }
    else if(users.password===password){
        res.status(201).json({stat:true})
    }
    else{
        res.json({stat:false,message:"password or mail wrong"})
    }
   }
   catch{
    console.error("error while recieving",error)
   }
    
;})
app.listen(5000)