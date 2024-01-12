import React, { useContext, useState } from "react";
import {
	NavLink,
	SidebarContainer,
	Items,
	LogoItem,
	Title,
	MenuList,
	Item,
	Icon,
	Bottom,
	ImgBox,
} from "./style";
import { AvatarPhoto } from "../../images/avatar.styled";
import { LogoTraveling } from "../../images/logo.styled";
import { ThemeContext } from "../../../provider/themeProvider";
import Logo from "../../../assets/images/infinite-removebg-preview.png";
import LogoTwo from "../../../assets/images/traveling_white.png";
import {
	ChatIcon,
	EventIcon,
	HomeIcon,
	LogoutIcon,
	ProfileIcon,
	SettingsIcon,
} from "../../icons/iO5Icons.styled";
import { UserContext } from "../../../contexts/userContext";
import SliderButton from "../../buttons/sliderButton";
import { useLocation } from "react-router-dom";
export default function SidebarMenu({ type, optionsMenu }) {
	const { theme } = useContext(ThemeContext);
	const { userInfo, alterDarkMode } = useContext(UserContext);
	const { pathname } = useLocation();

	const [activeTheme, setActiveTheme] = useState(
		theme === "dark" ? true : false
	);
	const alterTheme = (evt) => {
		evt.preventDefault();
		setActiveTheme(activeTheme ? false : true);
		alterDarkMode();
	};

	return (
		<SidebarContainer>
			<Items>
				<LogoItem>
					<NavLink to={`/`}>
						<LogoTraveling
							src={theme === "dark" ? LogoTwo : Logo}
							alt="Traveling"
							fontSize={`70px`}
						/>
						<Title className="Traveling">Traveling</Title>
					</NavLink>
				</LogoItem>
				<MenuList>
					<Item className={pathname === "/" && "active"}>
						<NavLink to={`/`}>
							<Icon className={"icon"}>
								<HomeIcon />
							</Icon>
							<Title className={pathname === "/" && "active"}>Home</Title>
						</NavLink>
					</Item>
					<Item className={pathname === `/profile/${userInfo.at}` && "active"}>
						<NavLink to={`/profile/${userInfo.at}`}>
							<Icon className={"icon"}>
								<ProfileIcon />
							</Icon>
							<Title
								className={pathname === `/profile/${userInfo.at}` && "active"}
							>
								Profile
							</Title>
						</NavLink>
					</Item>
					<Item className={pathname === "/events" && "active"}>
						<NavLink to={`/events`}>
							<Icon className={"icon"}>
								<EventIcon />
							</Icon>
							<Title className={pathname === "/events" && "active"}>
								Events
							</Title>
						</NavLink>
					</Item>
					<Item className={pathname === "/messages" && "active"}>
						<NavLink to={`/messages`}>
							<Icon className={"icon"}>
								<ChatIcon />
							</Icon>
							<Title className={pathname === "/messages" && "active"}>
								Messages
							</Title>
						</NavLink>
					</Item>
					<Item className={pathname === "/settings" && "active"}>
						<NavLink to={`/settings`}>
							<Icon className={"icon"}>
								<SettingsIcon />
							</Icon>
							<Title className={pathname === "/settings" && "active"}>
								Settings
							</Title>
						</NavLink>
					</Item>
				</MenuList>
				<Bottom>
					<Item>
						<NavLink>
							<Icon>
								<ImgBox>
									<AvatarPhoto src={userInfo.photo} />
								</ImgBox>
								{/* <AvatarPhoto src={userInfo.photo} /> */}
							</Icon>
							<Title>{userInfo.firstname}</Title>
						</NavLink>
					</Item>
					<Item>
						<NavLink>
							<Icon>
								<SliderButton
									active={activeTheme}
									click={alterTheme}
									color={true}
								/>
							</Icon>
							<Title>DarkMode</Title>
						</NavLink>
					</Item>
					<Item>
						<NavLink>
							<Icon>
								<LogoutIcon />
							</Icon>
							<Title>Logout</Title>
						</NavLink>
					</Item>
				</Bottom>
			</Items>
		</SidebarContainer>
	);
}
