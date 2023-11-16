import React, { useState } from "react";
import { Heading } from "./style";
import { H4Title } from "../../titles/h4Title.styled";
import {
	BookPressIcon,
	ChatIcon,
	CloseCircleIcon,
	EllipsIcon,
	HeartPressIcon,
	NotificationIcon,
	PostIcon,
	ProfileIcon,
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
			{type === "CreatePost" && <PostIcon />}
			{type === "EditInfoUser" && <ProfileIcon />}
			{type === "Likes" && <HeartPressIcon />}
			{type === "Favorites" && <BookPressIcon />}
			<H4Title>{text}</H4Title>
			{type !== "Messages" && type !== "Notifications" ? (
				<>
					<EllipsIcon onClick={handlerEllips} />
					{ellips && <EllipsMenu optionsMenu={optionsMenu} />}
				</>
			) : type === "Messages" ? (
				<ChatIcon />
			) : (
				<NotificationIcon />
			)}
		</Heading>
	);
}
