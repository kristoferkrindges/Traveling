import React, { useContext, useState } from "react";
import UserMessages from "../../userMessage";
import { PrimaryButton } from "../../../../buttons/primaryButton.styled";
import { UserContext } from "../../../../../contexts/userContext";
import { OrderUser } from "./style";
import AvatarNone from "../../../../../assets/images/avatarnone.png";

export default function UsersSuggestions({ key, photo, name, at, id }) {
	const { follow } = useContext(UserContext);

	const [press, setPress] = useState(false);

	const pressFollow = async (evt) => {
		evt.preventDefault();
		setPress(press ? false : true);
		await follow(id, !press);
	};
	return (
		<OrderUser>
			<UserMessages
				key={key}
				photo={photo || !photo === "" ? photo : AvatarNone}
				name={name}
				message={"@" + at}
				online={false}
				type={false}
				at={at}
			/>
			<PrimaryButton onClick={pressFollow}>
				{press ? "Unfollow" : "Follow"}
			</PrimaryButton>
		</OrderUser>
	);
}
