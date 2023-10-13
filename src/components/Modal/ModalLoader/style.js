import styled from "styled-components";

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
	z-index: 999;
`;

export const Modal = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 300;
	top: 30%;
	left: -1%;
`;
