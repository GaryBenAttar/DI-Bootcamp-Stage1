// // huck Norris API example

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.chucknorris.io/jokes/random");
// xhr.responseType = "json";
// xhr.send();

// xhr.onload = function () {
//   if (xhr.status !== 200) {
//     alert(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     console.log(`Done: ${xhr.response}`);
//     console.log(`Joke: ${xhr.response.value}`);
//   }
// };

// xhr.onerror = function () {
//   alert("Request failed");
// };

// // Example HTTP Request and Response:

// let xhr = new XMLHttpRequest();

// // xhr.open("GET", "https://zivuch.github.io/data.json");
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.responseType = "json";

// xhr.send();

// xhr.onload = function () {
//   if (xhr.status !== 200) {
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     console.log(xhr.response);
//   }
// };

// xhr.onprogress = function (e) {
//   if (e.lengthComputable) {
//     console.log(`Received ${e.loaded} of ${e.total} bytes`);
//   } else {
//     console.log(`Received ${e.loaded} bytes`);
//   }
// };

// xhr.onerror = function () {
//   console.log("Request failed");
// };

// // Example XML - HTTP Request & Response:

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://zivuch.github.io/emails.xml");

xhr.withCredentials = false;

xhr.responseType = "document";

xhr.send();

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(xhr.response);
    loadXML(xhr.response);
  }
};

xhr.onprogress = function (e) {
  if (e.lengthComputable) {
    console.log(`Received ${e.loaded} of ${e.total} bytes`);
  } else {
    console.log(`Received ${e.loaded} bytes`);
  }
};

xhr.onerror = function () {
  console.log("Request Failed");
};

function loadXML(xmlDoc) {
  var cd = xmlDoc.getElementsByTagName("email");
  for (let i = 0; i < cd.length; i++) {
    console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
    console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
  }
}
