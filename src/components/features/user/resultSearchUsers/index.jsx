import React from "react";

import { ContainerResult } from "./style";
import UserMessages from "../userMessage";

export default function ResultSearchUsersModal({ result }) {
	return (
		<ContainerResult>
			{result.length > 0 &&
				result.map((value, key) => (
					<UserMessages
						key={key}
						photo={value.photo}
						name={value.firstname + " " + value.lastname}
						// message={value.message[value.message.length - 1]}
						message={"@" + value.at}
						// online={value.online}
						online={false}
						type={false}
						at={value.at}
					/>
				))}
		</ContainerResult>
	);
}
