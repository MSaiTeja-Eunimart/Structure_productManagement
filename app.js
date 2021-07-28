const express = require('express');
const app = express();
const productRoute = require('./app/routes/productRoutes');

app.use(express.json())

app.use('/product',productRoute);

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})