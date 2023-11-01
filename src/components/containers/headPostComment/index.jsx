import React, { useContext, useState } from "react";
import { Edit, Head, Ingo, Name, Small, User } from "./style";
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

export default function HeadPostComment({
	type,
	photo,
	name,
	time,
	at,
	handlerDelet,
	handlerEdit,
	handlerRouteProfile,
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
		handlerRouteProfile(evt, at);
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
			handler: handlerDelet,
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
			<User>
				<AvatarPhoto src={photo} alt={name} onClick={handlerRoute} />
				<Ingo>
					<Name onClick={handlerRoute}>{name}</Name>
					<Small>{time}</Small>
				</Ingo>
			</User>
			<Edit>
				<EllipsIcon onClick={(evt) => handlerEllips(evt)} />
				{ellips && (
					<EllipsMenu
						optionsMenu={userInfo.at === at ? optionsMenu : optionsMenuNotUser}
					/>
				)}
			</Edit>
		</Head>
	);
}
