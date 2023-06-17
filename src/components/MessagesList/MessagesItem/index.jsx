import React, { useState, useContext } from "react";
import {
	Message,
	ProfilePhoto,
	MessageBody,
	UserName,
	TextMuted,
	Online,
} from "./style";
export default function MessagesItem({ photo, name, message, online, type }) {
	return (
		<Message onClick={type}>
			<ProfilePhoto>
				<img src={photo} alt="" />
				{online ? <Online /> : <></>}
			</ProfilePhoto>
			<MessageBody>
				<UserName>{name}</UserName>
				<TextMuted>{message}</TextMuted>
			</MessageBody>
		</Message>
	);
}
