import React from "react";
import { ContainerOptions } from "./style";

import ControllerSelectOptionsProfile from "../../controllers/ControllerSelectOptions/ControllerSelectOptionsProfile";

export default function LayoutMenuOptions({
	equal,
	findFollowers,
	findFollowings,
}) {
	return (
		<ContainerOptions>
			<ControllerSelectOptionsProfile
				equal={equal}
				findFollowers={findFollowers}
				findFollowings={findFollowings}
			/>
		</ContainerOptions>
	);
}
