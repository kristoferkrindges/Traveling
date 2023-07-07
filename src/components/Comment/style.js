import styled from "styled-components";
import {
	IoEllipsisHorizontal,
	IoHeartOutline,
	IoChatbubbleOutline,
	IoShareOutline,
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
export const Comment = styled(IoChatbubbleOutline)``;
export const Share = styled(IoShareOutline)``;
export const Book = styled(IoBookmarkOutline)``;
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
