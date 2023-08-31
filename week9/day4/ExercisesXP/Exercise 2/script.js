// Instructions

// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"
);

xhr.responseType = "json";

xhr.send();

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(xhr.response);
  }
};

xhr.progress = function (e) {
  if (e.lengthComputable) {
    console.log(`Received ${e.loaded} of ${e.total}`);
  } else {
    console.log(`Received ${e.loaded}`);
  }
};

xhr.onerror = function () {
  console.log("Request Failed");
};

// Basically the exact same code as the Exercise 1 with the word sun instead of hilarious after the ?q= in the URL to get the sun related gifs.
// Then we add &limit=10&offset=2 to have 10 result starting position 2
