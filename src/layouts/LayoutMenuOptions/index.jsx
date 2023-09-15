import React from "react";
import { ContainerOptions, ContextContainer, CardContent } from "./style";

import ControllerSelectOptionsProfile from "../../controllers/ControllerSelectOptions/ControllerSelectOptionsProfile";

export default function LayoutMenuOptions({ equal }) {
	return (
		<ContainerOptions>
			<ContextContainer>
				<CardContent>
					<ControllerSelectOptionsProfile equal={equal} />
				</CardContent>
			</ContextContainer>
		</ContainerOptions>
	);
}
