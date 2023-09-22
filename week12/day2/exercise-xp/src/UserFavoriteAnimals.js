export default function UserFavoriteAnimals({ favAnimals }) {
  return (
    <div>
      {favAnimals.map((animal) => {
        return <li>{animal}</li>;
      })}
    </div>
  );
}
