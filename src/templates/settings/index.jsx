import React from "react";
import TopSideMenu from "../../components/menus/topSide";
import MainTemplate from "../main";

export default function SettingsTemplate() {
	return (
		<>
			<TopSideMenu />
			<MainTemplate type={"Settings"} />
		</>
	);
}
