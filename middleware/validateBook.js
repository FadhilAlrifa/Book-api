module.exports = (req, res, next) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: 'Field title dan author wajib diisi!' });
  }
  next();
};
