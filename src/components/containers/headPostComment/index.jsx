import React, { useContext, useState } from "react";
import {
	Edit,
	Head,
	Ingo,
	Name,
	Small,
	User,
	ControllerCardProfile,
} from "./style";
import {
	CloseCircleIcon,
	DeletIcon,
	EditIcon,
	EllipsIcon,
	ReportIcon,
} from "../../icons/iO5Icons.styled";
import { AvatarPhoto } from "../../images/avatar.styled";
import EllipsMenu from "../../menus/ellips";
import { UserContext } from "../../../contexts/userContext";
import CardProfile from "../../features/user/cardProfile";
import AvatarNone from "../../../assets/images/avatarnone.png";

export default function HeadPostComment({
	type,
	user,
	time,
	handlerDelet,
	handlerEdit,
	handlerRouteProfile,
	showCardProfile,
	setShowCardProfile,
}) {
	const { userInfo } = useContext(UserContext);

	const [ellips, setEllips] = useState(false);

	const handlerEllips = (evt) => {
		evt.stopPropagation();
		ellips ? setEllips(false) : setEllips(true);
	};

	const handlerButtonEdit = (evt) => {
		handlerEdit();
		handlerEllips(evt);
		return;
	};

	const handlerRoute = (evt) => {
		handlerRouteProfile(evt, user.at);
	};

	const handlerDeleted = (evt) => {
		evt.stopPropagation();
		handlerDelet(evt);
		handlerEllips(evt);
	};

	const optionsMenu = [
		{
			label: "Close",
			handler: handlerEllips,
			icon: <CloseCircleIcon />,
			route: null,
		},
		{
			label: "Edit",
			handler: handlerButtonEdit,
			icon: <EditIcon />,
			route: null,
		},
		{
			label: "Delet",
			handler: handlerDeleted,
			icon: <DeletIcon />,
			route: null,
		},
	];

	const optionsMenuNotUser = [
		{
			label: "Close",
			handler: handlerEllips,
			icon: <CloseCircleIcon />,
			route: null,
		},
		{
			label: "Report",
			handler: null,
			icon: <ReportIcon />,
			route: null,
		},
	];

	return (
		<Head>
			<ControllerCardProfile
				onMouseEnter={() => setShowCardProfile(true)}
				onMouseLeave={() => setShowCardProfile(false)}
			>
				{showCardProfile && (
					<CardProfile
						user={user}
						handlerRoute={handlerRoute}
						left={"-1rem"}
						top={type ? "-15rem" : "-1rem"}
					/>
				)}
			</ControllerCardProfile>
			<User>
				{!type && (
					<AvatarPhoto
						src={user.photo || !user.photo === "" ? user.photo : AvatarNone}
						onClick={handlerRoute}
						onMouseEnter={() => setShowCardProfile(true)}
					/>
				)}
				<Ingo>
					<Name
						onClick={handlerRoute}
						onMouseEnter={() => setShowCardProfile(true)}
					>
						{user.firstname + " " + user.lastname}
					</Name>
					<Small>{time}</Small>
				</Ingo>
			</User>
			<Edit>
				<EllipsIcon onClick={(evt) => handlerEllips(evt)} />
				{ellips && (
					<EllipsMenu
						optionsMenu={
							userInfo.at === user.at ? optionsMenu : optionsMenuNotUser
						}
					/>
				)}
			</Edit>
		</Head>
	);
}
