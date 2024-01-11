import React from "react";
import { ContainerSticky } from "../../../components/containers/sticky.styled";
import CardInfoUser from "../../../components/features/user/cardUserInfo";
import RandomEvent from "../../../components/features/events/randomEvent";

export default function LeftTemplate() {
	// const { openMenu } = useContext(MenuContext);
	return (
		<ContainerSticky>
			{/* {openMenu ? <MenuMobile /> : <></>} */}
			<CardInfoUser />
			<RandomEvent />
		</ContainerSticky>
	);
}
