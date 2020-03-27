import React from "react";
import styled from "styled-components";

const Text = styled.h2`
	font-style: normal;
	font-weight: 200;
	font-size: 18px;
	text-align: center;
	color: ${props => (props.red ? "red" : "#000000")};
	display: flex;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
function TopBar() {
	return (
		<Wrapper>
			<Text>
				Made with&nbsp;
				<span className="material-icons md-18" style={{ color: "red" }}>
					favorite
				</span>
				&nbsp; By&nbsp;
				<Text
					as="a"
					href="https://0had0.github.io/portfolio"
					target="_blank "
					red
				>
					Hadi Houssainy
				</Text>
			</Text>
			<div style={{ display: "flex" }}>
				<Text as="a" href="#" target="_blank">
					Visit&nbsp;
				</Text>
				<span className="material-icons md-24">code</span>
			</div>
		</Wrapper>
	);
}

export default TopBar;
