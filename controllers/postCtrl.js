const Post = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const body = req.body;
    const post = await Post.create(body);
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating post" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate();
    res.status(200).send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching posts" });
  }
};

const getPostById = async (req, res) => {
  try {
    const postId = req.params;
    const post = await Post.findById(postId).populate();
    if (!post) {
      return res.status(404).send({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching post" });
  }
};

const updatePost = async (req, res) => {
  try {
    const postId = req.params;
    const { title, content, imageUrl } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, imageUrl },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).send({ message: "Post not found" });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating post" });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params;
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).send({ message: "Post not found" });
    }

    res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error deleting post" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
