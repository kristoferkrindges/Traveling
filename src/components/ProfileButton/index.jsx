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
import { Link } from "react-router-dom";

export default function ProfileButton({ label }) {
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
				src={
					"https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
				}
				alt=""
			/>
			<ProfileLink style={hero ? { display: "block" } : { display: "none" }}>
				<Li>
					<NavLink to="/profile">
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
