const mongoose=require('mongoose')

const propertySchema= new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    bedroom: { type: Number, required: true },
    bathroom: { type: Number, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
})

const Property=mongoose.model("property",propertySchema);

module.exports=Property;