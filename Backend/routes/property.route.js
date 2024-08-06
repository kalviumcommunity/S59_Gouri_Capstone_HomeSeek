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
        console.error(`Error adding propert:${error.message}`,error)
        res.status(400).send({message:"error adding property",error:error.message});
    }
});


module.exports=propertyRouter