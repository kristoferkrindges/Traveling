import styled from "styled-components";
import { IoSearch, IoClose } from "react-icons/io5";

export const SearchIcon = styled(IoSearch)``;
export const CloseIcon = styled(IoClose)``;

export const NavSearchBar = styled.div`
	width: 100%;
`;

export const SearchInputs = styled.div`
	position: relative;
	height: 40px;
	width: 50%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	display: flex;
	background: ${({ theme }) => theme.container};

	@media (max-width: 1200px) {
		width: 80%;
	}
	& a {
		text-decoration: none;
		cursor: pointer;
	}
	& a:hover {
		background-color: rgba(111, 162, 242, 1);
	}
	& svg {
		font-size: 28px;
	}
	& svg:hover {
		color: black;
	}
`;

export const InputName = styled.input`
	position: absolute;
	width: 100%;
	height: 40px;
	border-radius: 25px;
	background: #fff;
	outline: none;
	border: none;
	padding-left: 2%;
	font-size: 1rem;
	color: black;
	transition: background-color 0.5s ease-in;
	background: transparent;
	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: ${({ theme }) => theme.text};
	}
	@media screen and (max-width: 1200px) {
		width: 90%;
	}

	@media (max-width: 800px) {
		font-size: 1.3em;
	}

	@media (max-width: 650px) {
		font-size: 1.2em;
	}

	@media (max-width: 610px) {
		font-size: 1.1em;
	}

	@media (max-width: 580px) {
		font-size: 1em;
	}

	@media (max-width: 540px) {
		font-size: 0.9em;
	}

	@media (max-width: 510px) {
		font-size: 0.8em;
	}

	&:focus {
		outline: none;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 50px;
	background-color: ${({ theme }) => theme.secondColor};
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: ${({ theme }) => theme.textInverse};
	font-size: 20px;
`;

export const DataResult = styled.div`
	position: absolute;
	width: 31.5%;
	height: 200px;
	top: calc(100%);
	right: 680px;
	background: ${({ theme }) => theme.container};
	color: ${({ theme }) => theme.text};
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	overflow: hidden;
	overflow-y: auto;
	border-radius: 25px;
	z-index: 100;

	@media screen and (max-width: 1200px) {
		width: 80%;
		margin-left: 10%;
	}

	&::-webkit-scrollbar {
		display: none;
	}
	& .dataItem {
		width: 100%;
		height: 50px;
		display: flex;
		align-items: center;
		color: inherit;
	}
`;

export const Result = styled.p`
	margin-left: 10px;
`;
