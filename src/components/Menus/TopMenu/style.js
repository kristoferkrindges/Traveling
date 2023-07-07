import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { IoApps } from "react-icons/io5";

export const IoAppss = styled(IoApps)`
	width: 35px;
	height: 35px;
	display: none;
	&:hover {
		transform: rotate(-180deg);
		opacity: 0.5;
		cursor: pointer;
	}
	@media only screen and (max-width: 1200px) {
		display: inline-block;
		margin-right: 1rem;
	}
	/* @media only screen and (max-width: 992px) {
		display: inline-block;
	} */
`;

export const Nav = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.container};
	padding: 0.7rem 0;
	position: fixed;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	// Container Config
	width: 80%;
	margin: 0 auto;

	@media only screen and (max-width: 992px) {
		width: 96%;
	}
`;

export const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* margin-left: 1rem; */
	& svg {
		transition: all 0.3s ease;
	}
`;

export const NavLink = styled(Link)`
	cursor: pointer;
	font-weight: bold;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.text};
	text-transform: uppercase;
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	/* letter-spacing: 0.1em; */
	&.hover {
		color: whitesmoke;
	}
	@media only screen and (max-width: 992px) {
		margin-left: 1.3rem;
	}
`;

export const Create = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	@media only screen and (max-width: 992px) {
		label {
			display: none;
		}
	}
`;
