const postModel = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const body = req.body;
    const response = await postModel.create(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getPosts = async (req, res) => {
  try {
    const response = await postModel.find().populate();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = { createPost, getPosts };
