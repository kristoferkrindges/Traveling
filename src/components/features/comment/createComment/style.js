import styled from "styled-components";

export const CreateCommentContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	align-items: center;
	padding: 1rem 0 1rem 0;
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
	position: relative;
	display: flex;
	align-items: center;
`;

export const Border = styled.div`
	position: absolute;
	padding: 1px;
	left: -1.4rem;
	top: 1.3rem;
	width: 1.2rem;
	border-top: 1px solid gray;
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
