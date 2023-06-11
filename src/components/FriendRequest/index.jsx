import React, { useState } from "react";
import Friends from "./Friends";
export default function FriendRequest() {
	const [request, setRequest] = useState([
		{
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Mari Lawrence",
			message: "2 mutual friends",
		},
		{
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Joseph Doll",
			message: "5 mutual friends",
		},
		{
			photo:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
			name: "Daniel Larusso",
			message: "18 mutual friends",
		},
	]);
	return (
		<>
			{request.length > 0 &&
				request.map((value, key) => (
					<Friends
						key={key}
						photo={value.photo}
						name={value.name}
						message={value.message}
					/>
				))}
		</>
	);
}
