const express = require('express');
const User = require('../module/userData.module');
const Property = require('../module/property.module'); 
const propertyRouter = express.Router();

propertyRouter.get('/property', async (req, res) => {
  try {
    const property = await Property.find();
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

propertyRouter.put('/property/:id', async (req, res) => {
    try {
      const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedProperty) {
        return res.status(404).send({ message: "Property not found" });
      }
      res.status(200).send({ message: "Property updated successfully", updatedProperty });
    } catch (error) {
      console.error(`Error updating property: ${error.message}`, error);
      res.status(400).send({ message: "Error updating property", error: error.message });
    }
  });

module.exports = propertyRouter;
