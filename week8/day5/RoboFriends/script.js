const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "bret.png",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "antonette.png",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "samantha.png",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "karianne.png",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "kamren.png",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "leopoldo.png",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "elwyn.png",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "maxime.png",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "delphine.png",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "moriah.png",
  },
];

const robotCard = document.querySelector(".robots__cards");

robots.forEach((obj) => {
  const div = document.createElement("div");
  div.setAttribute("class", `robot`);
  div.setAttribute("id", `robot__id__${obj.id}`);

  const image = document.createElement("img");
  image.setAttribute("src", `img/${obj.image}`);
  image.setAttribute("alt", obj.username);
  image.setAttribute("class", "robot__avatar");

  const name = document.createElement("h3");
  name.setAttribute("class", "robot__name");
  name.textContent = `${obj.name}`;

  const email = document.createElement("p");
  email.setAttribute("class", "robot__email");
  email.textContent = `${obj.email}`;

  robotCard.appendChild(div);
  div.appendChild(image);
  div.appendChild(name);
  div.appendChild(email);
});

// Search:

const form = document.forms[0];
const searchInput = form.elements.search;
let robots__cards = document.querySelectorAll(".robot");

searchInput.addEventListener("keyup", (e) => {
  let resultRobots = robots.filter(
    (v) => v.name.search(new RegExp(searchInput.value, "i")) != -1
  );

  robots.forEach((obj) => {
    !resultRobots.includes(obj)
      ? robots__cards[obj.id - 1].classList.add("not__displayed")
      : robots__cards[obj.id - 1].classList.remove("not__displayed");
  });
});
