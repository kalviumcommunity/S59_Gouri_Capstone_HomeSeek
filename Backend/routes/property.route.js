const express=require('express');
const Property = require('../module/property.module');
const propertyRouter=express.Router()


propertyRouter.post('/addproperty',async(req,res)=>{
    try{
        const newProperty=new Property(req.body);
        await newProperty.save();
        res.status(201).send("Property added Successfully")
    }
    catch(error){
        res.status(400).send("error adding property")
    }
});


module.exports=propertyRouter