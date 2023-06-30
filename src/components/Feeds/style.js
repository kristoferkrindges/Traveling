import styled from "styled-components";
import {
	IoEllipsisHorizontal,
	IoHeartOutline,
	IoChatbubbleEllipsesOutline,
	IoShareSocialOutline,
	IoBookmarkOutline,
} from "react-icons/io5";
import { NavLink as Link } from "react-router-dom";

export const Ellips = styled(IoEllipsisHorizontal)`
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;
export const Heart = styled(IoHeartOutline)``;
export const Comment = styled(IoChatbubbleEllipsesOutline)``;
export const Share = styled(IoShareSocialOutline)``;
export const Book = styled(IoBookmarkOutline)``;

export const FeedsContainer = styled.div``;
export const Feed = styled.div`
	background-color: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	margin: 1rem 0;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const Head = styled.div`
	display: flex;
	justify-content: space-between;
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
export const Space = styled.span`
	margin-left: 2px;
`;
export const Edit = styled.span`
	position: relative;
	font-size: 1.3rem;
`;
export const Photo = styled.div`
	border-radius: 1rem;
	overflow: hidden;
	margin: 0.7rem 0;
	img {
		width: 100%;
	}
`;
export const ActionButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.4rem;
	margin: 0.6rem;
`;
export const InteractionButtons = styled.div`
	display: flex;
	gap: 1rem;
`;
export const BookMark = styled.div``;
export const Icon = styled.span``;
export const LikedBy = styled.div`
	display: flex;
`;
export const Span = styled.span`
	width: 1.4rem;
	height: 1.4rem;
	display: block;
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid ${({ theme }) => theme.container};
	margin-left: -0.6rem;
	&:first-child {
		margin: 0;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	}
`;
export const P = styled.p`
	margin-left: 0.5rem;
`;
export const Caption = styled.div``;
export const Pharase = styled.p``;
export const HarshTag = styled.span``;
export const TextMuted = styled.div``;
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
