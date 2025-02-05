const Router = require("express");
const postRouter = Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postCtrl");

postRouter.post("/createPost", createPost);
postRouter.get("/getPosts", getAllPosts);
postRouter.get("/:postId", getPostById);
postRouter.put("/:postId", updatePost);
postRouter.delete("/:postId", deletePost);

module.exports = postRouter;
