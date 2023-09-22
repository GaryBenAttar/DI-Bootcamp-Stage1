import UserFavoriteAnimal from "./UserFavoriteAnimals";
import Exercise from "./Exercise3";

const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

export default function App() {
  const myelement = <h1>I love JSX!</h1>;
  const sum = 5 + 5;

  return (
    <div>
      <p>Hello React</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimal favAnimals={user.favAnimals} />
      <Exercise />
    </div>
  );
}
