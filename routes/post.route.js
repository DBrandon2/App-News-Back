const { addPost, getPosts } = require("../controllers/post.controller");

const router = require("express").Router();

router.post("/", addPost);

router.post("/getPosts", getPosts)

module.exports = router;

// localhot:3000/expenses
