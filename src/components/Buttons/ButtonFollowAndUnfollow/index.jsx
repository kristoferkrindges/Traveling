import React from "react";
import { Button, ButtonFollowers } from "./style";
export default function ButtonFollowAndUnfollow({ label, click, card }) {
	return (
		<>
			{card ? (
				<Button onClick={(evt) => click(evt)}>{label}</Button>
			) : (
				<ButtonFollowers onClick={(evt) => click(evt)}>{label}</ButtonFollowers>
			)}
		</>
	);
}
