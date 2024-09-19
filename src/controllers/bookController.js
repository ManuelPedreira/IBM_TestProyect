let books = [
  {
    isbn: 1,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    reviews: [],
  },
  {
    isbn: 2,
    title: "1984",
    author: "George Orwell",
    reviews: [],
  },
  {
    isbn: 3,
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    reviews: [],
  },
  {
    isbn: 4,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    reviews: [],
  },
  {
    isbn: 5,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    reviews: [],
  },
  {
    isbn: 6,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    reviews: [],
  },
  {
    isbn: 7,
    title: "Ulysses",
    author: "James Joyce",
    reviews: [],
  },
  {
    isbn: 8,
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    reviews: [],
  },
  {
    isbn: 9,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    reviews: [],
  },
  {
    isbn: 10,
    title: "The Odyssey",
    author: "Homer",
    reviews: [],
  },
];

const getBooks = (req, res) => {
  const { isbn, author, title } = req.params;

  if (!isbn && !author && !title) return res.json({ books });

  let filteredBooks;
  if (isbn) {
    filteredBooks = [books.find((book) => book.isbn === Number(isbn))];
  } else if (author) {
    filteredBooks = books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  } else if (title) {
    filteredBooks = books.filter((book) => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  if (filteredBooks?.length) return res.json({ books: filteredBooks });
  else return res.status(404).json({ message: "Not found" });
};

const getBookReviews = (req, res) => {
  const isbn = req.params.isbn;
  const filteredBooks = books.find((book) => book.isbn === Number(isbn));

  if (filteredBooks) return res.json(filteredBooks.reviews);
  else return res.status(404).json({ message: "Not found" });
};
const modifyReview = (req, res) => {
  const isbn = req.params.isbn;
  const comment = req.body.review;
  const username = req.user.username;

  const bookIndex = books.findIndex((book) => book.isbn === Number(isbn));

  if (bookIndex >= 0) {
    const filteredBook = books[bookIndex];
    moddiedBook = {
      ...filteredBook,
      reviews: [
        ...filteredBook.reviews.filter((review) => review.username !== username),
        { username, comment },
      ],
    };
    books[bookIndex] = moddiedBook;

    return res.send(`The review for the book with ISBN ${isbn} has been added/updated`);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};
const deleteReview = (req, res) => {
  const isbn = req.params.isbn;
  const username = req.user.username;

  const bookIndex = books.findIndex((book) => book.isbn === Number(isbn));

  if (bookIndex >= 0) {
    const filteredBook = books[bookIndex];

    const existReview = filteredBook.reviews.find((review) => review.username === username);

    if (existReview) {
      moddiedBook = {
        ...filteredBook,
        reviews: [...filteredBook.reviews.filter((review) => review.username !== username)],
      };
      books[bookIndex] = moddiedBook;

      return res.send(`The review for the book with ISBN ${isbn} has been deleted`);
    } else {
      return res.status(404).send(`Review not found`);
    }
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

module.exports = {
  getBooks,
  getBookReviews,
  modifyReview,
  deleteReview,
};
