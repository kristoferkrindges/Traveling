import styled from "styled-components";
export const SearchBar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.background};
	border-radius: 2rem;
	padding: 0.6rem 1rem;
	// Danger
	svg {
		font-size: 1.8rem;
	}
	width: 280px;
`;
export const InputSearch = styled.input`
	background: transparent;
	width: 15vw;
	margin-left: 1rem;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.text};
`;
