import styled from "styled-components";
export const PrimaryButton = styled.button`
	border: none;
	outline: none;
	background: ${({ theme }) => theme.secondColor};
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: ${({ theme }) => theme.textInverse};
	font-size: 1rem;
	transition: 0.5s;
	text-align: center;

	&:hover {
		opacity: 0.8;
		letter-spacing: 0.1em;
	}
`;
