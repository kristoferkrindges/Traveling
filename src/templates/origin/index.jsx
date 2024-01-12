import React, { useState } from "react";
import TopSideMenu from "../../components/menus/topSide";
import MainTemplate from "../main";
import SidebarMenu from "../../components/menus/sidebar";

export default function OriginTemplate({ type }) {
	const [open, setOpen] = useState(false);
	const handlerOpen = () => {
		setOpen(open ? false : true);
	};
	return (
		<>
			{open && <SidebarMenu />}
			<TopSideMenu open={open} handlerOpen={handlerOpen} />
			<MainTemplate type={type} />
		</>
	);
}
