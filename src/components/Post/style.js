import styled from "styled-components";
import {
	IoEllipsisHorizontal,
	IoHeart,
	IoChatbubbleOutline,
	IoShareOutline,
	IoBookmarkOutline,
	IoCloudUploadOutline,
	IoCloseCircleOutline,
	IoHeartOutline,
	IoBookmark,
} from "react-icons/io5";
import { NavLink as Link } from "react-router-dom";

export const Ellips = styled(IoEllipsisHorizontal)`
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;
export const IoCloudUpload = styled(IoCloudUploadOutline)``;
export const DeletIcon = styled(IoCloseCircleOutline)``;
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
export const Comment = styled(IoChatbubbleOutline)``;
export const Share = styled(IoShareOutline)``;
export const Book = styled(IoBookmarkOutline)`
	&:hover {
		color: gold;
		cursor: pointer;
	}
`;
export const BookPress = styled(IoBookmark)`
	color: gold;
	&:hover {
		color: white;
		cursor: pointer;
	}
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
	position: relative;
	border-radius: 1rem;
	overflow: hidden;
	margin: 0.7rem 0;
	img {
		width: 100%;
		/* filter: brightness(0.25) opacity(0.75); */
	}
`;
export const EditPhoto = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 2rem;
	top: 48%;
	left: 43%;
	font-size: 3rem;
	color: white;
`;
export const InputFile = styled.input`
	display: none;
`;

export const LabelFile = styled.label`
	display: flex;
`;

export const ActionButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0.6rem;
	font-size: 1.3rem;
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
export const Caption = styled.div`
	margin-top: 0.8rem;
	margin-bottom: 0.7rem;
	margin-left: 0.2rem;
`;
export const Pharase = styled.p`
	font-size: 1rem;
`;
export const HarshTag = styled.span`
	font-size: 0.9rem;
`;
export const TextMuted = styled.div`
	margin-top: 1rem;
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

export const SaveContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
