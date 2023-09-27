import React from "react";
import {
	Container,
	Left,
	Right,
	Photo,
	MessageBody,
	Name,
	TextMuted,
} from "./style";
import ControllerButtonFollow from "../../controllers/ControllerButtonFollow";

export default function Followers({
	photo,
	firstname,
	lastname,
	at,
	id,
	follow,
}) {
	return (
		<Container>
			<Left>
				<Photo>
					<img src={photo} alt="" />
				</Photo>
				<MessageBody>
					<Name>{firstname + " " + lastname}</Name>
					<TextMuted>{"@" + at}</TextMuted>
				</MessageBody>
			</Left>
			<ControllerButtonFollow state={follow} id={id} card={false} />
		</Container>
	);
}
