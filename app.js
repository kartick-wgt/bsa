const express = require('express')
const app = express();
require('./models/index')
const userCtrl = require('./controllers/usercontrollers')
const port = 8080

app.get('/',(res,resp)=>{
   resp.send('Home page')
})

app.get('/add',userCtrl.addUser)

app.listen(port,()=>{
    console.log('App is listening')
})