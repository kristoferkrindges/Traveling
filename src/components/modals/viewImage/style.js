import styled from "styled-components";
export const ControllerImage = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	/* width: 500px;
	height: 500px; */
	top: -10.5rem;
	z-index: 999;
	max-width: 60vw;

	& svg {
		position: absolute;
		font-size: 2rem;
		top: -2rem;
		right: -2rem;
	}
	& svg:hover {
		transform: rotate(-60deg);
	}

	@media only screen and (max-width: 1200px) {
		max-width: 70vw;
	}

	@media only screen and (max-width: 992px) {
		max-width: 85vw;
	}

	@media only screen and (max-width: 600px) {
		max-width: 90vw;

		& svg {
			top: -3rem;
			right: -1rem;
		}
	}
`;
export const Photo = styled.img`
	border-radius: 2rem;
	object-fit: cover;
	width: 100%;
`;
