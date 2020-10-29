import React, { Component } from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoLists</h1>
      <Link to="/" style={linkStyle}>
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
const headerStyle = {
  background: "rebeccapurple",
  color: "white",
  padding: "10px",
  textAlign: "center",
};
const linkStyle = {
  color: "white",
  textDecoration: "none",
};
export default Header;
