const express = require('express');
const route=express.Router();
const productService = require('../services/productService');
const productSchema = require('../helper/schema/product')
const validate = require('../helper/requestValidator')
 
const product = new productService();

route.get("/",async(req,res)=>{
    product.getAllProducts(req,res);
})

route.get("/:id",async(req,res)=>{
    product.getProductById(req,res);
})

route.post("/",validate({body:productSchema}),async(req,res)=>{
    product.addProduct(req,res);
})

route.delete("/:id",async(req,res)=>{
    product.deleteProduct(req,res);
})

route.patch('/:id',validate({body:productSchema}),async(req,res)=>{
    product.updateProduct(req,res);
})

module.exports=route;