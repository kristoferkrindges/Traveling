import styled from "styled-components";
import { IoSendOutline } from "react-icons/io5";
export const IconSend = styled(IoSendOutline)`
	stroke: white;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Container = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-top: 1rem;
	align-items: center;
	padding: 1rem 0 1rem 0;
	/* padding: 1rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.background}; */
	/* border-top: 1px solid ${({ theme }) => theme.textMuted}; */
	/* border-bottom: 1px solid ${({ theme }) => theme.textMuted}; */
`;

export const ContextText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background-color: ${({ theme }) => theme.background};
	padding: 0.3rem;
	border-radius: 1rem;
`;

export const ProfilePhoto = styled.div`
	display: flex;
	align-items: center;
	/* gap: 1rem; */
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;

export const Area = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	margin-left: 1rem;
`;

export const TextArea = styled.textarea`
	background: transparent;
	outline: none;
	border: none;
	resize: none;
	scrollbar-width: none;
	overflow-x: hidden;
	overflow-y: scroll;
	width: 100%;
	min-height: 20px;
	max-height: 40px;
	font-size: 0.9rem;
	color: ${({ theme }) => theme.text};

	&::-webkit-scrollbar {
		display: none;
	}
	&:focus {
		min-height: 60px;
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
