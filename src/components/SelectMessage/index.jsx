import React, { useState } from "react";
import { Container, Heading, Title, Mid, Button, Arrow, IMail } from "./style";
export default function SelectMessage({ type }) {
	return (
		<>
			{type == "Message" ? (
				<Container>
					<Heading>
						<Title>Messages</Title>
						<IMail />
					</Heading>
					<Mid>Choose one of the chats on the right side</Mid>
					<Button>
						<Arrow />
					</Button>
				</Container>
			) : (
				<></>
			)}
		</>
	);
}
