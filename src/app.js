const express = require("express");
const session = require("express-session");
const { userRouter } = require("./routes/userRouter");
const { bookRouter } = require("./routes/bookRouter");

const app = express();

app.use(express.json()); 
app.use(
  session({
    // Middleware to handle sessions
    secret: "fingerpint",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/user", userRouter);
app.use("/book", bookRouter);

const PORT = 5000; // Define the port number

app.listen(PORT, () => console.log("Server is running")); // Start the server and listen on the specified port
