const { Router } = require("express");
const {
  getBooks,
  getBookReviews,
  modifyReview,
  deleteReview,
} = require("../controllers/bookController");
const { authenticate } = require("../middlewares/userMiddleware");

const bookRouter = Router();

bookRouter.get("/", getBooks);
bookRouter.get("/isbn/:isbn", getBooks);
bookRouter.get("/author/:author", getBooks);
bookRouter.get("/title/:title", getBooks);

bookRouter.get("/reviews/:isbn", getBookReviews);
bookRouter.post("/reviews/:isbn", authenticate, modifyReview);
bookRouter.put("/reviews/:isbn", authenticate, modifyReview);
bookRouter.delete("/reviews/:isbn", authenticate, deleteReview);

module.exports = { bookRouter };