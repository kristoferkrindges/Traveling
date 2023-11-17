import React from "react";
import TopSideMenu from "../../components/menus/topSide";
import MainTemplate from "../main";

export default function MessagesTemplate() {
	return (
		<>
			<TopSideMenu />
			<MainTemplate type={"Messages"} />
		</>
	);
}
