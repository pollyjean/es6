import React from "react";

export default function AppCard({ children }) {
  return (
    <>
      <Card>
        <p>type01</p>
      </Card>
      <Card>
        <h1>Title</h1>
        <p>type02</p>
      </Card>
    </>
  );
}

function Card({ children }) {
  const styleCard = {
    backgroundColor: "#002020",
    borderRadius: "15px",
    color: "white",
    minHeight: "200px",
    maxWidth: "200px",
    margin: "1rem",
    padding: "1rem",
    textAlign: "center",
  };
  return <div style={styleCard}>{children}</div>;
}
