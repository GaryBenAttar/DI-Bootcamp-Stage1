const axios = require("axios");

const fetchPosts = async function () {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts/")
    .then((response) => console.log(response));
};

module.exports = { fetchPosts };
