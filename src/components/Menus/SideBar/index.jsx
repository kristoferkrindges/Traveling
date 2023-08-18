import React, { useContext } from "react";
import {
	Context,
	SDivider,
	SLink,
	SLinkContainer,
	SLinkIcon,
	SLinkLabel,
	SLinkNotification,
	STheme,
	SThemeLabel,
	SThemeToggler,
	SToggleThumb,
} from "./style";
import { ThemeContext } from ".././../../App";
import { Context as userContext } from "../../../context/userContext";
import { SidebarData, Settings } from "./SidebarData";
import { useLocation } from "react-router-dom";

export default function SideBar(props) {
	const { theme } = useContext(ThemeContext);
	const { alterDarkMode } = useContext(userContext);
	const { pathname } = useLocation();

	function handlerButton(evt) {
		evt.preventDefault();
		alterDarkMode();
	}
	return (
		<Context>
			{SidebarData.map(({ icon, label, notification, to }) => (
				<SLinkContainer key={label} isActive={pathname === to}>
					<SLink to={to}>
						<SLinkIcon>{icon}</SLinkIcon>
						<SLinkLabel>{label}</SLinkLabel>
						{/* if notifications are at 0 or null, do not display */}
						{!!notification && (
							<SLinkNotification>{notification}</SLinkNotification>
						)}
					</SLink>
				</SLinkContainer>
			))}
			<SDivider />
			{Settings.map(({ icon, label, to }) => (
				<SLinkContainer key={label}>
					<SLink to={to}>
						<SLinkIcon>{icon}</SLinkIcon>
						<SLinkLabel>{label}</SLinkLabel>
					</SLink>
				</SLinkContainer>
			))}
			<SDivider />
			<STheme>
				<SThemeLabel>Modo escuro</SThemeLabel>
				<SThemeToggler
					isActive={theme === "dark"}
					onClick={(evt) => {
						handlerButton(evt);
					}}
				>
					<SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
				</SThemeToggler>
			</STheme>
		</Context>
	);
}
