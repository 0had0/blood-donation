import React, { useState, useEffect } from "react";
import styled from "styled-components";
import bkg from "./bkg.svg";

import TopBar from "../TopBar";
import Header from "../Header";
import BloodTypeList from "../BloodTypeList";
import BloodSign from "../BloodSign";
import YouCanGive from "../YouCanGive";

const Button = styled.button`
	color: white;
	background: red;
	border-radius: 13px;
	font-style: normal;
	font-weight: 300;
	font-size: 24px;
	text-align: center;
	border: 0;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	outline: none;
	padding: 10px;
`;

const Text = styled.h2`
	color: #ff0000;
	font-style: normal;
	font-weight: 200;
	font-size: 24px;
	background: white;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 9px;
	padding: 2px 6px;
`;

const Wrapper = styled.div`
	font-family: "Roboto", sans-serif;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-image: url(${bkg});
	background-size: contain;
	background-position: bottom;
	background-repeat: no-repeat;
`;
function App() {
	const [text, setText] = useState("What is your blood type?");
	const [type, setType] = useState(false);
	const [sign, setSign] = useState(false);
	const handleType = t => {
		setType(t);
	};
	const handleSign = s => {
		if (!type) return;
		setSign(s);
	};
	useEffect(() => {
		if (type && sign) setText(`${type + sign} can give to :`);
	}, [type, sign]);
	return (
		<Wrapper>
			<TopBar />
			<Header text={text} />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					alignItems: "center",
					height: "40%"
				}}
			>
				{type && sign ? (
					<React.Fragment>
						<YouCanGive type={type + sign} />
						<Button
							onClick={() => {
								setText("What is your blood type?");
								setSign(false);
								setType(false);
							}}
						>
							Back
						</Button>
					</React.Fragment>
				) : (
					<React.Fragment>
						<BloodTypeList handleClick={handleType} />
						<Text>Positive or Negative?</Text>
						<div>
							<BloodSign
								text="+"
								onClick={() => handleSign("+")}
							/>
							<BloodSign
								text="-"
								onClick={() => handleSign("-")}
							/>
						</div>
					</React.Fragment>
				)}
			</div>
		</Wrapper>
	);
}

export default App;
