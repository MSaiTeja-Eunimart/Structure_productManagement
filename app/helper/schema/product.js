let productschema={
    type:'object',
    required:['id','productName','productType'],
    properties:{
        id:{
            type:'string'
        },
        productName:{
            type:'string'
        },
        productType:{
            type:'string'
        }
    }
}
console.log("In validation")