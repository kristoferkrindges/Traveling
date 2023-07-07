import React from "react";
import TopMenu from "../../components/TopMenu";
import LayoutMain from "../../Layouts/LayoutMain";

function OnlyPost() {
	return (
		<>
			<TopMenu />
			<LayoutMain type="OnlyPost" />
		</>
	);
}

export default OnlyPost;
