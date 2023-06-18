import React from "react";
import TopMenu from "../../components/TopMenu";
import LayoutMain from "../../Layouts/LayoutMain";

function HomePage() {
	return (
		<>
			<TopMenu />
			<LayoutMain type="Home" />
		</>
	);
}

export default HomePage;
