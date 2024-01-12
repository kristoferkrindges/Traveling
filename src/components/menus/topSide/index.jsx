import React, { useContext, useEffect, useState } from "react";
import {
	ContainerSideTop,
	LeftSideTop,
	MidSideTop,
	RightSideTop,
} from "./style";
import FeaturesRoutedMenu from "../featuresRouted";
import Logo from "../../../assets/images/infinite-removebg-preview.png";
import LogoTwo from "../../../assets/images/traveling_white.png";
import AvatarButton from "../../buttons/avatar";
import NotificationButton from "../../buttons/notification";
import DarkModeButton from "../../buttons/darkmode";
import { LogoTraveling } from "../../images/logo.styled";
import { Link } from "react-router-dom";
import SearchTopMenu from "../../inputs/search";
import { ThemeContext } from "../../../provider/themeProvider";
import OpenMenuButton from "../../buttons/openMenu";

export default function TopSideMenu({ open, handlerOpen }) {
	const { theme } = useContext(ThemeContext);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<ContainerSideTop>
			<LeftSideTop>
				<Link to="/">
					<LogoTraveling
						src={theme === "dark" ? LogoTwo : Logo}
						alt="Traveling"
						fontSize={`70px`}
					/>
				</Link>
				<SearchTopMenu />
			</LeftSideTop>
			<MidSideTop>
				<FeaturesRoutedMenu />
			</MidSideTop>
			<RightSideTop>
				{windowWidth > 1400 && <DarkModeButton />}
				<NotificationButton />
				{windowWidth > 1400 && <AvatarButton />}
				<OpenMenuButton click={handlerOpen} open={open} />
			</RightSideTop>
		</ContainerSideTop>
	);
}
