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
const getOneService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const service = await serviceModel.findById(serviceId).populate();
    res.send(service);
  } catch (error) {
    res.send(error);
  }
};
const deleteService = async (req, res) => {
  try {
    const serviceId = req.params;
    const deletedService = await serviceModel.findByIdAndDelete(serviceId);
    if (!deletedService) {
      return res.send("Service not found");
    }
    res.send("Service deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
const updateService = async (req, res) => {
  try {
    const serviceId = req.params;
    const { infoImg, subTitle, caption, price } = req.body;

    const updatedService = await Post.findByIdAndUpdate(
      serviceId,
      { infoImg, subTitle, caption, price },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).send({ message: "Service not found" });
    }

    res.status(200).json(updatedService);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating service" });
  }
};
module.exports = {
  createService,
  getServices,
  getOneService,
  deleteService,
  updateService,
};
