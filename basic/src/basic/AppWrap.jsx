import React from "react";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar image="https://images.unsplash.com/photo-1678806525080-a3ef276e954d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" name="Mountain" size={200} />
        <p>Hello</p>
      </Navbar>
      <Navbar>
        <p>How are you?</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "lightblue" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <>
      <img src={image} alt={name} width={size} height={size} style={{ borderRadius: "50%" }} />
    </>
  );
}
