import React from "react";
import {
	ContainerSideTop,
	LeftSideTop,
	MidSideTop,
	RightSideTop,
} from "./style";
import FeaturesRoutedMenu from "../featuresRouted";
import Logo from "../../../assets/images/infinite-removebg-preview.png";
import AvatarButton from "../../buttons/avatar";
import NotificationButton from "../../buttons/notification";
import DarkModeButton from "../../buttons/darkmode";
import { LogoTraveling } from "../../images/logo.styled";
import { Link } from "react-router-dom";
import SearchTopMenu from "../../inputs/search";

export default function TopSideMenu() {
	return (
		<ContainerSideTop>
			<LeftSideTop>
				<Link to="/">
					<LogoTraveling src={Logo} alt="Traveling" fontSize={`70px`} />
				</Link>
				<SearchTopMenu />
			</LeftSideTop>
			<MidSideTop>
				<FeaturesRoutedMenu />
			</MidSideTop>
			<RightSideTop>
				<DarkModeButton />
				<NotificationButton />
				<AvatarButton />
			</RightSideTop>
		</ContainerSideTop>
	);
}
