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
	right: 0.5rem;
	top: 1rem;
`;

export const LikeContainer = styled.div`
	position: absolute;
	right: 0.5rem;
	bottom: 1rem;
`;

export const PhotoStorie = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: ${size.lg};
`;
