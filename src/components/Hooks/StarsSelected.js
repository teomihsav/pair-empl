import React, { useState } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const StarsSelected = () => {
	const Star = ({ selected = false, onSelect }) => (
		<FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
	);

	const StarRating = ({ totalStars = 5 }) => {
		const [selectedStars, selectedStarsSet] = useState(false);
		return (
			<div>
				{[...Array(totalStars)].map((el, i) => (
					<Star
						key={i}
						selected={selectedStars > i}
						onSelect={() => selectedStarsSet(i + 1)}
					/>
				))}
				<p>
					{selectedStars} of {totalStars}
				</p>
			</div>
		);
	};

	return (
		<div>
			<StarRating totalStars={10} />
		</div>
	);
};

export default StarsSelected;
