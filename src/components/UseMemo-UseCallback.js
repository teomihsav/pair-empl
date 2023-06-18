import React, { useState, useMemo, useCallback, useEffect } from "react";

// Two
const testRefValues = () => {
	return ["test", "testOne"];
};

const UseMemo = () => {
	// One
	const expensiveCount = useCallback((num) => {
		console.log("Recalculate num:");
		return (num - 1) * Math.random();
	}, []);

	const [num, numSet] = useState("");
	const [inputValue, inputValueSet] = useState("");

	// One
	const exp = useMemo(() => expensiveCount(num), [num, expensiveCount]);

	// Two
	const refValuesTest = useMemo(() => testRefValues(), []);
	useEffect(() => {
		console.log("Ref values changed:");
	}, [refValuesTest]);

	return (
		<div>
			{exp}
			<p>Num set:</p>
			<input
				type="text"
				value={num}
				onChange={(e) => numSet(Number(e.target.value))}
			/>
			<p>Enter test text</p>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => inputValueSet(e.target.value)}
			/>
			{inputValue}
		</div>
	);
};

export default UseMemo;
