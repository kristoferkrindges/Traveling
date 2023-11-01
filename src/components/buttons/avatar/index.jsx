import React, { useState, useContext } from "react";
import { Profile, ProfileLink, Li, NavLink, DivLink } from "./style";
import AvatarNone from "../../../assets/images/avatarnone.png";
import { UserContext } from "../../../contexts/userContext";
import {
	CloseCircleIcon,
	LogoutIcon,
	ProfileIcon,
	SettingsIcon,
} from "../../icons/iO5Icons.styled";
import { AvatarPhoto } from "../../images/avatar.styled";
import EllipsMenu from "../../menus/ellips";
export default function AvatarButton() {
	const { userInfo, logout } = useContext(UserContext);
	const [ellips, setEllips] = useState(false);

	const handlerEllips = () => {
		ellips ? setEllips(false) : setEllips(true);
	};

	const optionsMenu = [
		{
			label: "Close",
			handler: handlerEllips,
			icon: <CloseCircleIcon />,
		},
		{
			label: "Profile",
			handler: null,
			icon: <ProfileIcon />,
			route: `/profile/${userInfo.at}`,
		},

		{
			label: "Settings",
			handler: null,
			icon: <SettingsIcon />,
			route: "/settings",
		},

		{
			label: "Logout",
			handler: logout,
			icon: <LogoutIcon />,
			route: null,
		},
	];
	return (
		<Profile>
			<AvatarPhoto
				onClick={handlerEllips}
				src={
					userInfo.photo || !userInfo.photo === "" ? userInfo.photo : AvatarNone
				}
				alt="Avatar"
			/>
			{ellips && <EllipsMenu optionsMenu={optionsMenu} type={"Avatar"} />}
		</Profile>
	);
}
