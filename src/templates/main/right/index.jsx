import React from "react";

import { ContainerSticky } from "../../../components/containers/sticky.styled";
import Messages from "../../../components/features/messages/messages";

export default function RightTemplate({ type }) {
	return (
		<ContainerSticky bottom={`0`}>
			<Messages />
		</ContainerSticky>
	);
}
