const findBtn = document.querySelector(".find__btn");

const getCharacter = async function (num) {
  const starWarsAPI = await fetch(`https://www.swapi.tech/api/people/${num}`);
  console.log(await starWarsAPI.json());
  return await starWarsAPI.json();
};

findBtn.addEventListener("click", () => {
  const randomNum = Math.trunc(Math.random() * 83);
  getCharacter(randomNum);
});
