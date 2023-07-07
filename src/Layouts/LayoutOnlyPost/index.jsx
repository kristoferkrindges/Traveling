import React, { useContext } from "react";
import { ContainerOnly } from "./style";
import ControllerPost from "../../Controllers/ControllerPost";
import CreateComment from "../../components/Create/CreateComment";
import { PostContext } from "../../context/postContext";
import ControllerComment from "../../Controllers/ControllerComment";
export default function LayoutOnlyPost() {
	const { edit, HandlerEdit } = useContext(PostContext);
	return (
		<ContainerOnly>
			<ControllerPost type={true} />
			{!edit ? <CreateComment /> : <></>}
			{!edit ? <ControllerComment /> : <></>}
		</ContainerOnly>
	);
}
