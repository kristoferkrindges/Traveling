import React, { useContext } from "react";
import { Container } from "./style";
import InfoUser from "../../../components/InfoUser";
import SideBar from "../../../components/SideBar";
import MenuMobile from "../../../components//MenuMobile";

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
