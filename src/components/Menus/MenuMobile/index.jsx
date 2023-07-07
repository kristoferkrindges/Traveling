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
import { SidebarData, Settings } from "../SideBar/SidebarData";
import { ThemeContext } from "../../../App";
import { useLocation, Link } from "react-router-dom";

export default function MenuMobile(props) {
	const { setTheme, theme } = useContext(ThemeContext);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { pathname } = useLocation();
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
			{Settings.map(({ icon, label }) => (
				<SLinkContainer key={label}>
					<SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
						<SLinkIcon>{icon}</SLinkIcon>
						{sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
					</SLink>
				</SLinkContainer>
			))}
			<SDivider />
			<STheme>
				{sidebarOpen && <SThemeLabel>Modo escuro</SThemeLabel>}
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
