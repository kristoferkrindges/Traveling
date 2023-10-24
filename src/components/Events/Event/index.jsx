import React from "react";
import {
	SectionEvent,
	Left,
	Right,
	Photo,
	MessageBody,
	Name,
	TextMuted,
} from "./style";
import ButtonPrimary from "../../ButtonPrimary";

export default function Event({ name, photo, date }) {
	return (
		<SectionEvent>
			<Left>
				<Photo>
					<img src={photo} alt="" />
				</Photo>
				<MessageBody>
					<Name>{name}</Name>
					<TextMuted>{date}</TextMuted>
				</MessageBody>
			</Left>
			<Right>{/* <ButtonPrimary label={"View"} /> */}</Right>
		</SectionEvent>
	);
}
