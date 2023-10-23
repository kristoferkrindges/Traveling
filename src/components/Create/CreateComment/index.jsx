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
import { toast } from "react-toastify";
export default function CreateComment({ createComment }) {
	const [text, setText] = useState();
	const [isFocused, setIsFocused] = useState(false);
	const { userInfo } = useContext(userContext);
	async function create(evt) {
		evt.preventDefault();
		if (text) {
			await createComment(text);
			setText("");
		} else {
			toast.error("There is nothing to be published");
		}
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
						value={text}
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
