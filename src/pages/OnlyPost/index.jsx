import React from "react";
import TopMenu from "../../components/Menus/TopMenu";
import LayoutMain from "../../layouts/LayoutMain";

function OnlyPost() {
	return (
		<>
			<TopMenu />
			<LayoutMain type="OnlyPost" />
		</>
	);
}

export default OnlyPost;
