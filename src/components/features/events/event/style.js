import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const EventContainer = styled.div`
	position: relative;
	transition: 0.5s;
	width: 100%;
	height: 100px;
	transition-delay: 0.5s;
	margin-top: 7rem;

	@media only screen and (max-width: 1322px) {
		width: 85%;
	}
	@media only screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const ContextContainer = styled.div`
	position: relative;
	width: 100%;
	min-height: 250px;
	background: ${({ theme }) => theme.container};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	border-radius: ${size.lg};
	padding: 1;
	/* border-bottom: 35px solid black; */
	&::before {
		content: "";
		bottom: 0;
		position: absolute;
		height: 18%;
		width: 100%;
		background: ${({ theme }) => theme.secondColor};
		border-radius: 0 0 2rem 2rem;
	}
`;

export const HeaderEvent = styled.div`
	position: absolute;
	top: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 1rem;
`;

export const BottomEvent = styled.div`
	position: absolute;
	bottom: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0 1rem;
`;

export const ImgBox = styled.div`
	position: absolute;
	top: 0;
	transform: translateY(-40%);
	width: 250px;
	height: 230px;
	border-radius: ${size.lg};
	background-color: ${({ theme }) => theme.container};
	border: 6px solid ${({ theme }) => theme.background};
	overflow: hidden;
	transition: 0.5s;
	z-index: 10;

	svg {
		width: 100%;
		height: 100%;
	}
`;

export const EventImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: ${size.lg};
`;

export const Content = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 7rem;
`;

export const Name = styled.h2`
	text-transform: uppercase;
	font-size: 1.4rem;
	letter-spacing: 0.5rem;
	line-height: 1.1em;
	font-weight: 600;
	color: ${({ theme }) => theme.text};
`;

export const Toggle = styled.span`
	position: absolute;
	bottom: 0;
	padding: 1rem;
	background: ${({ theme }) => theme.secondColor};
	border-radius: 30px;
	transform: translateY(50%);
	border: 4px solid ${({ theme }) => theme.background};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	transition: 0.5s;
	color: ${({ theme }) => theme.textInverse};

	&:hover {
		opacity: 0.7;
	}
	& svg {
		font-size: 1.5rem;
		transition: 1s;
	}
`;

export const PorcentsContainer = styled.ul`
	position: relative;
	top: 30px;
	width: 100%;
	height: 0;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	transition: 0.5s;
`;
