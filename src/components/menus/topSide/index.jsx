import React from "react";

import { ContainerSideTop, LeftSideTop, RightSideTop } from "./style";
import FeaturesRoutedMenu from "../featuresRouted";
import SearchInput from "../../inputs/search";
import Logo from "../../../assets/images/infinite-removebg-preview.png";
import AvatarButton from "../../buttons/avatar";
import NotificationButton from "../../buttons/notification";
import DarkModeButton from "../../buttons/darkmode";
import { LogoTraveling } from "../../images/logo.styled";
import { Link } from "react-router-dom";

export default function TopSideMenu() {
	return (
		<ContainerSideTop>
			<LeftSideTop>
				<Link to="/">
					<LogoTraveling src={Logo} alt="Traveling" fontSize={`70px`} />
				</Link>
				<SearchInput />
			</LeftSideTop>
			<FeaturesRoutedMenu />
			<RightSideTop>
				<DarkModeButton />
				<NotificationButton />
				<AvatarButton />
			</RightSideTop>
		</ContainerSideTop>
	);
}
