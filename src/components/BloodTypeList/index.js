import React, { useState } from "react";
import styled from "styled-components";

import BloodType from "../BloodType";

const Wrapper = styled.div`
	display: flex;
	width: 250px;
	justify-content: space-between;
`;
function BloodTypeList({ handleClick }) {
	const types = ["O", "A", "B", "AB"];
	const [outlined, setOutlined] = useState(-1);
	return (
		<Wrapper>
			{types.map((type, i) => (
				<BloodType
					key={i}
					text={type}
					outlined={outlined === i}
					onClick={() => {
						handleClick(type);
						setOutlined(i);
					}}
				/>
			))}
		</Wrapper>
	);
}
export default BloodTypeList;
