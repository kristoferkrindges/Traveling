import styled from "styled-components";
export const Button = styled.label`
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: white;
	/* text-transform: uppercase;
	letter-spacing: 0.2em; */

	&:hover {
		opacity: 0.8;
	}
`;
