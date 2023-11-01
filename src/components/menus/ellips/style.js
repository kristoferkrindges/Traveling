import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const DropMenu = styled.ul`
	position: absolute;
	top: ${(props) => props.top};
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 10px 10px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.7);
	border-radius: 2rem;
	width: 160px;
	transition: all 0.3s ease;
	z-index: 999;
`;
export const Item = styled.li`
	& svg {
		width: 20px;
		height: 20px;
		stroke: ${({ theme }) => theme.text};
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	}
`;

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
	&:hover {
		background: ${({ theme }) => theme.secondColor};
		border-radius: 2rem;
		color: ${({ theme }) => theme.textInverse};
		opacity: 0.9;
	}
`;
