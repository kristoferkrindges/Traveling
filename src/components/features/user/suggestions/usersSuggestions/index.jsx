import React, { useState } from "react";
import UserMessages from "../../userMessage";
import { Order } from "../../../settings/accountSettings/style";
import { PrimaryButton } from "../../../../buttons/primaryButton.styled";

export default function UsersSuggestions({ key, photo, name, at }) {
	const [press, setPress] = useState(false);
	const pressFollow = (evt) => {
		evt.preventDefault();
	};
	return (
		<Order>
			<UserMessages
				key={key}
				photo={photo}
				name={name}
				message={"@" + at}
				online={false}
				type={false}
				at={at}
			/>
			<PrimaryButton onClick={pressFollow}>
				{press ? "Unfollow" : "Follow"}
			</PrimaryButton>
		</Order>
	);
}
