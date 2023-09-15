import React, { useState } from "react";
import {
	Profile,
	ProfileLink,
	Li,
	IoMail,
	IoPerson,
	IoNotifications,
	NavLink,
} from "./style";
import AvatarNone from "../../assets/images/avatarnone.png";
export default function ProfileButton({ label, photo, at }) {
	const [hero, setHero] = useState(false);

	function HandlerOpen() {
		if (hero == false) {
			setHero(true);
		} else {
			setHero(false);
		}
	}
	return (
		<Profile>
			<img
				onClick={HandlerOpen}
				src={photo || !photo == "" ? photo : AvatarNone}
				alt=""
			/>
			<ProfileLink style={hero ? { display: "block" } : { display: "none" }}>
				<Li>
					<NavLink to={`/profile/${at}`}>
						<IoMail /> Profile
					</NavLink>
				</Li>
				<Li>
					<NavLink to="/messages">
						<IoPerson /> Messages
					</NavLink>
				</Li>
				<Li>
					<NavLink to="/">
						<IoNotifications /> Notifications
					</NavLink>
				</Li>
			</ProfileLink>
		</Profile>
	);
}
