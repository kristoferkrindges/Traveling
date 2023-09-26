import styled from "styled-components";

export const Button = styled.button`
	position: relative;
	top: 25px;
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
	color: white;
	font-size: 1rem;
	border: 4px solid ${({ theme }) => theme.background};
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	transition: 0.5s;
	/* text-transform: uppercase;
	letter-spacing: 0.2em; */
	&::before {
		content: "";
		position: absolute;
		top: 5px;
		left: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-right-radius: 20px;
		box-shadow: 5px -7px ${({ theme }) => theme.container};
	}
	&::after {
		content: "";
		position: absolute;
		top: 5px;
		right: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-left-radius: 20px;
		box-shadow: -5px -7px ${({ theme }) => theme.container};
	}
	&:hover {
		opacity: 0.8;
		letter-spacing: 0.5em;
	}

	@media only screen and (max-width: 1674px) {
		&::before {
			top: 0px;
		}
		&::after {
			top: 0px;
		}
	}

	@media only screen and (max-width: 1450px) {
		padding: 0.3rem 1.4rem;
		font-size: 0.8rem;
	}

	@media only screen and (max-width: 1100px) {
		padding: 0.6rem 1.7rem;
		font-size: 0.8rem;
		&::before {
			top: -10px;
			left: -23px;
		}
		&::after {
			top: -10px;
			right: -23px;
		}
	}
`;
