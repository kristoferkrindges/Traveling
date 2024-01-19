import React, { useContext, useEffect, useState } from "react";
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
import UserMessages from "../../user/userMessage";
import { AssistantContext } from "../../../../contexts/assistantContext";
import { StorieContext } from "../../../../contexts/storieContext";
import { Numbers } from "../../../containers/actionButtons/style";
import AvatarNone from "../../../../assets/images/avatarnone.png";

export default function ItemStorie({
	type,
	key,
	id,
	photo,
	user,
	click,
	time,
	pressLike,
	likes,
	delet,
	clickLike,
	action,
	isPaused,
	onNext,
	onPrevious,
}) {
	const { userInfo } = useContext(UserContext);
	const { deleteStorie, likeStorie, likeState, setLikeState } =
		useContext(StorieContext);
	const { formatTimeDifference } = useContext(AssistantContext);

	const [likesCount, setLikesCount] = useState(likes);
	const [stateLike, setStateLike] = useState(
		id in likeState ? likeState[id] : pressLike
	);
	const [ellips, setEllips] = useState(false);

	const onPressLike = async () => {
		await likeStorie(id);
		setStateLike((prevLike) => !prevLike);
		setLikeState((prevState) => ({ ...prevState, [id]: !stateLike }));
		setLikesCount((prevLikes) => (stateLike ? prevLikes - 1 : prevLikes + 1));
	};

	const handlerDeletStorie = async () => {
		delet(id);
		await deleteStorie(id);
	};

	const handlerEllips = (evt) => {
		evt.stopPropagation();
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

	const optionsMenuOwner = [
		{
			label: "Close",
			handler: handlerEllips,
			route: null,
			icon: <CloseCircleIcon />,
		},

		{
			label: "Delet",
			handler: handlerDeletStorie,
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
					photo={user.photo || !user.photo === "" ? user.photo : AvatarNone}
					name={`${user.firstname} ${user.lastname}`}
					message={time ? formatTimeDifference(time) : "0 seconds ago"}
					online={false}
					at={user.at}
				/>
				<IconsContainer>
					{type ? (
						<>
							{!isPaused ? (
								<PauseIcon
									onClick={() => {
										action("pause");
									}}
								/>
							) : (
								<PlayIcon
									onClick={() => {
										action("play");
									}}
								/>
							)}
						</>
					) : (
						<PauseIcon />
					)}
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
				{type ? (
					<>
						{stateLike ? (
							<HeartPressIcon style={{ color: "red" }} onClick={onPressLike} />
						) : (
							<HeartIcon onClick={onPressLike} />
						)}
					</>
				) : (
					<HeartIcon />
				)}
				{/* <Numbers>{likesCount}</Numbers> */}
			</LikeContainer>
		</ContainerItemStorie>
	);
}
