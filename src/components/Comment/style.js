import styled from "styled-components";
import {
	IoEllipsisHorizontal,
	IoHeartOutline,
	IoChatbubbleOutline,
	IoArrowRedoOutline,
	IoBookmarkOutline,
	IoHeart,
	IoArrowUndoOutline,
} from "react-icons/io5";
import { NavLink as Link } from "react-router-dom";

export const Ellips = styled(IoEllipsisHorizontal)`
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;
export const Heart = styled(IoHeartOutline)`
	&:hover {
		color: red;
		cursor: pointer;
	}
`;
export const HeartPress = styled(IoHeart)`
	color: red;
	&:hover {
		color: white;
		cursor: pointer;
	}
`;
export const IconComment = styled(IoChatbubbleOutline)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;
export const Reply = styled(IoArrowRedoOutline)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;

export const DontReply = styled(IoArrowUndoOutline)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;
export const Book = styled(IoBookmarkOutline)``;

export const ContainerParentComment = styled.div``;

export const ContainerComment = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
`;

export const Controller = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	margin-bottom: 1rem;
`;
export const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const TopContainer = styled.div`
	margin-left: 1rem;
`;

export const Extends = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Border = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 1.4rem;
	padding: 1px;
	height: 100%;
	border-left: 1px solid gray;
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
export const Ingo = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const NameContext = styled.div``;
export const Name = styled.h3``;
export const Small = styled.small``;
export const Space = styled.span`
	margin-left: 2px;
`;

export const Caption = styled.div`
	margin-top: 0.8rem;
	margin-bottom: 0.7rem;
`;

export const Pharase = styled.p`
	font-size: 1rem;
`;

export const ActionButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.3rem;
	margin-top: 1rem;
	font-weight: bold;
`;
export const InteractionButtons = styled.div`
	display: flex;
	gap: 2rem;
`;
export const BookMark = styled.div`
	display: flex;
	gap: 2rem;
`;
export const Icon = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	font-size: 1.3rem;
	svg {
		font-size: 1.3rem;
	}
`;
export const Numbers = styled.span`
	font-size: 0.8rem;
	/* color: ${({ theme }) => theme.textMuted}; */
`;

export const Edit = styled.span`
	position: relative;
	font-size: 1.3rem;
`;

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
	&:hover {
		color: ${({ theme }) => theme.secondColor};
		background: ${({ theme }) => theme.background};
	}
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const TextArea = styled.textarea`
	background: ${({ theme }) => theme.background};
	outline: none;
	border: none;
	resize: none;
	scrollbar-width: none;
	width: 100%;
	min-height: 90px;
	font-size: 1rem;
	color: ${({ theme }) => theme.text};
	padding: 1rem;
	border-radius: 1rem;
`;

export const SaveContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
