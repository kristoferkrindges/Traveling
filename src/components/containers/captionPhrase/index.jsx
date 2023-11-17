import React from "react";
import { Caption, Form, TextArea, Phrase } from "./style";

export default function CaptionPhraseContainer({
	stateEditPost,
	setStatePhrase,
	statePhrase,
	stop,
}) {
	return (
		<Caption onClick={stop}>
			{stateEditPost ? (
				<Form>
					<TextArea
						rows="1"
						value={statePhrase}
						onChange={(e) => {
							setStatePhrase(e.target.value);
						}}
						maxLength={140}
					></TextArea>
				</Form>
			) : (
				<Phrase>{statePhrase}</Phrase>
			)}
		</Caption>
	);
}
