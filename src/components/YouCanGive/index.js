import React from "react";
import styled from "styled-components";

const To = type => {
	switch (type) {
		case "O+": {
			return "A+, B+, AB+, O+";
		}
		case "O-": {
			return "A+, A-, B+, B-, AB+, AB-, O+, O-";
		}
		case "A+": {
			return "A+, AB+";
		}
		case "A-": {
			return "A-, A+, AB-, AB+";
		}
		case "B+": {
			return "B+, AB+";
		}
		case "B-": {
			return "B+, B-, AB+, AB-";
		}
		case "AB+": {
			return "AB+";
		}
		case "AB-": {
			return "AB-";
		}
		default: {
			return "You can give aliens :) !";
		}
	}
};

const Wrapper = styled.div`
	font-style: normal;
	font-weight: 300;
	font-size: 30px;
	text-align: center;
	color: #ff0000;
`;
function YouCanGive({ type }) {
	return <Wrapper>{To(type)}</Wrapper>;
}

export default YouCanGive;
