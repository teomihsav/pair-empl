import React, { useEffect, useRef } from "react";

const FocusInput = () => {
	const focusRef = useRef();
	useEffect(() => {
		focusRef.current.focus();
	}, []);

	return (
		<div>
			<input ref={focusRef} type="text" />
			<button onClick={() => focusRef.current.focus()}>
				Back to Input focus
			</button>
		</div>
	);
};

export default FocusInput;
