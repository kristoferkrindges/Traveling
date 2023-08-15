import React from "react";
import TopMenu from "../../components/Menus/TopMenu";
import LayoutMain from "../../layouts/LayoutMain";

function HomePage() {
	return (
		<>
			<TopMenu />
			<LayoutMain type="Home" />
		</>
	);
}

export default HomePage;
