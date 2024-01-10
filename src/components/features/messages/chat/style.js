import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import {
	IoCloseOutline,
	IoEllipsisHorizontal,
	IoSendOutline,
	IoArrowBack,
} from "react-icons/io5";

export const IoArrow = styled(IoArrowBack)`
	display: none;
	justify-content: center;
	align-items: center;
	width: 1.8rem;
	height: 1.8rem;
	font-size: 1rem;
	border-radius: 50%;
	margin-right: 1rem;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}

	@media only screen and (max-width: 992px) {
		display: flex;
	}
`;

export const Ellipsis = styled(IoEllipsisHorizontal)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.8rem;
	height: 1.8rem;
	font-size: 1rem;
	border-radius: 50%;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const IconSend = styled(IoSendOutline)`
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Wrapper = styled.div`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	width: 4rem;
	height: 4rem;
`;
export const BoxMessage = styled.div`
	background: ${({ theme }) => theme.background};
	border-radius: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.7);
	position: absolute;
	right: 5rem;
	bottom: calc(100% - 1.5rem);
	/* right: 0; */
	/* width: 20vw; */
	width: 400px;
	overflow: hidden;
	transition: all 0.3s ease;
`;

export const BoxChat = styled.div`
	background: ${({ theme }) => theme.background};
	border-radius: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.7);
	overflow: hidden;
	transition: all 0.3s ease;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.75rem 1.5rem;
	background: ${({ theme }) => theme.container};
	border-radius: 1rem 1rem 0 0;
`;

export const ProfilePhoto = styled.div`
	display: flex;
	align-items: center;
	grid-gap: 0.6rem;
	img {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;

export const BoxName = styled.div``;
export const Name = styled.h5`
	font-weight: 600;
`;

export const Status = styled.p`
	font-size: 0.9rem;
	font-weight: 500;
	color: ${({ theme }) => theme.textMuted};
`;
export const Dropdown = styled.div`
	position: relative;
`;
export const DropMenu = styled.ul`
	position: absolute;
	top: 100%;
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 0.5rem 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 1rem;
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
		background: ${({ theme }) => theme.secondColor};
		border-radius: 1rem;
	}
`;

export const Content = styled.div`
	background: ${({ theme }) => theme.background};
	border-right: 1px solid ${({ theme }) => theme.container};
	border-left: 1px solid ${({ theme }) => theme.container};
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	grid-row-gap: 1rem;
	overflow-x: hidden;
	overflow-y: scroll;
	height: 71vh;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const ContentOther = styled.div`
	background: ${({ theme }) => theme.background};
	border-right: 1px solid ${({ theme }) => theme.container};
	border-left: 1px solid ${({ theme }) => theme.container};
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	grid-row-gap: 1rem;
	overflow-x: hidden;
	overflow-y: scroll;
	height: 30vh;

	&::-webkit-scrollbar {
		display: none;
	}
`;
export const Sent = styled.div`
	width: 90%;
	padding: 1rem;
	align-self: flex-end;
	background: ${({ theme }) => theme.secondColor};
	border-radius: 0.75rem 0 0.75rem 0.75rem;
	color: ${({ theme }) => theme.textInverse};
`;
export const Text = styled.span``;
export const Time = styled.span`
	float: right;
	font-size: 0.75rem;
	margin-top: 0.5rem;
	display: inline-block;
`;
export const Received = styled.div`
	width: 90%;
	padding: 1rem;
	background: ${({ theme }) => theme.container};
	border-radius: 0 0.75rem 0.75rem 0.75rem;
	box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.05);
	color: ${({ theme }) => theme.text};
`;
export const Bottom = styled.div`
	background: ${({ theme }) => theme.container};
	padding: 0.75rem 1.5rem;
	border-radius: 0 0 1rem 1rem;
`;
export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.background};
	border-radius: 0.5rem;
	padding: 0.5rem 1.25rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.3);
`;
export const TextArea = styled.textarea`
	background: transparent;
	outline: none;
	border: none;
	resize: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;
export const ButtonSend = styled.button`
	font-size: 1.25rem;
	color: ${({ theme }) => theme.secondColor};
	background: ${({ theme }) => theme.background};
	border: none;
	outline: none;
	text-align: center;
`;

export const NoMessage = styled.h4`
	font-size: 0.75rem;
	font-weight: 600;
	text-align: center;
`;
