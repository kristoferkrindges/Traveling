import React, { useState } from "react";
import {
	Friend,
	Request,
	Info,
	ProfilePhoto,
	ContainerName,
	Name,
	TextMuted,
	ActionButtons,
} from "./style";
import ButtonPrimary from "../../ButtonPrimary";

export default function Friends({ photo, name, message }) {
	return (
		// Talvez sem o Friend
		<Friend>
			<Request>
				<Info>
					<ProfilePhoto>
						<img src={photo} />
					</ProfilePhoto>
					<ContainerName>
						<Name>{name}</Name>
						<TextMuted>{message}</TextMuted>
					</ContainerName>
				</Info>
				<ActionButtons>
					<ButtonPrimary label="Accept" />
					<ButtonPrimary color={true} label="Decline" />
				</ActionButtons>
			</Request>
		</Friend>
	);
}
