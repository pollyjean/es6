import React, { useState } from "react";
import "./AppXY.css";

// export default function AppXY() {
//   const [pointX, setPointX] = useState(0);
//   const [pointY, setPointY] = useState(0);
//   const handleMousePosition = (event) => {
//     setPointX(event.clientX - 15);
//     setPointY(event.clientY - 15);
//   };
//   return (
//     <div className="container" onMouseMove={handleMousePosition}>
//       <div className="pointer" style={{ left: pointX, top: pointY }} />
//     </div>
//   );
// }

// refactoring?
export default function AppXY() {
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });
  const handleMousePosition = (e) => {
    // setPointerPos({ x: e.clientX, y: e.clientY });
    // setPointerPos((prev) => ({ x: e.clientX, y: prev.y }));
    setPointerPos((prev) => ({ ...prev, x: e.clientX }));
  };
  let stylePos = { transform: `translate(${pointerPos.x}px, ${pointerPos.y}px)` };
  return (
    <div className="container" onPointerMove={handleMousePosition}>
      <div className="pointer" style={stylePos} />
    </div>
  );
}
