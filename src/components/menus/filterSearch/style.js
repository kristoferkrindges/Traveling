import styled from "styled-components";

import { size } from "../../../styles/variables";

export const OptionsContainer = styled.div`
	padding: ${size.sm} 0;
	border-radius: ${size.lg};
	background-color: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	margin-bottom: 2rem;
	margin-top: 2rem;
`;

export const Options = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

export const Option = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
	& svg {
		width: 20px;
		height: 20px;
		color: ${({ theme }) => theme.text};
	}
	&:hover {
		opacity: 0.5;
		cursor: pointer;
	}
`;

export const Border = styled.div`
	position: absolute;
	width: 40%;
	height: 3px;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.secondColor};
	top: 70px;
`;

export const Legend = styled.span`
	font-weight: bold;
`;
