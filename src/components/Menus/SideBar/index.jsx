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
import { SidebarData } from "./SidebarData";
import { useLocation } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

export default function SideBar(props) {
	const { theme } = useContext(ThemeContext);
	const { alterDarkMode, logout, userInfo } = useContext(userContext);
	const { pathname } = useLocation();

	function handlerButton(evt) {
		evt.preventDefault();
		alterDarkMode();
	}
	function handlerLogout(evt) {
		evt.preventDefault();
		logout();
	}
	return (
		<Context>
			{SidebarData.map(({ icon, label, notification, to }) => (
				<SLinkContainer key={label} isActive={pathname === to}>
					<SLink to={to === "/profile" ? `/profile/${userInfo.at}` : to}>
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
			<SLinkContainer>
				<SLink to="/settings">
					<SLinkIcon>
						<AiOutlineSetting />
					</SLinkIcon>
					<SLinkLabel>Settings</SLinkLabel>
				</SLink>
			</SLinkContainer>
			<SLinkContainer>
				<SLink
					onClick={(evt) => {
						handlerLogout(evt);
					}}
				>
					<SLinkIcon>
						<MdLogout />
					</SLinkIcon>
					<SLinkLabel>Logout</SLinkLabel>
				</SLink>
			</SLinkContainer>
			<SDivider />
			<STheme>
				<SThemeLabel>Darkmode</SThemeLabel>
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
