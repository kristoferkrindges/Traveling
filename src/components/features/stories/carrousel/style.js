import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const CarrouselContainer = styled.section`
	max-width: 38vw;
	min-width: 37vw;
	background-color: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
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
	/* justify-content: center; */
	height: 119px;
	max-width: 731px;
	/* max-width: 38vw; */
	background-color: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	border-radius: ${size.lg};
	/* padding: ${size.sm}; */
	position: relative;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		display: none;
	}

	.carousel-status {
		padding: 16px 0px;
	}
`;

export const Check = styled.section`
	position: relative;
`;

export const ArrowLeftContainer = styled.div`
	width: 25px;
	height: 25px;
	position: absolute;
	/* background-color: #ffffff; */
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 999;
	cursor: pointer;
	left: 10px;
	top: 40px;
	font-size: 2rem;

	& img {
		width: 10px;
		height: 10px;
	}

	&:hover {
		opacity: 0.7;
	}
`;

export const ArrowRightContainer = styled.div`
	width: 25px;
	height: 25px;
	position: absolute;
	/* background-color: #ffffff; */
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0.8;
	z-index: 999;
	cursor: pointer;
	right: 10px;
	top: 40px;
	font-size: 2rem;

	& img {
		width: 10px;
		height: 10px;
	}

	&:hover {
		opacity: 0.7;
	}
`;
