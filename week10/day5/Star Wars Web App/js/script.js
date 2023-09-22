const findBtn = document.querySelector(".find__btn");
const charName = document.querySelector(".char__name");
const charHeight = document.querySelector(".char__height");
const charGender = document.querySelector(".char__gender");
const charBirthYear = document.querySelector(".char__birthyear");
const charHomeWorld = document.querySelector(".char__homeworld");

const getCharacter = async function (num) {
  fetch(`https://www.swapi.tech/api/people/${num}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => console.log(`We got an error ${error}`));
};

findBtn.addEventListener("click", () => {
  const randomNum = Math.trunc(Math.random() * 83);
  const char = getCharacter(randomNum);
  console.log(char);

  // charName.textContent = char.result.properties.name;
});
