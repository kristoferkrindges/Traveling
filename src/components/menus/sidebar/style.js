import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const SidebarContainer = styled.div`
	display: none;
	position: fixed;
	width: 300px;
	/* width: 80px; */
	height: 100%;
	background: ${({ theme }) => theme.container};
	z-index: 100000;
	transition: 0.5s;
	padding-left: 10px;
	overflow: hidden;

	@media only screen and (max-width: 1400px) {
		display: block;
	}
`;

export const NavLink = styled(Link)`
	position: relative;
	display: flex;
	white-space: nowrap;
	text-decoration: none;

	.Traveling {
		font-weight: 700;
		font-size: 1.2em;
	}

	& div.active {
		color: ${({ theme }) => theme.textInverse};
	}
`;

export const Items = styled.ul`
	position: relative;
	height: 100vh;

	& li.active a .icon::before {
		content: "";
		position: absolute;
		inset: 5px;
		width: 60px;
		background-color: ${({ theme }) => theme.textInverse};
		border-radius: 50%;
		transition: 0.5;
	}

	& li.active a .icon svg {
		z-index: 999;
	}

	& li.active {
		background: ${({ theme }) => theme.secondColor};
		border-top-left-radius: 50px;
		border-bottom-left-radius: 50px;
	}

	& li.active::before {
		content: "";
		position: absolute;
		top: -20px;
		right: 0;
		width: 20px;
		height: 20px;
		border-bottom-right-radius: 20px;
		box-shadow: 5px 5px 0 5px ${({ theme }) => theme.secondColor};
		background: transparent;
	}

	& li.active::after {
		content: "";
		position: absolute;
		bottom: -20px;
		right: 0;
		width: 20px;
		height: 20px;
		border-top-right-radius: 20px;
		box-shadow: 5px -5px 0 5px ${({ theme }) => theme.secondColor};
		background: transparent;
	}
`;
export const LogoItem = styled.li`
	position: relative;
	margin-bottom: 50px;

	@media only screen and (max-height: 740px) {
		margin-bottom: 20px;
	}

	@media only screen and (max-height: 720px) {
		margin-bottom: 10px;
	}

	@media only screen and (max-height: 600px) {
		margin-bottom: -30px;
	}
`;
export const Title = styled.div`
	position: relative;
	height: 70px;
	display: flex;
	align-items: center;
	font-size: 1em;
	color: ${({ theme }) => theme.text};
	padding-left: 15px;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	transition: 0.5s;
`;
export const MenuList = styled.div`
	/* margin-bottom: 50px; */
`;
export const Item = styled.li`
	position: relative;
	list-style: none;

	&:hover {
		color: ${({ theme }) => theme.secondColor};
	}
`;
export const Icon = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 60px;
	padding-left: 10px;
	height: 70px;
	font-size: 1.5em;
	color: ${({ theme }) => theme.text};
	transition: 0.5s;
`;
export const Bottom = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
`;
export const ImgBox = styled.div`
	position: relative;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	overflow: hidden;

	& img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
