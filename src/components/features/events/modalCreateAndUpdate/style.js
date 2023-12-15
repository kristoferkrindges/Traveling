import styled from "styled-components";
import { size } from "../../../../styles/variables";
export const PhotoEventContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	z-index: 100;
`;

export const PhotoContainer = styled.div`
	width: 240px;
	height: 240px;
`;

export const ImageEvent = styled.img`
	border-radius: ${size.lg};
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ControllerLast = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	font-size: 100%;
`;

export const EditPhoto = styled.label`
	position: absolute;
	bottom: -0.5rem;
	right: 47%;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.background};
	border: 3px solid ${({ theme }) => theme.background};
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
