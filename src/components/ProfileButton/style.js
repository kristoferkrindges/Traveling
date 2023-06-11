import styled from "styled-components";

import { IoSearch, IoReorderFourOutline } from "react-icons/io5";

export const IconSearch = styled(IoSearch)`
	width: 20px;
	height: 20px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Profile = styled.div`
	position: relative;
	/* overflow: hidden; */
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;

export const ProfileLink = styled.ul`
	position: absolute;
	top: calc(100% + 20px);
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 10px 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	width: 160px;
	opacity: 1;
	pointer-events: none;
	transition: all 0.3s ease;
`;

export const Li = styled.li`
	& a {
		padding: 10px 16px;
		display: flex;
		grid-gap: 10px;
		font-size: 14px;
		color: black;
		align-items: center;
		transition: all 0.3s ease;
		cursor: pointer;
	}
	& a:hover {
		background: ${({ theme }) => theme.buttons};
	}
`;
