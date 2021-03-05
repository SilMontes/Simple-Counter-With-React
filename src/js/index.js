//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
let counter = 0;
setInterval(function() {
	let sixth = Math.floor(counter / 100000);
	let fifth = Math.floor(counter / 10000);
	let fourth = Math.floor(counter / 1000);
	let third = Math.floor(counter / 100);
	let second = Math.floor(counter / 10);
	let first = Math.floor(counter / 1);
	couter++;

	ReactDOM.render(
		<Home
			sixthOne={sixth}
			fifthOne={fifth}
			fourthOne={fourth}
			thirdOne={third}
			secondOne={second}
			firstOne={first}
		/>,
		document.querySelector("#app")
	);
}, 1000);
