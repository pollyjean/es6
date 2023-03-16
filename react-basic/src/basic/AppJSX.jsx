import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "your name";
  const list = ["milk", "strawberry", "banana"];
  return (
    <>
      <h1 className="hellye">{`Hello! ${name}`}</h1>
      <h2>{name}</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{ width: "30vw", height: "30vh" }} src="https://picsum.photos/seed/picsum/536/354" alt="snow mountains" />
    </>
  );
}

export default AppJSX;
