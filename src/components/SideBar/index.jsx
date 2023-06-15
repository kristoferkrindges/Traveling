import React, { useContext, useRef, useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import { ThemeContext } from "./../../App";
import { SidebarData, Settings } from "./SidebarData";
import { useLocation } from "react-router-dom";

export default function SideBar(props) {
	const { setTheme, theme } = useContext(ThemeContext);
	const { pathname } = useLocation();
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
					onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
				>
					<SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
				</SThemeToggler>
			</STheme>
		</Context>
	);
}
