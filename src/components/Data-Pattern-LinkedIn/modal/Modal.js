import React, { useState } from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgba(0, 0, 0, 0.5);
`;
const ModalBody = styled.div`
	background-color: #ccc;
	margin: 10% auto;
	padding: 20px;
	width: 50%;
`;

const Modal = ({ children }) => {
	const [shouldshow, shouldshowSet] = useState(false);

	return (
		<div>
			<button onClick={() => shouldshowSet(true)}>Show Modal</button>
			{shouldshow && (
				<ModalBackground onClick={() => shouldshowSet(false)}>
					<ModalBody onClick={(e) => e.stopPropagation()}>
						<button onClick={() => shouldshowSet(false)}> Hide Modal</button>
						{children}
					</ModalBody>
				</ModalBackground>
			)}
		</div>
	);
};

export default Modal;
