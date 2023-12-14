import React from "react";
import { MidContainer } from "./style";
import HomeMidTemplate from "./home";
import OnlyPostMidTemplate from "./onlyPost";
import ProfileMidTemplate from "./profile";
import NotificationMidTemplate from "./notification";
import MessagesMidTemplate from "./messages";
import EventMidTemplate from "./events";

export default function MidTemplate({ type }) {
	return (
		<MidContainer>
			{type === "Home" && <HomeMidTemplate />}
			{type === "OnlyPost" && <OnlyPostMidTemplate />}
			{type === "Profile" && <ProfileMidTemplate />}
			{type === "Notification" && <NotificationMidTemplate />}
			{type === "Messages" && <MessagesMidTemplate />}
			{type === "Events" && <EventMidTemplate />}
		</MidContainer>
	);
}
