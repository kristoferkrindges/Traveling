import styled from "styled-components";
import { btnReset, v } from "../../../styles/variables";
import { Link } from "react-router-dom";
export const Context = styled.div`
	border-radius: 1rem;
	padding: 1rem;
	background: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);

	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;

export const SDivider = styled.div`
	height: 1px;
	width: 100%;
	background: ${({ theme }) => theme.bg3};
	margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
	background: ${({ theme, isActive }) =>
		!isActive ? `transparent` : theme.secondColor};
	border-radius: 1rem;
	margin: 8px 0;
	:hover {
		box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
	}
`;

export const SLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: inherit;
	font-size: 16px;
	padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
	padding: ${v.smSpacing} ${v.mdSpacing};
	display: flex;
	svg {
		font-size: 20px;
	}
`;

export const SLinkLabel = styled.span`
	display: block;
	flex: 1;
	margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
	font-size: 14px;
	padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
	border-radius: calc(${v.borderRadius} / 2);
	background: ${({ theme }) => theme.primary};
	color: white;
	margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
`;
export const SThemeLabel = styled.span`
	display: block;
	flex: 1;
`;
export const SThemeToggler = styled.button`
	${btnReset};
	margin: 0 auto;
	cursor: pointer;
	width: 36px;
	height: 20px;
	border-radius: 10px;
	background: ${({ theme, isActive }) =>
		!isActive ? theme.bg3 : theme.primary};
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
	background: ${({ theme }) => theme.text};
`;
