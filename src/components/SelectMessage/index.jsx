import React, { useState } from "react";
import {
	Container,
	Heading,
	Title,
	ProfilePhoto,
	Online,
	Mid,
	Text,
	Arrow,
} from "./style";
export default function SelectMessage({ type }) {
	return (
		<>
			{type == "Message" ? (
				<Container>
					<Heading>
						<Title>Messages</Title>
						<ProfilePhoto>
							<img
								src={
									"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
								}
								alt=""
							/>
							<Online />
						</ProfilePhoto>
					</Heading>
					<Mid>
						<Text>Choose one of the chats on the right side</Text>
						<Arrow />
					</Mid>
				</Container>
			) : (
				<></>
			)}
		</>
	);
}
