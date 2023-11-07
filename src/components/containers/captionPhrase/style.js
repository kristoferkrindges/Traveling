import styled from "styled-components";
export const Caption = styled.div`
	margin-top: 0.8rem;
	margin-bottom: 0.7rem;
	margin-left: 0.2rem;
	word-break: break-all;
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Phrase = styled.p`
	font-size: 1rem;
`;

export const TextArea = styled.textarea`
	background: ${({ theme }) => theme.background};
	outline: none;
	border: none;
	resize: none;
	scrollbar-width: none;
	width: 100%;
	min-height: 90px;
	font-size: 1rem;
	color: ${({ theme }) => theme.text};
	padding: 1rem;
	border-radius: 1rem;

	/* &::-webkit-scrollbar {
		display: none;
	} */
`;
