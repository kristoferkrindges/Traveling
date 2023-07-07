import React from "react";
import { Container } from "./style";

import Stories from "../../../components/Stories";
import CreatePost from "../../../components/CreatePost";
import Feeds from "../../../components/Feeds";
import LayoutNotifications from "../../LayoutNotifications";
import LayoutProfile from "../../LayoutProfile";
import LayoutOnlyPost from "../../LayoutOnlyPost";

import ControllerChat from "../../../Controllers/ControllerChat";
import ControllerPost from "../../../Controllers/ControllerPost";

export default function Middle({ type }) {
	return (
		<Container>
			{type == "Home" ? (
				<>
					<Stories />
					<CreatePost />
					{/* <Feeds /> */}
					<ControllerPost type={false} />
				</>
			) : (
				<></>
			)}
			{type == "Profile" ? (
				<>
					<LayoutProfile />
				</>
			) : (
				<></>
			)}
			{type == "Chat" ? (
				<>
					<ControllerChat />
				</>
			) : (
				<></>
			)}
			{type == "Notifications" ? (
				<>
					<LayoutNotifications />
				</>
			) : (
				<></>
			)}
			{type == "OnlyPost" ? (
				<>
					<LayoutOnlyPost />
				</>
			) : (
				<></>
			)}
		</Container>
	);
}
