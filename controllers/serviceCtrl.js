const serviceModel = require("../models/serviceModel");

const createService = async (req, res) => {
  try {
    const body = req.body;
    const response = await serviceModel.create(body);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
};
const getServices = async (req, res) => {
  try {
    const response = await serviceModel.find().populate();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createService, getServices };
