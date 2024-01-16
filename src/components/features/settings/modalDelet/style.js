import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const DeletContainer = styled.div`
	position: absolute;
	top: 10%;
	left: 32.4%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	min-width: 30vw;
	/* width: 775px; */
	margin: 1rem 0 0 1rem;
	z-index: 500;

	@media only screen and (max-width: 1400px) {
		left: 20.4%;
		min-width: 50vw;
	}

	@media only screen and (max-width: 992px) {
		left: 14.4%;
		min-width: 70vw;
	}

	@media only screen and (max-width: 700px) {
		/* left: 7.4%; */
		left: 1%;
		min-width: 90%;
	}
`;
