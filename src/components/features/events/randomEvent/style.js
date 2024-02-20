import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const RandomContainer = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	gap: 1rem;
	/* margin-bottom: 1.5rem; */
	margin-top: 3.7rem;
	width: 90%;

	@media only screen and (max-width: 1400px) {
		display: none;
	}
`;
