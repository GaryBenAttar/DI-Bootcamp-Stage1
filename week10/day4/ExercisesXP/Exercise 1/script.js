// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function starWarsAPI() {
  let swapi = await fetch("https://www.swapi.tech/api/starships/9/");
  console.log(await swapi.json());
}

starWarsAPI();
