# Manuel Pedreira IBM Exress final project

Instructions to start the server:
```
npm i
npm run start
```

The server will wake up at http://localhost:5000

You can use the calls inside ./src/request to test the API easier with "REST Client" VSC extension.

## The API calls are:
```javascript
// ---------- General users -------------

// Get the book list available in the shop.
GET http://localhost:5000/book/

// Get the books based on ISBN.
GET http://localhost:5000/book/isbn/1

// Get all books by Author.
GET http://localhost:5000/book/author/tolkien

// Get all books based on Title 
GET http://localhost:5000/book/title/time

// Get book Review.
GET http://localhost:5000/book/reviews/1

// Register New user 
POST http://localhost:5000/user/register

// Login as a Registered user
POST http://localhost:5000/user/login

// ---------- Registered Users-------------

// Add/Modify a book review.
POST http://localhost:5000/book/reviews/1 

// Delete book review added by that particular user 
DELETE http://localhost:5000/book/reviews/1
```

## To test the last 4 tasks (10 to 13)
```
cd src
node extras.js 
```