module.exports = (err, req, res, next) => {
  console.error("ERROR DETAIL:", error);
  res.status(500).json({ message: "Terjadi kesalahan pada server" });
};
