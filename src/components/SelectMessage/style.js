import styled from "styled-components";
import { IoArrowForward, IoMail } from "react-icons/io5";

export const IMail = styled(IoMail)`
	width: 4rem;
	height: 4rem;
	&:hover {
		cursor: pointer;
	}
`;

export const Arrow = styled(IoArrowForward)`
	/* width: 5rem;
	height: 5rem; */
`;
export const Container = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	/* padding: 1.2rem; */
	padding: 15px 30px 30px 30px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	height: 400px;
	text-align: center;

	@media only screen and (max-width: 992px) {
		display: none;
	}

	@media only screen and (max-width: 1684px) {
		height: 430px;
	}
`;

export const Heading = styled.div`
	height: 130px;
	background-color: ${({ theme }) => theme.secondColor};
	padding: 12px 0 0 0;
	clip-path: polygon(0 0, 100% 0, 100% 53%, 49% 100%, 0 53%);
	font-size: 1.7rem;
	font-weight: bold;
	color: #ffff;
	svg {
		font-size: 1rem;
	}
`;
export const Title = styled.div``;

export const Mid = styled.div`
	font-size: 2rem;
	margin: 4rem 0 4rem 0;
`;

export const Button = styled.button`
	outline: none;
	border: none;
	height: 50px;
	display: block;
	margin-top: 30px;
	width: 100%;
	cursor: initial;
	background: ${({ theme }) => theme.secondColor};
	color: #ffff;
	border-radius: 15px;
	font-size: 3.2rem;
`;

export const Text = styled.p``;
