import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const li = links.map(link => <a key={link}>{ link }</a>)

  // return <nav>{/* display an <a> tag for each link here */}</nav>;
  return <nav>{ li }</nav>;
}

export default NavBar;
