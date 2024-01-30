import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	width: 700px;
	margin: 0 0.5rem 0 1rem;
	max-height: 90vh;
	overflow-x: hidden;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	z-index: 999;
`;

export const Area = styled.div`
	margin-top: 1rem;
`;
export const Form = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const TextArea = styled.textarea`
	background: transparent;
	outline: none;
	border: none;
	resize: none;
	scrollbar-width: none;
	width: 100%;
	min-height: 90px;
	font-size: 1rem;
	color: ${({ theme }) => theme.text};
`;
export const Send = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const InputFile = styled.input`
	display: none;
`;

export const SendPhoto = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	gap: 10px;
	z-index: 10;
	&:hover {
		opacity: 0.8;
	}
`;

export const Separator = styled.div`
	margin-bottom: 1rem;
	margin-top: 1rem;
`;

export const PreviewPhoto = styled.img`
	width: 100%;
	/* max-height: 475px;
	object-fit: cover; */
`;

export const Photo = styled.div`
	position: relative;
	border-radius: 2rem;
	overflow: hidden;
	margin: 0.7rem 0;
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

export const LabelFile = styled.label`
	display: flex;
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 1.5rem;

	& svg {
		font-size: 1.2rem;
	}
`;
