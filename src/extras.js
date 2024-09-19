const axios = require("axios").default;
const baseUrl = "http://localhost:5000/book/";

////////////////////////////TEST1///////////////////////////////////////
const test1AsyncCallback = () => {
  const req = axios.get(baseUrl);
  req.then((response) => {
    console.log("Get all books - Using async callback function", response.data);
  });
};
setTimeout(test1AsyncCallback, 5000);

////////////////////////////TEST2///////////////////////////////////////
const test2AxiosPromise = new Promise((resolve, reject) => {
  const req = axios.get(`${baseUrl}/isbn/1`);
  req.then((response) => resolve(response.data)).catch((error) => reject(error));
});

test2AxiosPromise.then((response) => {
  console.log("Search by ISBN - Using Promises", response);
});

////////////////////////////TEST3///////////////////////////////////////
const test3 = (author) => {
  axios.get(`${baseUrl}/author/${author}`).then((response) => {
    console.log("Search by Author", response.data);
  });
};
test3("tolkien");

////////////////////////////TEST4///////////////////////////////////////
const test4 = (title) => {
  axios.get(`${baseUrl}title/${title}`).then((response) => {
    console.log("Search by Title", response.data);
  });
};
test4("time");

module.exports = { test1AsyncCallback, test2AxiosPromise, test3, test4 };
