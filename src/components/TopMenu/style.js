import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

export const IconSearch = styled(IoSearch)`
	width: 20px;
	height: 20px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Container = styled.div`
	background-color: ${({ theme }) => theme.container};
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	/* position: sticky; */
	z-index: 10;
	/* padding: 0.5rem calc((100vw - 1000px) / 2); */

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1600px;
	background-color: red;
`;

export const NavLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	font-weight: bold;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.text};
	&.hover {
		color: whitesmoke;
	}
`;

export const SearchBar = styled.div`
	display: flex;
	align-items: center;
	padding: 0 1rem;
	justify-content: center;
	height: 100%;
	background-color: blue;
	width: 50%;
`;

export const ContainerInput = styled.div`
	position: relative;
	height: 45px;
	width: 80%;
	font-size: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	margin-bottom: 5%;
`;

export const InputSearch = styled.input`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: #fff;
	outline: none;
	padding-left: 20px;
	font-size: 1em;
	color: black;
	transition: background-color 0.5s ease-in;
	padding-left: 15px;
	border: 1px solid #ccc;
	border-bottom-width: 2px;
	transition: all 0.3s ease;
	@media (max-width: 580px) {
		font-size: 0.9em;
	}
	@media (max-width: 545px) {
		font-size: 0.8em;
	}
	@media (max-width: 520px) {
		font-size: 0.7em;
	}
	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 50px;
	background-color: ${({ theme }) => theme.container};
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: ${({ theme }) => theme.text};
	font-size: 20px;
`;

export const Create = styled.div``;
export const Profile = styled.div`
	position: relative;
	margin-right: 85%;
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
		margin-top: 15%;
		margin-right: 35%;
		/* margin-left: 5%; */
	}
`;

export const ProfileLink = styled.ul`
	position: absolute;
	top: calc(100% + 10px);
	right: 0;
	background: ${({ theme }) => theme.navbar};
	padding: 10px 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	width: 160px;
	opacity: 1;
	/* pointer-events: none; */
	transition: all 0.3s ease;
`;

export const Li = styled.li`
	& a {
		padding: 10px 16px;
		display: flex;
		grid-gap: 10px;
		font-size: 14px;
		color: white;
		align-items: center;
		transition: all 0.3s ease;
		cursor: pointer;
	}
	& a:hover {
		background: ${({ theme }) => theme.buttons};
	}
`;
