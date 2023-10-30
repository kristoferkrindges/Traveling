import React, { useState, useContext } from "react";
import { Profile, ProfileLink, Li, NavLink, DivLink } from "./style";
import AvatarNone from "../../../assets/images/avatarnone.png";
import { UserContext } from "../../../contexts/userContext";
import {
	LogoutIcon,
	ProfileIcon,
	SettingsIcon,
} from "../../icons/iO5Icons.styled";
import AvatarPhoto from "../../images/avatar";
export default function AvatarButton() {
	const { userInfo } = useContext(UserContext);
	const [hero, setHero] = useState(false);

	function HandlerOpen() {
		if (hero === false) {
			setHero(true);
		} else {
			setHero(false);
		}
	}
	return (
		<Profile>
			<AvatarPhoto
				click={HandlerOpen}
				photo={
					userInfo.photo || !userInfo.photo === "" ? userInfo.photo : AvatarNone
				}
				alt="Avatar"
			/>
			<ProfileLink style={hero ? { display: "block" } : { display: "none" }}>
				<Li>
					<NavLink to={`/profile/${userInfo.at}`}>
						<ProfileIcon /> Profile
					</NavLink>
				</Li>
				<Li>
					<NavLink to="/settings">
						<SettingsIcon /> Settings
					</NavLink>
				</Li>
				<Li>
					<DivLink>
						<LogoutIcon /> Logout
					</DivLink>
				</Li>
			</ProfileLink>
		</Profile>
	);
}
