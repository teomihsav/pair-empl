import React, { useState } from "react";
import { useFetch } from "./UseFetch";

export const useInput = (initialValue) => {
	const [value, valueSet] = useState(initialValue);
	return [
		{ value, onChange: (e) => valueSet(e.target.value) },
		() => valueSet(initialValue),
	];
};

export const TestFetch = () => {
	const { loading, data, error } = useFetch(
		"https://api.github.com/users/teomihsav"
	);
	console.log(":", loading, data, error);
	if (loading) return <h1>Loading...</h1>;

	return <div>{data && <p>ID:{data.id}</p>}</div>;
};

const UseInput = () => {
	const [inputProps, inputReset] = useInput("");
	const [colorProps, colorReset] = useInput("#cccccc");

	const submit = (e) => {
		e.preventDefault();
		console.log(":", inputProps.value);
		console.log(":", colorProps.value);
		inputReset();
		colorReset();
	};
	return (
		<div>
			<TestFetch />
			<form onSubmit={submit}>
				<input {...inputProps} type="text" />
				<input {...colorProps} type="color" />
				<button>Add</button>
			</form>
		</div>
	);
};

export default UseInput;
