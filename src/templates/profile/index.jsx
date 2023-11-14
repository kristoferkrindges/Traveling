import React from "react";
import TopSideMenu from "../../components/menus/topSide";
import MainTemplate from "../main";

export default function ProfileTemplate() {
	return (
		<>
			<TopSideMenu />
			<MainTemplate type={"Profile"} />
		</>
	);
}
