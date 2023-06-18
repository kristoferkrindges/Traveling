import React from "react";
import TopMenu from "../../components/TopMenu";
import LayoutMain from "../../Layouts/LayoutMain";

function ChatPage() {
	return (
		<>
			<TopMenu />
			<LayoutMain type="Chat" />
		</>
	);
}

export default ChatPage;
