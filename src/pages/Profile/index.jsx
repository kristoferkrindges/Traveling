import React from "react";
import TopMenu from "../../components/Menus/TopMenu";
import LayoutMain from "../../layouts/LayoutMain";

function ProfilePage() {
	return (
		<>
			<TopMenu />
			<LayoutMain type="Profile" />
		</>
	);
}

export default ProfilePage;
