import styled from "styled-components";
import {
	IoOptionsOutline,
	IoMailOutline,
	IoMailOpenOutline,
	IoSearchOutline,
} from "react-icons/io5";
export const Mail = styled(IoMailOutline)`
	&:hover {
		transform: rotate(-10deg);
		cursor: pointer;
		opacity: 0.7;
	}
`;
export const Search = styled(IoSearchOutline)``;

export const Messages = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);

	@media only screen and (max-width: 992px) {
		display: none;
	}
`;
export const Heading = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	svg {
		font-size: 1.4rem;
	}
`;
export const Title = styled.h4``;
export const SearchBar = styled.div`
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
export const SearchMessages = styled.input`
	background: transparent;
	width: 30vw;
	margin-left: 1rem;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.text};
`;
export const Category = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;

	h6 {
		width: 100%;
		text-align: center;
		border-bottom: 4px solid ${({ theme }) => theme.container};
		padding-bottom: 0.5rem;
		font-size: 0.85rem;
		cursor: pointer;
	}
	& .active {
		border-color: ${({ theme }) => theme.invertedBackground};
	}
`;
export const Primary = styled.h6``;
export const General = styled.h6``;
export const Requests = styled.h6``;
