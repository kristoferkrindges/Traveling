import styled from "styled-components";
export const ControllerImage = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	/* width: 500px;
	height: 500px; */
	top: -10rem;
	z-index: 999;

	& svg {
		position: absolute;
		font-size: 2rem;
		top: -3rem;
		right: -2rem;
	}
	& svg:hover {
		transform: rotate(-60deg);
	}
`;
export const Photo = styled.img`
	border-radius: 2rem;
	object-fit: cover;
	width: 100%;
`;
