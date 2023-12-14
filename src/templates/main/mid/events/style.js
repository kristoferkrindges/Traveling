import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const CreatedContainer = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	/* padding: ${size.sm}; */
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	padding: 0.5rem 1.5rem;
	margin-bottom: 1rem;

	svg {
		font-size: 1.3rem;
		cursor: pointer;
	}
`;
