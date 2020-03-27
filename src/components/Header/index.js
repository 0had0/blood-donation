import React from "react";
import styled from "styled-components";

import blood from "./blood.svg";

const Text = styled.h2`
	font-style: normal;
	font-weight: 300;
	font-size: 2rem;
	text-align: center;
	color: #000000;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

function Header({ text }) {
	text = text ? text : "You forgot the text prop";
	let edited = text.split(" ");
	return (
		<Wrapper>
			<img src={blood} alt="blood" height="100px" width="auto" />
			<Text>
				{edited.slice(0, edited.length - 2).join(" ")}
				&nbsp;
				<span style={{ color: "red" }}>
					{edited[edited.length - 2]}
					&nbsp;
				</span>
				{edited.slice(edited.length - 1, edited.length).join(" ")}
			</Text>
		</Wrapper>
	);
}

export default Header;
