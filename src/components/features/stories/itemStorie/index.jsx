import React, { useContext, useState } from "react";
import {
	ContainerItemStorie,
	MenuContainer,
	LikeContainer,
	PhotoStorie,
	Photo,
} from "./style";
import {
	CloseCircleIcon,
	DeletIcon,
	EllipsIcon,
	HeartIcon,
} from "../../../icons/iO5Icons.styled";
import EllipsMenu from "../../../menus/ellips";
import { UserContext } from "../../../../contexts/userContext";
import { CircleContainer } from "../../../containers/circle.styled";

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
				<CircleContainer backgroundColor={`white`}>
					<EllipsIcon onClick={handlerEllips} />
					{type && ellips && (
						<EllipsMenu
							optionsMenu={
								userInfo.at === user.at ? optionsMenuOwner : optionsMenu
							}
						/>
					)}
				</CircleContainer>
			</MenuContainer>
			<LikeContainer>
				<CircleContainer backgroundColor={`white`}>
					<HeartIcon />
				</CircleContainer>
			</LikeContainer>
		</ContainerItemStorie>
	);
}
