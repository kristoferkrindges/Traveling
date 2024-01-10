import React, { useContext, useEffect, useState } from "react";
import { MessagesContainer } from "../../messages/messages/style";
import HeadingContainer from "../../../containers/heading";
import Loader from "../../../loader";
import UsersSuggestions from "./usersSuggestions";
import { UserContext } from "../../../../contexts/userContext";

export default function Suggestions() {
	const { findSuggestionsUsers } = useContext(UserContext);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (data && data.length < 1) {
			findUsers();
		}
	}, []);

	const findUsers = async () => {
		setData(await findSuggestionsUsers());
	};
	return (
		<MessagesContainer>
			<HeadingContainer type={"Suggestions"} text={"Suggestions"} />
			{data ? (
				data.length > 0 ? (
					data.map((value, key) => (
						<UsersSuggestions
							key={key}
							photo={value.photo}
							name={value.firstname + " " + value.lastname}
							message={"@" + value.at}
							online={true}
							type={false}
							at={value.at}
						/>
					))
				) : null
			) : (
				<Loader />
			)}
		</MessagesContainer>
	);
}
