// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

// Search bar:

const form = document.forms[0];
let searchInput = form.elements.search;
let deleteBtns = [];
form.addEventListener("submit", searchGIF);

function searchGIF(e) {
  e.preventDefault();

  // Getting JSON objects from GIPHY API:

  let xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://api.giphy.com/v1/gifs/search?q=${searchInput.value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
  );

  xhr.responseType = "json";

  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    } else {
      appendRandomGIF(xhr.response);
    }
  };

  xhr.onerror = function () {
    console.log("Request failed");
  };

  function appendRandomGIF(JSONobj) {
    const div = document.createElement("div");
    div.setAttribute("class", "gif__box");

    const iframe = document.createElement("iframe");
    let randomNum = Math.trunc(Math.random() * 50);
    iframe.setAttribute("src", JSONobj.data[randomNum].embed_url);
    iframe.setAttribute("alt", "Sun GIF");
    iframe.setAttribute("frameborder", 0);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete__btn");
    deleteBtn.textContent = "Delete";

    document.body.appendChild(div);
    div.appendChild(iframe);
    div.appendChild(deleteBtn);

    // Delete button feature:

    deleteBtns.push(deleteBtn);
    for (let i = 0; i < deleteBtns.length; i++) {
      deleteBtns[i].addEventListener("click", () => {
        deleteBtns[i].parentNode.remove();
      });
    }
  }
}

// Delete All button:

const deleteAllBtn = document.querySelector("#delete__all");
deleteAllBtn.addEventListener("click", deleteAllGIF);

function deleteAllGIF() {
  do {
    document.querySelector(".gif__box").remove();
  } while (document.querySelector(".gif__box") !== null);
}

// Delete buttons:
