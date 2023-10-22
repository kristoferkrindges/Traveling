import React, { useState, useContext } from "react";
import {
	Container,
	ProfilePhoto,
	TextArea,
	ButtonSend,
	IconSend,
	Area,
	ContextText,
} from "./style";
import { Context as userContext } from "../../../context/userContext";
export default function CreateComment({ createComment }) {
	const [text, setText] = useState();
	const [isFocused, setIsFocused] = useState(false);
	const { userInfo } = useContext(userContext);
	function create(evt) {
		evt.preventDefault();
		createComment(text);
		setText("");
	}
	return (
		<Container>
			<ProfilePhoto>
				<img src={userInfo.photo} alt="" />
			</ProfilePhoto>
			<ContextText>
				<Area>
					<TextArea
						rows="1"
						placeholder={isFocused ? "" : "Type comment..."}
						maxLength={140}
						onChange={(e) => {
							setText(e.target.value);
						}}
						onFocus={() => setIsFocused(true)}
						onBlur={() => setIsFocused(false)}
					></TextArea>
				</Area>
				<ButtonSend onClick={create}>
					<IconSend />
				</ButtonSend>
			</ContextText>
		</Container>
	);
}
