import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Nav = styled.div`
	width: 100%;
	background: ${({ theme }) => theme.container};
	padding: 0.7rem 0;
	position: fixed;
	top: 0;
	z-index: 10;
`;

export const NavbarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	// Container Config
	width: 80%;
	margin: 0 auto;
`;

export const NavLink = styled(Link)`
	cursor: pointer;
	font-weight: bold;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.text};
	/* letter-spacing: 0.1em; */
	&.hover {
		color: whitesmoke;
	}
`;

export const Create = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;
