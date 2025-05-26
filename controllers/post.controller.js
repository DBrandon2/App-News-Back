const Post = require("../models/Post");

const addPost = async (req, res) => {
  console.log(req.body);
  try {
    // on insère la dépense en BDD
    const post = new Post({
      //
      ...req.body,
      author: req.body.user,
      //
    });
    await post.save();

    // on la retourne à l'application WEB
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
  }
};

const getPosts = async (req, res) => {



  const author = req.body.user.name;
  try {
    const posts = await Post.find({ author });
    console.log(posts);

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addPost, getPosts };
