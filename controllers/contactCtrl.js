const contactModel = require("../models/contactModel");

const createContact = async (req, res) => {
  try {
    const body = req.body;
    const contact = await contactModel.create(body);
    res.send(contact);
  } catch (error) {
    console.log(error);
  }
};
const getContact = async (req, res) => {
  try {
    const response = await contactModel.find();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createContact, getContact };
