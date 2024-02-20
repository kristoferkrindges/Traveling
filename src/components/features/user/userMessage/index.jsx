import React from "react";
import {
	Message,
	ProfilePhoto,
	MessageBody,
	UserName,
	TextMuted,
	Online,
} from "./style";
import { useNavigate } from "react-router-dom";
import { AvatarPhoto } from "../../../images/avatar.styled";
import AvatarNone from "../../../../assets/images/avatarnone.png";
export default function UserMessages({
	photo,
	name,
	message,
	online,
	type,
	at,
}) {
	const navigate = useNavigate();
	const handlerRouted = (evt) => {
		evt.preventDefault();
		navigate(`/profile/${at}`);
	};
	return (
		<Message onClick={type ? type : (evt) => handlerRouted(evt)}>
			<ProfilePhoto>
				<AvatarPhoto src={photo ? photo : AvatarNone} />
				{online && <Online />}
			</ProfilePhoto>
			<MessageBody>
				<UserName>{name}</UserName>
				<TextMuted>{message}</TextMuted>
			</MessageBody>
		</Message>
	);
}
