import styled from "styled-components";

export const ModalContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 300;
	top: ${(props) => props.top}; //10%
	left: -1%;
`;
