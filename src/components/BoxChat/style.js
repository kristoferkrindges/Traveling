import styled from "styled-components";

import {
	IoCloseOutline,
	IoEllipsisHorizontal,
	IoSendOutline,
} from "react-icons/io5";

export const Close = styled(IoCloseOutline)`
	width: 20px;
	height: 20px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
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
	width: 20px;
	height: 20px;
	stroke: ${({ theme }) => theme.text};
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const Wrapper = styled.div``;
export const BoxToggle = styled.div``;
export const BoxMessage = styled.div`
	background: ${({ theme }) => theme.background};
	border-radius: 1rem;
	margin-top: 1rem;
	box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.1);
`;
export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	//padding: 1rem;
	padding: 0.75rem 1.5rem;
	background: ${({ theme }) => theme.container};
	border-radius: 1rem 1rem 0 0;
	//
	margin-bottom: 1rem;
`;
export const ProfilePhoto = styled.div`
	display: flex;
	align-items: center;
	grid-gap: 0.5rem;
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
	opacity: 1;
	pointer-events: none;
	transition: all 0.3s ease;
	font-weight: 600;
`;
export const Item = styled.li`
	cursor: pointer;
	text-decoration: none;
	a {
		padding: 0.5rem 1rem;
		display: flex;
		grid-gap: 10px;
		font-size: 0.85rem;
		color: ${({ theme }) => theme.text};
		align-items: center;
		transition: all 0.3s ease;
	}
	a:hover {
		color: ${({ theme }) => theme.secondColor};
		background: ${({ theme }) => theme.background};
	}
`;

export const Content = styled.div`
	background: ${({ theme }) => theme.background};
	padding: 1.5rem;
	display: flex;
	flex-direction: column;
	grid-row-gap: 1rem;
`;
export const Sent = styled.div`
	width: 90%;
	padding: 1rem;
	align-self: flex-end;
	background: ${({ theme }) => theme.secondColor};
	border-radius: 0.75rem 0 0.75rem 0.75rem;
`;
export const Text = styled.span``;
export const Time = styled.span``;
export const Received = styled.div`
	width: 90%;
	padding: 1rem;
	background: ${({ theme }) => theme.container};
	border-radius: 0 0.75rem 0.75rem 0.75rem;
	box-shadow: 0.25rem 0.25rem 1.5rem rgba(0, 0, 0, 0.05);
`;
export const Bottom = styled.div``;
export const Form = styled.form``;
export const TextArea = styled.textarea``;
export const ButtonSend = styled.button``;
