import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="counter">
        <span className="number">
          {count}/{total}
        </span>
        <button
          className="button"
          onClick={() => {
            setCount((prev) => prev + 1);
            onClick();
          }}
        >
          Add +
        </button>
      </div>
    </div>
  );
}
