import styled from "styled-components";
import {
	IoEllipsisHorizontal,
	IoHeartOutline,
	IoChatbubbleEllipsesOutline,
	IoShareSocialOutline,
	IoBookmarkOutline,
} from "react-icons/io5";

export const Ellips = styled(IoEllipsisHorizontal)``;
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
export const Edit = styled.span``;
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
`;
export const P = styled.p`
	margin-left: 0.5rem;
`;
export const Caption = styled.div``;
export const Pharase = styled.p``;
export const HarshTag = styled.span``;
export const TextMuted = styled.div``;
