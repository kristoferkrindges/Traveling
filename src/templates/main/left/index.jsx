import React from "react";
import { ContainerSticky } from "../../../components/containers/containerSticky.styled";
import CardInfoUser from "../../../components/features/user/cardUserInfo";

export default function LeftTemplate() {
	// const { openMenu } = useContext(MenuContext);
	return (
		<ContainerSticky>
			{/* {openMenu ? <MenuMobile /> : <></>} */}
			<CardInfoUser />
		</ContainerSticky>
	);
}
