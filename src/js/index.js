//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components

//render your react application
function Home(props) {
	return (
		<div className="container">
			<div>
				<i className="fas fa-clock"></i>
			</div>
			<div className="sixthDigit">{props.sixthOne % 10}</div>
			<div className="fifthDigit">{props.fifthOne % 10}</div>
			<div className="fourthDigit">{props.fourthOne % 10}</div>
			<div className="thirdDigit">{props.thirdOne % 10}</div>
			<div className="secondDigit">{props.secondOne % 10}</div>
			<div className="firstDigit">{props.firstOne % 10}</div>
		</div>
	);
}
Home.propTypes = {
	sixthOne: PropTypes.number,
	fifthOne: PropTypes.number,
	fourthOne: PropTypes.number,
	thirdOne: PropTypes.number,
	secondOne: PropTypes.number,
	firstOne: PropTypes.number
};
let counter = 0;
setInterval(function() {
	let sixth = Math.floor(counter / 100000);
	let fifth = Math.floor(counter / 10000);
	let fourth = Math.floor(counter / 1000);
	let third = Math.floor(counter / 100);
	let second = Math.floor(counter / 10);
	let first = Math.floor(counter / 1);
	counter++;

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
