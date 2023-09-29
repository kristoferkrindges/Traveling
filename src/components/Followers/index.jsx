import React, { useContext } from "react";
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
import { Link } from "react-router-dom";
import { Context as userContext } from "../../context/userContext";

export default function Followers({
	photo,
	firstname,
	lastname,
	at,
	id,
	follow,
}) {
	const { userInfo } = useContext(userContext);
	return (
		<Container>
			<Link to={`/profile/${at}`}>
				<Left>
					<Photo>
						<img src={photo} alt="" />
					</Photo>
					<MessageBody>
						<Name>{firstname + " " + lastname}</Name>
						<TextMuted>{"@" + at}</TextMuted>
					</MessageBody>
				</Left>
			</Link>
			{userInfo.at === at ? null : (
				<ControllerButtonFollow state={follow} id={id} card={false} />
			)}
		</Container>
	);
}
