import React from "react";

import { ContainerSticky } from "../../../components/containers/sticky.styled";
import Messages from "../../../components/features/messages/messages";
import Suggestions from "../../../components/features/user/suggestions";

export default function RightTemplate() {
	return (
		<ContainerSticky>
			<Messages />
			<Suggestions />
		</ContainerSticky>
	);
}
