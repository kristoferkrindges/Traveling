import React from "react";
import {
	Message,
	ProfilePhoto,
	MessageBody,
	UserName,
	TextMuted,
	Online,
} from "./style";
import AvatarPhoto from "../images/avatar";
import { useNavigate } from "react-router-dom";
export default function UserMessages({ photo, name, message, online, type }) {
	const navigate = useNavigate();
	const handleRouted = (evt) => {
		evt.preventDefault();
		navigate(`/profile/${message}`);
	};
	return (
		<Message onClick={type ? type : (evt) => handleRouted(evt)}>
			<ProfilePhoto>
				<AvatarPhoto photo={photo} />
				{online ? <Online /> : <></>}
			</ProfilePhoto>
			<MessageBody>
				<UserName>{name}</UserName>
				<TextMuted>{message}</TextMuted>
			</MessageBody>
		</Message>
	);
}
