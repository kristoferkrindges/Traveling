import React, { useState, useContext } from "react";
import { Context as UserContext } from "../../context/userContext";
import ButtonFollowAndUnfollow from "../../components/Buttons/ButtonFollowAndUnfollow";

// Gerenciar contexto
export default function ControllerButtonFollow({ id, state, func }) {
	const [press, setPress] = useState(state);
	const { follow } = useContext(UserContext);
	async function processFollower(evt) {
		evt.preventDefault();
		console.log("entrou");
		await follow(id);
		setPress(press ? false : true);
		func();
	}
	return (
		<>
			<ButtonFollowAndUnfollow
				click={processFollower}
				label={press ? "Unfollow" : "Follow"}
			/>
		</>
	);
}
