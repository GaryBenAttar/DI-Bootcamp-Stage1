import "./Exercise.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

export default function Exercise() {
  return (
    <div>
      {/* Part I: 
      <h1 style={{ color: "red", backgroundColor: "lightblue" }}>Exercise 3</h1> */}
      {/* Part II:*/}
      <h1 style={style_header}>Exercise 3</h1>
      <p className="para">This is a paragraph</p>
      <a href="#">This is a link</a>
      <form>
        <input type="text" />
        <input type="range" min={1} max={10} />
      </form>
      <img src="../logo192.png" />
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
    </div>
  );
}
