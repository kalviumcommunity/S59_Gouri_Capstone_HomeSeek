const express = require('express');
const User = require('../module/userData.module');
const Property = require('../module/property.module'); 
const propertyRouter = express.Router();

propertyRouter.get('/property', async (req, res) => {
  try {
    const property = await Property.find().select('title');
    res.json({ property });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching property' });
  }
});

propertyRouter.post('/addproperty', async (req, res) => {
  try {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res.status(201).send("Property added successfully");
  } catch (error) {
    console.error(`Error adding property: ${error.message}`, error);
    res.status(400).send({ message: "Error adding property", error: error.message });
  }
});

module.exports = propertyRouter;
