import React from "react";
//include images into your bundle

//create your first component
export function Home(props) {
	return (
		<div className="container">
			<div>
				<i class="fas fa-clock"></i>
			</div>
			<div className="sixthDigit">{props.sixthOne}</div>
			<div className="fifthDigit">{props.fifthhOne}</div>
			<div className="fourthDigit">{props.fourthOne}</div>
			<div className="thirdDigit">{props.thirdOne}</div>
			<div className="secondDigit">{props.secondOne}</div>
			<div className="firstDigit">{props.firstOne}</div>
		</div>
	);
}
Home.propType = {
	sixthOne: PropTypes.number,
	fifthOne: PropTypes.number,
	fourthOne: PropTypes.number,
	thirdOne: PropTypes.number,
	secondOne: PropTypes.number,
	firstOne: PropTypes.number
};
