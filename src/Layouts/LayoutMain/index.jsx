import React from "react";
import { MainContainer, Container } from "./style";

import { MessageProvider } from "../../context/messageContext";

import Left from "./Left";
import Middle from "./Middle";
import Right from "./Right";
import { PostProvider } from "../../context/postContext";

export default function LayoutMain({ type }) {
	return (
		<MessageProvider>
			<MainContainer>
				<Container>
					<Left />
					<PostProvider>
						<Middle type={type} />
					</PostProvider>
					<Right type={type} />
				</Container>
			</MainContainer>
		</MessageProvider>
	);
}
