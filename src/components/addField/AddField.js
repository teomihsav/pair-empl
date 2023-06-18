import React, { useState } from "react";
import DivAdd from "./DivAdd";

const AddField = () => {
	const [add, addSet] = useState([]);

	const addElement = () => {
		addSet((prev) => [...prev, { id: Math.random() }]);
	};

	const removeEl = (id) => {
		const res = add.filter((el) => el.id !== id);
		addSet(res);
	};

	return (
		<div>
			<div
				style={{
					border: "solid 2px lightblue",
					padding: "1rem",
					textAlign: "center",
					cursor: "pointer",
				}}
				onClick={addElement}
			>
				Click me to add
			</div>

			{add.map((el) => (
				<DivAdd key={el.id} id={el.id} removeEl={removeEl} />
			))}
		</div>
	);
};

export default AddField;
