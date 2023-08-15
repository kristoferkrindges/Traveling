import React from "react";
import { Container } from "./style";
import MessagesLayout from "../../MessagesLayout";
import Events from "../../../components/Events";

import ControllerBoxChat from "../../../controllers/ControllerBoxChat";

export default function Right({ type }) {
	return (
		<Container>
			{type == "Chat" ? (
				<MessagesLayout chat={false} mini={false} />
			) : (
				<MessagesLayout chat={false} mini={true} />
			)}
			{type == "Chat" ? <></> : <Events />}
			<ControllerBoxChat />
		</Container>
	);
}
