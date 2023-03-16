import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((prev) => prev + 1);
  return (
    <>
      <div>
        Total Counter : {count} {count > 10 ? "🔥" : "❄"}
      </div>
      <div className="container">
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </>
  );
}
