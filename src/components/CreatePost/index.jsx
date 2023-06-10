import React from "react";
import { Form, ProfilePhoto, Input } from "./style";
import ButtonPrimary from "../ButtonPrimary";

export default function CreatePost() {
	return (
		<Form>
			<ProfilePhoto>
				<img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" />
			</ProfilePhoto>
			<Input type="text" placeholder="What's on your mind, Kristofer?" />
			<ButtonPrimary label="Create"></ButtonPrimary>
		</Form>
	);
}
