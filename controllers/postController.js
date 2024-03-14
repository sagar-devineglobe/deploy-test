const getPosts = async (req, res, next) => {
  try {
    res.status(200).json({ sucess: true, data: [] });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: "Show all posts" });
  }
};

module.exports = {
  getPosts,
};
