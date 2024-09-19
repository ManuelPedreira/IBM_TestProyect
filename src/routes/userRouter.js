const { Router } = require("express");
const { login, addUser, checkLoging } = require("../controllers/userController");
const { authenticate } = require("../middlewares/userMiddleware");
const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", addUser);
userRouter.get("/", authenticate, checkLoging);

module.exports = { userRouter };
