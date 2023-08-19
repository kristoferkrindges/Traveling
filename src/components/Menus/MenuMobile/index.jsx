import React, { useState, useContext } from "react";
import {
	SDivider,
	SLink,
	SLinkContainer,
	SLinkIcon,
	SLinkLabel,
	SLinkNotification,
	Logo,
	Context,
	STheme,
	SThemeLabel,
	SThemeToggler,
	SToggleThumb,
	Img,
	Name,
} from "./style";
import { SidebarData } from "../SideBar/SidebarData";
import { ThemeContext } from "../../../App";
import { Context as userContext } from "../../../context/userContext";
import { useLocation, Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

export default function MenuMobile(props) {
	const { theme } = useContext(ThemeContext);
	const { alterDarkMode, logout } = useContext(userContext);
	const [sidebarOpen, setSidebarOpen] = useState(false);
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
		<Context
			isOpen={sidebarOpen}
			style={
				props.total
					? { margin: "0% 0% 0% 0%", height: "1000px", borderradius: "0" }
					: {}
			}
		>
			<Link to="/login">
				<Logo>
					<Img
						src={
							"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
						}
						alt="logo"
					></Img>
					<Name
						style={
							!sidebarOpen ? { width: 0, padding: 0, display: "none" } : {}
						}
					>
						Kristofer R.K
					</Name>
				</Logo>
			</Link>
			<SDivider />
			{SidebarData.map(({ icon, label, notification, to }) => (
				<SLinkContainer key={label} isActive={pathname === to}>
					<SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
						<SLinkIcon>{icon}</SLinkIcon>
						{sidebarOpen && (
							<>
								<SLinkLabel>{label}</SLinkLabel>
								{!!notification && (
									<SLinkNotification>{notification}</SLinkNotification>
								)}
							</>
						)}
					</SLink>
				</SLinkContainer>
			))}
			<SDivider />
			<SLinkContainer>
				<SLink
					to="/settings"
					style={!sidebarOpen ? { width: `fit-content` } : {}}
				>
					<SLinkIcon>
						<AiOutlineSetting />
					</SLinkIcon>
					{sidebarOpen && <SLinkLabel>Settings</SLinkLabel>}
				</SLink>
			</SLinkContainer>
			<SLinkContainer>
				<SLink
					onClick={(evt) => {
						handlerLogout(evt);
					}}
					style={!sidebarOpen ? { width: `fit-content` } : {}}
				>
					<SLinkIcon>
						<MdLogout />
					</SLinkIcon>
					{sidebarOpen && <SLinkLabel>Logout</SLinkLabel>}
				</SLink>
			</SLinkContainer>
			<SDivider />
			<STheme>
				{sidebarOpen && <SThemeLabel>Modo escuro</SThemeLabel>}
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
