import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const ViewMoreContainer = styled.div`
	position: absolute;
	top: 10%;
	left: 30.4%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	min-width: 35vw;
	margin: 1rem 0 0 1rem;
	z-index: 500;
	border-bottom: 70px solid ${({ theme }) => theme.secondColor};

	@media only screen and (max-width: 1920px) {
		left: 28.5%;
	}

	@media only screen and (max-width: 1400px) {
		left: 20.4%;
		min-width: 50vw;
	}

	@media only screen and (max-width: 1200px) {
		left: 15.4%;
	}

	@media only screen and (max-width: 992px) {
		left: 1%;
		min-width: 90%;
	}

	@media only screen and (max-width: 764px) {
		left: 0%;
		/* margin-left: 2px; */
		width: 80%;
	}
`;

export const DetailsContainer = styled.div`
	padding: 1.2rem;
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	/* max-width: 33.5vw; */
	gap: 1.5rem;
	margin-bottom: 1rem;
	width: 100%;
	color: ${({ theme }) => theme.text};
`;

export const Details = styled.p``;

export const DateEvent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* align-self: flex-end; */
	border-radius: ${size.lg};
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.secondColor};
	color: ${({ theme }) => theme.textInverse};
	gap: 1rem;
	svg {
		font-size: 1.5rem;
	}
`;

export const Creator = styled.div`
	position: absolute;
	bottom: -4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 95%;
	padding: 0 0.5rem;
	color: ${({ theme }) => theme.textInverse};

	svg {
		font-size: 1.4rem;
	}
`;

export const Owner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 0.5rem;
`;

export const Name = styled.h4`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;
