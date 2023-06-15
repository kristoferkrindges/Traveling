import styled from "styled-components";
import { FaUserEdit } from "react-icons/fa";
import { BsFileEarmarkPost } from "react-icons/bs";
import { IoHeart, IoBookmark, IoPeople, IoPerson } from "react-icons/io5";
export const Heart = styled(IoHeart)``;
export const Fav = styled(IoBookmark)``;
export const IconPost = styled(BsFileEarmarkPost)``;
export const IconFollowers = styled(IoPeople)``;
export const IconFollowing = styled(IoPerson)``;

export const FaUser = styled(FaUserEdit)`
	width: 30px;
	height: 30px;
	stroke: ${({ theme }) => theme.text};
	margin-left: 8px;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
		transform: rotate(-10deg);
	}
`;

export const Container = styled.div`
	background-color: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	/* margin: 1rem 0; */
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const Head = styled.div`
	/* background: red; */
	border-radius: 1rem;
	position: relative;
	padding: 1rem;
	transition: opacity 0.5s ease-out;
	//Refazer para after após foto
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 35%;
		width: 100%;
		background: ${({ theme }) => theme.secondColor};
		border-radius: 1rem 1rem 0 0;
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	z-index: 100;
	gap: 1rem;
`;

export const Image = styled.div`
	height: 180px;
	width: 180px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.container};
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.container};
	&:hover {
		opacity: 0.5;
	}
`;

export const Icons = styled.div`
	position: absolute;
	top: 1rem;
	right: 1rem;
	display: flex;
	flex-direction: column;
	width: 20px;
	align-items: center;
	font-size: 1.2rem;
`;

export const Legend = styled.h5`
	text-align: center;
	cursor: pointer;
`;
export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.text};
`;

export const Name = styled.span`
	font-weight: bold;
	letter-spacing: 0.1rem;
	font-size: 1.5rem;

	@media only screen and (max-width: 992px) {
		font-size: 1.2rem;
	}
`;

export const Sign = styled.span`
	font-size: 1rem;

	@media only screen and (max-width: 992px) {
		font-size: 0.7rem;
	}
`;

export const Lists = styled.ul`
	position: relative;
	top: 15px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-evenly;
	width: 100%;
	padding: 0 10px;
`;
export const List = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 10px;
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
	&:not(:last-child) {
		border-right: 1px solid #ccc;
	}
	span {
		font-size: 1.65em;
		color: ${({ theme }) => theme.text};
	}

	@media only screen and (max-width: 992px) {
		font-size: 0.8rem;
		span {
			font-size: 1.3em;
		}
	}
`;

export const Options = styled.div`
	margin-top: 1.5rem;
`;
export const Category = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;

	h6 {
		width: 100%;
		text-align: center;
		border-bottom: 4px solid ${({ theme }) => theme.container};
		padding-bottom: 0.5rem;
		font-size: 0.85rem;
		cursor: pointer;
	}
	& .active {
		border-color: ${({ theme }) => theme.invertedBackground};
	}
`;
export const Context = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 100%;

	svg {
		color: ${({ theme }) => theme.text};
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	h6 {
		width: 100%;
		text-align: center;
		border-bottom: 4px solid ${({ theme }) => theme.container};
		padding-bottom: 0.5rem;
		font-size: 0.85rem;
		cursor: pointer;
	}

	&:hover {
		opacity: 0.7;
	}
`;
export const Posts = styled.h6``;
export const General = styled.h6``;
export const Requests = styled.h6``;
