import React from "react";

import { ContainerSideTop, LeftSideTop, RightSideTop } from "./style";
import FeaturesRoutedMenu from "../featuresRouted";
import SearchInput from "../../inputs/search";
import LogoPage from "../../images/logoPage";
import Logo from "../../../assets/images/infinite-removebg-preview.png";
import AvatarButton from "../../buttons/avatar";
import NotificationButton from "../../buttons/notification";
import DarkModeButton from "../../buttons/darkmode";

export default function TopSideMenu() {
	return (
		<ContainerSideTop>
			<LeftSideTop>
				<LogoPage logo={Logo} alt="Traveling" font={`70px`} />
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
