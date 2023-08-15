import React from "react";
import TopMenu from "../../components/Menus/TopMenu";
import LayoutMain from "../../layouts/LayoutMain";

function ChatPage() {
	return (
		<>
			<TopMenu />
			<LayoutMain type="Chat" />
		</>
	);
}

export default ChatPage;
