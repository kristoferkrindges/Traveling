import React, { useState, useContext } from "react";
import {
	Container,
	ProfilePhoto,
	TextArea,
	ButtonSend,
	IconSend,
	Area,
} from "./style";
import Kris from "../../../assets/images/foto3.png";
export default function CreateComment() {
	return (
		<Container>
			<ProfilePhoto>
				<img src={Kris} alt="" />
			</ProfilePhoto>
			<Area>
				<TextArea rows="1" placeholder="Type comment..."></TextArea>
			</Area>
			<ButtonSend>
				<IconSend />
			</ButtonSend>
		</Container>
	);
}
