import React from "react";
import { Form, ProfilePhoto, Input } from "./style";
import ButtonPrimary from "../ButtonPrimary";

export default function CreatePost() {
	return (
		<Form>
			<ProfilePhoto>
				<img src="https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg" />
			</ProfilePhoto>
			<Input type="text" placeholder="What's on your mind, Kristofer?" />
			<ButtonPrimary label="Create"></ButtonPrimary>
		</Form>
	);
}
