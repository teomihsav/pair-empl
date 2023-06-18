import React from "react";

const isObject = (x) => typeof x === "object" && x !== null;
const RercursionCompObjectDisplay = ({ data }) => {
	if (!isObject(data)) return <li>{data}</li>;

	return (
		<div>
			{Object.entries(data).map(([key, value]) => (
				<li>
					{key}:
					<ul>
						<RercursionCompObjectDisplay data={value} />
					</ul>
				</li>
			))}
		</div>
	);
};

export default RercursionCompObjectDisplay;
