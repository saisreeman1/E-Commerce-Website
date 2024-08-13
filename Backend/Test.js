
var express=require('express')
const app=express()
app.use(express.static(__dirname+'./products'))

app.listen(5000)