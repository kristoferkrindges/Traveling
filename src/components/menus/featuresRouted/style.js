import styled from "styled-components";
import { size } from "../../../styles/variables";

export const Navigation = styled.div`
	display: flex;
	align-items: center;
	gap: 80px;
`;

export const ContainerIcon = styled.span`
	position: relative;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		filter: drop-shadow(0 0 10px ${({ theme }) => theme.text})
			drop-shadow(0 0 20px ${({ theme }) => theme.text});
	}
	& svg {
		width: 25px;
		height: 25px;
	}
	& a {
		color: ${({ theme }) => theme.text};
	}
`;

export const BorderSelect = styled.div`
	position: absolute;
	width: 4rem;
	padding: 1px;
	background-color: transparent;
	left: -1.3rem;
	top: 3rem;
`;

export const Legend = styled.span`
	position: absolute;
	top: 4rem;
	left: -1.8rem;
	padding: ${size.sm};
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	transition: 0.5s;
	z-index: 999;
`;
