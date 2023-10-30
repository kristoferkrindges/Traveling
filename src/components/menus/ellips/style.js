import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const DropMenu = styled.ul`
	position: absolute;
	top: 80%;
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 0.5rem 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.9);
	border-radius: 1rem;
	transition: all 0.3s ease;
	font-weight: 600;
	z-index: 2;
`;
export const Item = styled.li``;

export const NavLink = styled(Link)`
	cursor: pointer;
	font-weight: bold;
	padding: 0.5rem 1rem;
	display: flex;
	grid-gap: 10px;
	font-size: 0.85rem;
	color: ${({ theme }) => theme.text};
	align-items: center;
	transition: all 0.3s ease;
	border-radius: 1rem;
	&:hover {
		color: ${({ theme }) => theme.secondColor};
		background: ${({ theme }) => theme.background};
	}
`;
