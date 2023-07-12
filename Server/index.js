const express =  require('express');

const customerRelatedRoutes = require('./routes/customer');

const app = express();

app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use(express.json()); 

app.use('/customer',customerRelatedRoutes)
app.listen(9999,()=>{console.log("Server Started at 9999")})