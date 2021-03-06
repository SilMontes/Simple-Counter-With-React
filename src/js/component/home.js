// import React from "react";
// //include images into your bundle

// //create your first component
// export function Home(props) {
// 	return (
// 		<div className="container">
// 			<div>
// 				<i class="fas fa-clock"></i>
// 			</div>

// 			<div className="sixthDigit">{props.sixthOne % 10}</div>
// 			<div className="fifthDigit">{props.fifthhOne % 10}</div>
// 			<div className="fourthDigit">{props.fourthOne % 10}</div>
// 			<div className="thirdDigit">{props.thirdOne % 10}</div>
// 			<div className="secondDigit">{props.secondOne % 10}</div>
// 			<div className="firstDigit">{props.firstOne % 10}</div>
// 		</div>
// 	);
// }
// Home.propType = {
// 	sixthOne: PropTypes.number,
// 	fifthOne: PropTypes.number,
// 	fourthOne: PropTypes.number,
// 	thirdOne: PropTypes.number,
// 	secondOne: PropTypes.number,
// 	firstOne: PropTypes.number
// };
// let counter = 0;
// setInterval(function() {
// 	let sixth = Math.floor(counter / 100000);
// 	let fifth = Math.floor(counter / 10000);
// 	let fourth = Math.floor(counter / 1000);
// 	let third = Math.floor(counter / 100);
// 	let second = Math.floor(counter / 10);
// 	let first = Math.floor(counter / 1);
// 	couter++;
// }, 1000);
