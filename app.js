const express = require('express');
const app = express();
const productRoute = require('./app/routes/productRoutes');
const path = require('path')

app.use(express.json())

app.use('/product',productRoute);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.listen(3000,()=>{
    console.log("Server started at port 3000");
})