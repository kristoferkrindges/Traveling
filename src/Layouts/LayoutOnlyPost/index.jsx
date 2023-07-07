import React from "react";
import { ContainerOnly } from "./style";
import ControllerPost from "../../Controllers/ControllerPost";
import CreateComment from "../../components/CreateComment";
export default function LayoutOnlyPost() {
	return (
		<ContainerOnly>
			<ControllerPost type={true} />
			<CreateComment />
		</ContainerOnly>
	);
}
