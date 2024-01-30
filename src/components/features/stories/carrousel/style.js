import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const CarrouselContainer = styled.section`
	background-color: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	width: 100%;
	cursor: pointer;

	& a {
		color: ${({ theme }) => theme.text};
	}
`;

export const CarrouselBody = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow-x: scroll;
	height: 119px;
	width: 100%;
	background-color: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	border-radius: ${size.lg};
	padding-right: 2px;
	position: relative;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		display: none;
	}

	.carousel-status {
		padding: 16px 0px;
	}

	@media only screen and (max-width: 2085px) {
		width: 39vw;
	}

	@media only screen and (max-width: 1920px) {
		width: 38.5vw;
	}

	@media only screen and (max-width: 1400px) {
		width: 47.5vw;
	}
	@media only screen and (max-width: 1200px) {
		width: 62.8vw;
	}

	@media only screen and (max-width: 992px) {
		width: 95vw;
	}
`;

export const Check = styled.section`
	position: relative;
	width: 100%;
`;

export const ArrowLeftContainer = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 700;
	cursor: pointer;
	left: 10px;
	top: 40px;
	font-size: 2rem;
	background-color: ${({ theme }) => theme.text};

	& svg {
		color: ${({ theme }) => theme.textInverse};
		width: 25px;
		height: 25px;
	}

	&:hover {
		opacity: 0.7;
	}
`;

export const ArrowRightContainer = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 700;
	cursor: pointer;
	right: 5px;
	top: 40px;
	font-size: 2rem;
	background-color: ${({ theme }) => theme.text};

	& svg {
		color: ${({ theme }) => theme.textInverse};
		width: 25px;
		height: 25px;
	}

	&:hover {
		opacity: 0.7;
	}
`;
