import React, { useContext, useState } from "react";
import { Edit, Head, Ingo, Name, Small, User } from "./style";
import { EllipsIcon } from "../../icons/iO5Icons.styled";
import { AvatarPhoto } from "../../images/avatar.styled";
import EllipsMenu from "../../menus/ellips";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";

export default function HeadPostComment({
	type,
	photo,
	name,
	time,
	at,
	handlerDelet,
	handlerEdit,
}) {
	const { userInfo } = useContext(UserContext);

	const navigate = useNavigate();

	const [ellips, setEllips] = useState(false);

	const handlerEllips = (evt) => {
		evt.stopPropagation();
		ellips ? setEllips(false) : setEllips(true);
	};

	const handlerRouteProfile = (evt) => {
		evt.stopPropagation();
		navigate(`/profile/${at}`);
		return;
	};

	const handlerButtonEdit = (evt) => {
		handlerEdit();
		handlerEllips(evt);
		return;
	};

	const optionsMenu = [
		{
			label: "Close",
			handler: handlerEllips,
		},
		{
			label: "Edit",
			handler: handlerButtonEdit,
		},
		{
			label: "Delet",
			handler: handlerDelet,
		},
	];

	const optionsMenuNotUser = [
		{
			label: "Close",
			handler: handlerEllips,
		},
		{
			label: "Report",
			handler: null,
		},
	];

	return (
		<Head>
			<User>
				<AvatarPhoto src={photo} alt={name} onClick={handlerRouteProfile} />
				<Ingo>
					<Name onClick={handlerRouteProfile}>{name}</Name>
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
