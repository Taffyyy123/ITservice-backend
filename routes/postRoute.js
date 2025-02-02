const Router = require("express");
const postRouter = Router();
const { createPost, getPosts } = require("../controllers/postCtrl");

postRouter.post("/createPost", createPost);
postRouter.post("/getPosts", getPosts);

module.exports = postRouter;
