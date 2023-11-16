import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const MessagesContainer = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media only screen and (max-width: 992px) {
		display: none;
	}
`;
