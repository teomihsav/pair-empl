import React, { useState, useEffect } from "react";

const UseStateCounter = ({ render }) => {
	const [boom, boomSet] = useState(0);
	const [reload, reloadSet] = useState("test");

	useEffect(() => {
		console.log("useEffect..." + boom, "Test: " + reload);
		boomSet((prevState) => prevState + 1);

		return () => {
			console.log("Return Clean...");
			boomSet((prevState) => prevState - 1);
		};
	}, [reload, render]);

	setTimeout(() => {
		console.log("One second passed.");
	}, "1000");
	return (
		<div>
			<button onClick={() => boomSet((prevState) => prevState + 1)}>
				{" "}
				Click + 1
			</button>
			<br />
			<input
				type="text"
				placeholder={reload}
				onChange={(e) => reloadSet(e.target.value)}
			/>
			<br />
			{boom}
			<br />
			{reload}
		</div>
	);
};

export default UseStateCounter;
