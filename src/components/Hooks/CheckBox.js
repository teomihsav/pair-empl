import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const CheckBox = () => {
	const [check, checkSet] = useState(false);

	// const CheckBox = styled.input`
	// 	background-color: ${(props) => props.color};
	// `;

	return (
		<div>
			<input
				color="red"
				type="checkbox"
				value={check}
				onChange={() => checkSet((check) => !check)}
			/>
			<p>{check ? "checked" : "not checked"}</p>
		</div>
	);
};

export default CheckBox;
