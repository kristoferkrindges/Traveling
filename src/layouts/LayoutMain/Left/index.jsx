import React, { useContext } from "react";
import { Container } from "./style";
import InfoUser from "../../../components/InfoUser";
import SideBar from "../../../components/Menus/SideBar";
import MenuMobile from "../../../components/Menus/MenuMobile";

import { MenuContext } from "../../../context/menuContext";

export default function Left() {
	const { openMenu } = useContext(MenuContext);
	return (
		<Container>
			{openMenu ? <MenuMobile /> : <></>}

			<InfoUser />
			<SideBar />
		</Container>
	);
}
