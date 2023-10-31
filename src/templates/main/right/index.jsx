import React from "react";

import { ContainerSticky } from "../../../components/containers/sticky.styled";

export default function RightTemplate({ type }) {
	return (
		<ContainerSticky bottom={`0`}>
			{/* {type === "Chat" ? (
				<MessagesLayout chat={false} mini={false} />
			) : (
				<MessagesLayout chat={false} mini={true} />
			)}
			{type === "Chat" ? <></> : <Events />}
			<ControllerBoxChat /> */}
			<h1>Oi</h1>
		</ContainerSticky>
	);
}
