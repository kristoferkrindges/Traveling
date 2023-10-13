import React from "react";
import { Container } from "./style";

import Stories from "../../../components/Stories";
import CreatePost from "../../../components/Create/CreatePost";
import LayoutNotifications from "../../LayoutNotifications";
import LayoutProfile from "../../LayoutProfile";

import ControllerChat from "../../../controllers/ControllerChat";
import ControllerPost from "../../../controllers/ControllerPost";

export default function Middle({ type }) {
	return (
		<Container>
			{type === "Home" ? (
				<>
					<Stories />
					<CreatePost />
					<ControllerPost type={false} />
				</>
			) : (
				<></>
			)}
			{type === "Profile" ? (
				<>
					<LayoutProfile />
				</>
			) : (
				<></>
			)}
			{type === "Chat" ? (
				<>
					<ControllerChat />
				</>
			) : (
				<></>
			)}
			{type === "Notifications" ? (
				<>
					<LayoutNotifications />
				</>
			) : (
				<></>
			)}
			{type === "OnlyPost" ? (
				<>
					<ControllerPost type={true} />
				</>
			) : (
				<></>
			)}
		</Container>
	);
}
