import styled from "styled-components";

export const SearchBarContainer = styled.div`
	display: flex;
	background-color: ${({ theme }) => theme.background};
	margin-bottom: 1rem;
	border-radius: 2rem;
	padding: 0.6rem 1rem;
	// Danger
	svg {
		font-size: 1.8rem;
	}
`;
export const SearchInput = styled.input`
	background: transparent;
	width: 30vw;
	margin-left: 1rem;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.text};
`;
