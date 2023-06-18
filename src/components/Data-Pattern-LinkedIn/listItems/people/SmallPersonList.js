import React from "react";

const SmallPersonList = ({ person }) => {
	const { name, age } = person;
	return (
		<div>
			Name: {name}, Age: {age}{" "}
		</div>
	);
};

export default SmallPersonList;
