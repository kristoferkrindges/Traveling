import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const EventContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	margin: 1rem 0;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);

	& a {
		color: ${({ theme }) => theme.text};
	}
	& img {
		cursor: pointer;
	}
`;

export const ContextPhoto = styled.div`
	position: relative;
	border-radius: ${size.lg};
	padding: ${size.sm};
	overflow: hidden;
	/* background-image: ${(props) => props.img}; */
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.text};
	text-transform: uppercase;
	letter-spacing: 0.5rem;
	font-weight: 600;
	line-height: 1.1em;
	text-align: center;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;

export const HeaderEvent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const CirclePhoto = styled.div`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	cursor: pointer;
	background-color: ${({ theme }) => theme.container};
	display: flex;
	align-items: center;
	justify-content: center;

	img:hover {
		opacity: 0.7;
	}
`;

export const MidEvent = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	justify-content: space-between;
	width: 100%;
`;

export const MidEventContainers = styled.div`
	display: flex;
	/* align-items: center; */
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
	width: 100%;
`;

export const ButtonsCointainer = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	justify-content: space-between;
	width: 100%;

	svg {
		font-size: 1.2rem;
	}
`;

export const MidTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const MidContext = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	width: 100%;

	svg {
		font-size: 1.2rem;
	}
`;

export const ContentMidContext = styled.span`
	font-weight: 600;
`;

export const BottomEvent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
export const PeopleGoing = styled.span`
	cursor: pointer;
	margin-left: 0.5rem;
	font-weight: bold;
	color: white;
	font-size: 1.2rem;
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
