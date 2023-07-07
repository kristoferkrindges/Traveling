import styled from "styled-components";
import { IoSendOutline } from "react-icons/io5";
export const IconSend = styled(IoSendOutline)`
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
	padding: 1rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.background};
	/* border-top: 1px solid ${({ theme }) => theme.textMuted};
	border-bottom: 1px solid ${({ theme }) => theme.textMuted}; */
`;

export const ProfilePhoto = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
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
	display: flex;
	align-items: center;
	padding: 1rem;
	border-radius: 50%;
	background: ${({ theme }) => theme.secondColor};
	border: none;
	outline: none;
	text-align: center;
	width: 45px;
	height: 45px;
`;
