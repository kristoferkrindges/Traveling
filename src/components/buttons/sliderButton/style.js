import styled from "styled-components";
import { btnReset } from "../../../styles/variables";

export const SThemeToggler = styled.button`
	${btnReset};
	margin: 0 auto;
	cursor: pointer;
	width: 36px;
	height: 20px;
	border-radius: 10px;
	background: ${({ theme, isActive }) =>
		!isActive ? theme.secondColor : theme.primary};
	position: relative;
`;

export const SToggleThumb = styled.div`
	height: 18px;
	width: 18px;
	position: absolute;
	top: 1px;
	bottom: 1px;
	transition: 0.2s ease right;
	right: calc(100% - 18px - 1px);
	border-radius: 50%;
	background: ${({ theme }) => theme.container};
`;
