import styled from "styled-components";

export const Message = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	margin-bottom: 1rem;
	cursor: pointer;
	&:last-child {
		margin: 0;
	}
`;
export const ProfilePhoto = styled.div`
	position: relative;
	overflow: visible;
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;

export const ImgUser = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;

export const Online = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.container};
	background-color: ${({ theme }) => theme.success};
`;
export const MessageBody = styled.div``;
export const UserName = styled.h5``;
export const TextMuted = styled.p`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.textMuted};
`;
