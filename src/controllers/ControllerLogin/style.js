import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	height: 100vh;
	overflow: hidden;
`;

export const ShapeLeft = styled.div`
	position: absolute;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	top: -7rem;
	left: -3.5rem;
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.secondColor} 0%,
		rgba(196, 196, 196, 0) 100%
	);
	@media only screen and (min-width: 968px) {
		width: 400px;
		height: 400px;
		top: -11rem;
		left: -6.5rem;
	}
`;

export const ShapeRight = styled.div`
	position: absolute;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	bottom: -6rem;
	right: -5.5rem;
	background: linear-gradient(
		180deg,
		${({ theme }) => theme.secondColor} 0%,
		rgba(196, 196, 196, 0) 100%
	);
	transform: rotate(180deg);

	@media only screen and (min-width: 968px) {
		width: 300px;
		height: 300px;
		right: -6.5rem;
	}
`;
