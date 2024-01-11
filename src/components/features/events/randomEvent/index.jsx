import React, { useContext, useEffect, useState } from "react";
import { MessagesContainer } from "../../messages/messages/style";
import HeadingContainer from "../../../containers/heading";
import Loader from "../../../loader";
import { EventContext } from "../../../../contexts/eventContext";
import MinEvent from "../minEvent";
import { RandomContainer } from "./style";

export default function RandomEvent() {
	const { findRandomEvent } = useContext(EventContext);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (data && data.length < 1) {
			findEvents();
		}
	}, []);

	const findEvents = async () => {
		setData(await findRandomEvent());
	};
	return (
		<RandomContainer>
			<HeadingContainer type={"Events"} text={"Events"} />
			{data ? (
				data.length > 0 ? (
					data.map((value, key) => <MinEvent key={key} object={value} />)
				) : null
			) : (
				<Loader />
			)}
		</RandomContainer>
	);
}
