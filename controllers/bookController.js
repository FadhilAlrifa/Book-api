let books = [];
let nextId = 1;

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.createBook = (req, res) => {
  const { title, author, year } = req.body;
  const newBook = { id: nextId++, title, author, year: year || null };
  books.push(newBook);
  res.status(201).json(newBook);
};

exports.getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
  res.json(book);
};

exports.updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });

  const { title, author, year } = req.body;
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  if (year !== undefined) book.year = year;
  
  res.json(book);
};

exports.deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) return res.status(404).json({ message: 'Buku tidak ditemukan' });

  const deleted = books.splice(index, 1)[0];
  res.json({ message: 'Buku dihapus', book: deleted });
};
