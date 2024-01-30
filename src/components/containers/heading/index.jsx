import React, { useState } from "react";
import { Heading } from "./style";
import { H4Title } from "../../titles/h4Title.styled";
import {
	AddStoriesIcon,
	BookPressIcon,
	ChatIcon,
	CloseCircleIcon,
	EllipsIcon,
	EventIcon,
	HeartPressIcon,
	MoreIcon,
	NotificationIcon,
	PostIcon,
	ProfileIcon,
	SettingsIcon,
	UserCircle,
} from "../../icons/iO5Icons.styled";
import EllipsMenu from "../../menus/ellips";

export default function HeadingContainer({ type, text, click }) {
	const [ellips, setEllips] = useState(false);

	const handlerEllips = () => {
		if (ellips) {
			if (click) {
				click();
			}
			setEllips(false);
		} else {
			setEllips(true);
		}
	};

	const optionsMenu = [
		{
			label: "Close",
			handler: handlerEllips,
			route: null,
			icon: <CloseCircleIcon />,
		},
	];

	return (
		<Heading>
			{type === "CreateStorie" && <AddStoriesIcon />}
			{type === "CreatePost" && <PostIcon />}
			{type === "EditInfoUser" && <ProfileIcon />}
			{type === "Likes" && <HeartPressIcon style={{ color: "red" }} />}
			{type === "Favorites" && <BookPressIcon />}
			{type === "View" && <MoreIcon />}
			<H4Title>{text}</H4Title>
			{type !== "Messages" &&
			type !== "Notifications" &&
			type !== "Events" &&
			type !== "Settings" &&
			type !== "Suggestions" ? (
				<>
					<EllipsIcon onClick={handlerEllips} />
					{ellips && <EllipsMenu optionsMenu={optionsMenu} />}
				</>
			) : type === "Messages" ? (
				<ChatIcon />
			) : type === "Notifications" ? (
				<NotificationIcon />
			) : type === "Events" ? (
				<EventIcon />
			) : type === "Suggestions" ? (
				<UserCircle />
			) : (
				<SettingsIcon />
			)}
		</Heading>
	);
}
