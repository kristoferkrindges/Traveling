import styled from "styled-components";
import { BsFileEarmarkPost, BsEmojiSmile } from "react-icons/bs";
import {
	IoEllipsisHorizontal,
	IoImagesOutline,
	IoVideocamOutline,
} from "react-icons/io5";
import { NavLink as Link } from "react-router-dom";

export const IoImages = styled(IoImagesOutline)``;

export const IoEmoji = styled(BsEmojiSmile)``;

export const IoVideocam = styled(IoVideocamOutline)``;

export const IconPost = styled(BsFileEarmarkPost)``;

export const Ellips = styled(IoEllipsisHorizontal)`
	position: relative;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
	z-index: 999;
`;

export const Modal = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 300;
	top: 30%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	/* width: 35%; */
	/* width: 40vw; */
	width: 700px;
`;

export const Heading = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		font-size: 1.4rem;
	}
`;
export const Title = styled.h4``;

export const DropMenu = styled.ul`
	position: absolute;
	top: 80%;
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 0.5rem 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.9);
	border-radius: 1rem;
	opacity: 1;
	transition: all 0.3s ease;
	font-weight: 600;
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
	&:hover {
		color: ${({ theme }) => theme.secondColor};
		background: ${({ theme }) => theme.background};
	}
`;

export const User = styled.div`
	display: flex;
	gap: 1rem;
`;
export const ProfilePhoto = styled.div`
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;
export const Ingo = styled.div``;
export const Name = styled.h3``;
export const Small = styled.small``;
export const Separator = styled.div`
	border-top: 2px solid ${({ theme }) => theme.textInverse};
	margin-bottom: 1rem;
	margin-top: 1rem;
`;
export const Area = styled.div`
	margin-top: 1rem;
`;
export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const TextArea = styled.textarea`
	background: transparent;
	outline: none;
	border: none;
	resize: none;
	scrollbar-width: none;
	width: 100%;
	height: 200px;
	font-size: 1rem;
	color: ${({ theme }) => theme.text};

	/* &::-webkit-scrollbar {
		display: none;
	} */
`;
export const Send = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 1.5rem;

	& svg {
		font-size: 1.2rem;
	}
`;
export const Button = styled.button`
	border: none;
	outline: none;
	background: ${({ theme }) => theme.secondColor};
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	color: white;
	font-size: 1rem;
	transition: 0.5s;

	&:hover {
		opacity: 0.8;
		letter-spacing: 0.1em;
	}
`;
