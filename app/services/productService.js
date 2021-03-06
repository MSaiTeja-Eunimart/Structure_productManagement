let Product = require('../models/product');
// const url = require('url');
// const fs = require('fs');    
// const path = require('path');

class product{

    async getAllProducts(req,res){
        try{
            res.send(Product);
        }
        catch(err)
        {
            res.send(err);
        }
        // let data = fs.readFileSync('Student.json');
        // let productdata = JSON.stringify(data);
        // res.send(productdata);
    }


    async getProductById(req,res){
        for(let i=0;i<Product.length;i++)
        {
            if(Product[i]['id'] == req.params.id)
            {
                res.send(Product[i]);
                return console.log("Product fetched");
            }
        }
        res.send("Product id not available");
    }


     async addProduct(req,res){
        const pro=req.body;
            if(Product.length==0)
            {
                Product.push({...pro});
                res.send("Added Product");
            }
            for(let i=0;i<Product.length;i++)
            {
                if(req.body.id == Product[i].id)
                    res.send("Product id already taken");

                else if(req.body.productName == Product[i].productName)
                    res.send("Product already present");

                else
                {
                    Product.push({...pro});
                    res.send("Added Product");
                }
            }
    }


    async deleteProduct(req,res){
        // Product = Product.filter((pro)=>pro.id !== req.params.id);
        var filtered=Product.filter(function(pro){
            return pro.id != req.params.id;
        })
        try{
            console.log("Product deleted");
            res.send("Product Deleted");
            Product = filtered;
            console.log(Product)
        }
        catch(err)
        {
            res.send("Failed to delete the product");
        }
    }


    async updateProduct(req,res){
        try{
            const pro=Product.find((pro)=>pro.id == req.params.id);
            pro.productName = req.body.productName;
            pro.productType = req.body.productType;
            console.log("Product Updated");
            res.send("Updated the product");
        }
        catch(err)
        {
            res.send("Failed to update the product")
        }
    }

}

module.exports=product;