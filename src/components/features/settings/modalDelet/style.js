import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const DeletContainer = styled.div`
	position: absolute;
	top: 10%;
	left: 33.8%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	text-align: center;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	min-width: 30vw;
	/* width: 775px; */
	margin: 1rem 0 0 1rem;
	z-index: 500;

	svg {
		font-size: 5rem;
	}

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

	@media only screen and (max-width: 500px) {
		button {
			font-size: 0.8rem;
			padding: 0.5rem 1.5rem;
		}
	}

	@media only screen and (max-width: 460px) {
		/* left: 7.4%; */

		max-width: 80%;
	}

	@media only screen and (max-width: 380px) {
		left: -1%;
		button {
			font-size: 0.7rem;
			padding: 0.4rem 1.3rem;
		}
	}

	@media only screen and (max-width: 346px) {
		button {
			font-size: 0.6rem;
			padding: 0.3rem 1rem;
		}
	}
`;
export const AlertProceed = styled.h3``;
export const Confirm = styled.h5``;
