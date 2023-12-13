import React from "react";

import { ContainerSticky } from "../../../components/containers/sticky.styled";
import Messages from "../../../components/features/messages/messages";

export default function RightTemplate() {
	return (
		<ContainerSticky>
			<Messages />
		</ContainerSticky>
	);
}
