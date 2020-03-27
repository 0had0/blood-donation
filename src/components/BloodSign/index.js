import React from "react";
import styled from "styled-components";

const Button = styled.button`
	transition: all 1s ease;
	background: #ff0000;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border: 0;
	border-radius: 50%;
	font-style: normal;
	font-weight: bold;
	font-size: 30px;
	text-align: center;
	margin: 3px;
	color: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	height: 65px;
	width: 65px;
	outline: none;
`;
function BloodSign({ text, onClick, outlined }) {
	return <Button onClick={onClick}>{text}</Button>;
}
export default BloodSign;
