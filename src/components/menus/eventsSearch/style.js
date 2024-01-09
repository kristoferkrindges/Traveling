import styled from "styled-components";

export const CreatedContainer = styled.div`
	display: flex;
	justify-content: space-around;
	/* padding: 0.5rem 1.5rem; */
	align-items: center;
	color: ${({ theme }) => theme.text};

	svg {
		font-size: 1.3rem;
		cursor: pointer;
		:hover {
			opacity: 0.7;
		}
	}
`;
