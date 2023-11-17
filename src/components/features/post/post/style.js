import styled from "styled-components";

export const PostContainer = styled.div``;

export const EditPhotoNoPhoto = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 3rem;
	color: white;
	margin-bottom: 1rem;

	& svg {
		color: ${({ theme }) => theme.text};
		cursor: pointer;
	}
`;

export const LikedBy = styled.div`
	display: flex;
	align-items: center;
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

export const MiniAvatar = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const P = styled.p`
	margin-left: 0.5rem;
`;
export const PeopleLike = styled.span`
	cursor: pointer;
`;

export const SaveContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextMuted = styled.div`
	margin-top: 1rem;
	cursor: pointer;
`;
