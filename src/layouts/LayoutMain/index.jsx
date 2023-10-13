import React from "react";
import { MainContainer, Container } from "./style";

import { MessageProvider } from "../../context/messageContext";

import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";

export default function LayoutMain({ type }) {
	return (
		<MessageProvider>
			<MainContainer>
				<Container>
					<Left />
					<Middle type={type} />
					<Right type={type} />
				</Container>
			</MainContainer>
		</MessageProvider>
	);
}
