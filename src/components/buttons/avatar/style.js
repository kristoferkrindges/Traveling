import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Profile = styled.div`
	position: relative;
	/* overflow: hidden; */
`;

export const AvatarPhoto = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;

	&:hover {
		transform: rotate(-10deg);
		cursor: pointer;
		opacity: 0.7;
	}
`;

export const ProfileLink = styled.ul`
	position: absolute;
	top: calc(100% + 20px);
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 10px 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.7);
	border-radius: 10px;
	width: 160px;
	transition: all 0.3s ease;
`;

export const Li = styled.li`
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
		border-radius: 1rem;
	}
`;
export const DivLink = styled.div`
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
		border-radius: 1rem;
	}
`;
