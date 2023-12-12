import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const ContainerItemStorie = styled.div`
	position: relative;
	border-radius: ${size.lg};
	width: 100%;
	height: 100%;
`;

export const MenuContainer = styled.div`
	position: absolute;
	/* right: 0.5rem; */
	top: 1rem;
	display: flex;
	justify-content: space-between;
	padding: ${size.sm};
	width: 100%;
	color: white;
	font-weight: bold;
`;

export const LikeContainer = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 0.4rem;
	right: 0.5rem;
	bottom: 1rem;

	& svg {
		color: white;
		font-size: 2rem;
		font-weight: bold;
	}

	& svg:hover {
		color: red;
		opacity: 0.7;
	}

	& span {
		color: white;
		font-weight: bold;
		font-size: 1rem;
	}
`;

export const PhotoStorie = styled.img`
	max-width: 100%;
	height: 100%;
	/* display: block; */
	/* height: 100%;
	width: 100%; */
`;

export const Photo = styled.div`
	position: relative;
	border-radius: ${size.lg};
	overflow: hidden;
	height: 100%;
`;

export const IconsContainer = styled.div`
	display: flex;
	gap: 1rem;
	& svg {
		color: white;
		font-size: 1.7rem;
		font-weight: bold;
		cursor: pointer;
	}
	& svg:hover {
		opacity: 0.7;
	}
`;
