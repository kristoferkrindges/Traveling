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
	max-width: 290px;
	/* width: 290px; */
`;

export const ContentLoader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const MiniLoader = styled.img`
	width: 50px;
`;
