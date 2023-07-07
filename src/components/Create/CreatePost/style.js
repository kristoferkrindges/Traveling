import styled from "styled-components";
import { IoImagesOutline, IoVideocamOutline } from "react-icons/io5";

export const IoImages = styled(IoImagesOutline)`
	margin-right: 5px;
	position: relative;
	top: 2px;
`;

export const IoVideocam = styled(IoVideocamOutline)`
	margin-right: 5px;
	position: relative;
	top: 2px;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 1.5rem;
`;

export const Buttons = styled.div`
	position: relative;
	padding: 0.4rem 1rem;
	background-color: ${({ theme }) => theme.container};
	display: flex;
	justify-content: space-around;
	gap: 1rem;
	/* border: 4px solid ${({ theme }) => theme.background}; */
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	border-radius: 2rem;
	text-align: center;
	&::before {
		content: "";
		position: absolute;
		top: 0px;
		left: -21px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-right-radius: 20px;
		box-shadow: 5px -7px ${({ theme }) => theme.container};
	}
	&::after {
		content: "";
		position: absolute;
		top: 0px;
		right: -21px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-left-radius: 20px;
		box-shadow: -5px -7px ${({ theme }) => theme.container};
	}
`;

export const Button = styled.button`
	border: none;
	outline: none;
	background: ${({ theme }) => theme.secondColor};
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: white;
	font-size: 1rem;
	transition: 0.5s;
	text-align: center;

	&:hover {
		opacity: 0.8;
		letter-spacing: 0.1em;
	}
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.container};
	padding: 0.4rem 1rem;
	border-radius: 2rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	cursor: pointer;
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
export const Input = styled.input`
	justify-self: start;
	width: 100%;
	padding-left: 1rem;
	background: transparent;
	color: ${({ theme }) => theme.invertedBackground};
	margin-right: 1rem;
	cursor: pointer;
`;
