import React, { useContext, useState } from "react";
import {
	ContainerItemStorie,
	MenuContainer,
	LikeContainer,
	PhotoStorie,
	Photo,
	IconsContainer,
} from "./style";
import {
	CloseCircleIcon,
	DeletIcon,
	EllipsIcon,
	HeartIcon,
	HeartPressIcon,
	PauseIcon,
	PlayIcon,
} from "../../../icons/iO5Icons.styled";
import EllipsMenu from "../../../menus/ellips";
import { UserContext } from "../../../../contexts/userContext";
import { CircleContainer } from "../../../containers/circle.styled";
import UserMessages from "../../user/userMessage";
import { AssistantContext } from "../../../../contexts/assistantContext";

export default function ItemStorie({
	type,
	photo,
	user,
	click,
	time,
	pressLike,
	likes,
	setDefault,
}) {
	const { userInfo } = useContext(UserContext);
	const [ellips, setEllips] = useState(false);
	const { formatTimeDifference } = useContext(AssistantContext);

	const handlerEllips = (evt) => {
		evt.stopPropagation();
		if (ellips) {
			if (click) {
				click();
			}
			setEllips(false);
			// setDefault(false);
		} else {
			// setDefault(true);
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

	const optionsMenuOwner = [
		{
			label: "Close",
			handler: handlerEllips,
			route: null,
			icon: <CloseCircleIcon />,
		},

		{
			label: "Delet",
			handler: handlerEllips,
			route: null,
			icon: <DeletIcon />,
		},
	];

	return (
		<ContainerItemStorie>
			<Photo>
				<PhotoStorie src={photo} />
			</Photo>

			<MenuContainer>
				<UserMessages
					photo={user.photo}
					name={`${user.firstname} ${user.lastname}`}
					message={formatTimeDifference(time)}
					online={false}
					at={user.at}
				/>
				<IconsContainer>
					<PauseIcon />
					<EllipsIcon onClick={handlerEllips} />
				</IconsContainer>
				{type && ellips && (
					<EllipsMenu
						optionsMenu={
							userInfo.at === user.at ? optionsMenuOwner : optionsMenu
						}
					/>
				)}
			</MenuContainer>
			<LikeContainer>
				<HeartIcon />
			</LikeContainer>
		</ContainerItemStorie>
	);
}
