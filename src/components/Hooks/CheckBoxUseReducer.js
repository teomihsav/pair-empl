import React, { useReducer } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const CheckBoxUseReducer = () => {
	const [check, toggle] = useReducer((check) => !check, false);

	return (
		<div>
			<input color="red" type="checkbox" value={check} onChange={toggle} />
			<p>{check ? "checked" : "not checked"}</p>
		</div>
	);
};

export default CheckBoxUseReducer;
