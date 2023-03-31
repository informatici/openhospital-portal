import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
render() {
  return <div>ddd
	<Link to="/">Home</Link>
	<Link to="/about">Informazioni</Link>
  </div>
}
}
export default NavBar;