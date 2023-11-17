import React from "react";
import { MidContainer } from "./style";
import HomeMidTemplate from "./home";
import OnlyPostMidTemplate from "./onlyPost";
import ProfileMidTemplate from "./profile";
import NotificationMidTemplate from "./notification";

export default function MidTemplate({ type }) {
	return (
		<MidContainer>
			{type === "Home" && <HomeMidTemplate />}
			{type === "OnlyPost" && <OnlyPostMidTemplate />}
			{type === "Profile" && <ProfileMidTemplate />}
			{type === "Notification" && <NotificationMidTemplate />}
		</MidContainer>
	);
}
