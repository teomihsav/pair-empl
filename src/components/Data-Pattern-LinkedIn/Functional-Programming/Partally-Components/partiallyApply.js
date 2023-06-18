import { Component } from "react";

export const partiallyApply = (Component, partialProps) => {
	return (props) => {
		return <Component {...partialProps} {...props} />;
	};
};

export const Button = ({ size, color, text, ...props }) => {
	return (
		<button
			style={{
				padding: size === "large" ? "32px" : "8px",
				fontSize: size === "large" ? "32px" : "16px",
				backgroundColor: color,
			}}
			{...props}
		>
			{text}
		</button>
	);
};
