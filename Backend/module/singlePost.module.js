const mongoose = require('mongoose'); 

const singlePostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ type: String, required: true }],
    bedroom: { type: Number, required: true },
    bathroom: { type: Number, required: true },
    size: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    school: { type: String, required: true },
    bus: { type: String, required: true },
    restaurant: { type: String, required: true },
    description: { type: String, required: true }
});

const SinglePost = mongoose.model('SinglePost', singlePostSchema); 

module.exports = SinglePost; 
