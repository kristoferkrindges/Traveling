import React, { useState, useContext } from "react";
import {
	Message,
	ProfilePhoto,
	MessageBody,
	UserName,
	TextMuted,
	Online,
} from "./style";
import { MessageContext } from "../../../context/messageContext";
export default function MessagesItem({ photo, name, message, online }) {
	const { HandlerMessage, TestOpen } = useContext(MessageContext);
	function Click() {
		TestOpen();
		HandlerMessage("id");
	}
	return (
		<Message onClick={Click}>
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
