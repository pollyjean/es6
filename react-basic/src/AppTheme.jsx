import React, { useContext } from "react";
import "./AppTheme.css";
import { DarkModeContext, DarkModeProvider } from "./context/DarkModeContext";

export default function AppTheme() {
  return (
    <>
      <Header />
      <DarkModeProvider>
        <Main />
      </DarkModeProvider>
      <Footer />
    </>
  );
}

function Header() {
  return <header className="header">Header</header>;
}

function Main() {
  return (
    <main className="main">
      Main
      <Profile />
      <Products />
    </main>
  );
}

function Profile() {
  return (
    <div>
      Profile
      <User />
    </div>
  );
}

function User() {
  const { darkMode } = useContext(DarkModeContext);
  const darkModeStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const lightModeStyle = {
    backgroundColor: "white",
    color: "black",
  };
  return (
    <>
      <div>User</div>
      <p>User DarkMode: {darkMode ? <span style={darkModeStyle}>Dark Mode</span> : <span style={lightModeStyle}>Light Mode</span>}</p>
    </>
  );
}

function Products() {
  return (
    <div>
      Products
      <ProductDetail />
    </div>
  );
}

function ProductDetail() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const darkModeStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const lightModeStyle = {
    backgroundColor: "white",
    color: "black",
  };
  return (
    <div>
      Product Detail
      <p>Product DarkMode: {darkMode ? <span style={darkModeStyle}>Dark Mode</span> : <span style={lightModeStyle}>Light Mode</span>}</p>
      <button onClick={() => toggleDarkMode()}>Toggle</button>
    </div>
  );
}

function Footer() {
  return <footer className="footer">Footer</footer>;
}
