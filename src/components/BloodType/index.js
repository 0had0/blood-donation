import React from "react";
import styled from "styled-components";

const Button = styled.button`
	transition: all 0.6s ease;
	background: #ffffff;
	border: ${props =>
		props.outlined
			? "4px solid #ff0000"
			: "3px solid rgba(255, 0, 0, 0.34)"};
	box-sizing: border-box;
	border-radius: 13px;
	font-style: normal;
	font-weight: 200;
	font-size: 24px;
	text-align: center;
	color: #ff0000;
	margin-left: 3px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	height: 55px;
	width: 55px;
	outline: none;
`;
function BloodType({ text, onClick, outlined }) {
	return (
		<Button onClick={onClick} outlined={outlined}>
			{text}
		</Button>
	);
}
export default BloodType;
