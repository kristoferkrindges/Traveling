import React, { useContext, useEffect, useState } from "react";
import HeadingContainer from "../../../containers/heading";
import Loader from "../../../loader";
import { EventContext } from "../../../../contexts/eventContext";
import MinEvent from "../minEvent";
import { RandomContainer } from "./style";

export default function RandomEvent() {
	const { randomEvent, startRandomEvent } = useContext(EventContext);

	useEffect(() => {
		startRandomEvent();
	}, []);

	return (
		<RandomContainer>
			<HeadingContainer type={"Events"} text={"Events"} />
			{randomEvent ? (
				randomEvent.length > 0 ? (
					<MinEvent object={randomEvent[0]} />
				) : null
			) : (
				<Loader />
			)}
		</RandomContainer>
	);
}
