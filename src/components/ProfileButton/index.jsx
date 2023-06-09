import React, { useState } from "react";
import { Profile, ProfileLink, Li, IconSearch } from "./style";
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
					"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
				}
				alt=""
			/>
			<ProfileLink style={hero ? { display: "block" } : { display: "none" }}>
				<Li>
					<Link to="/">
						<IconSearch></IconSearch> Perfil
					</Link>
				</Li>
				<Li>
					<Link to="/">
						<IconSearch></IconSearch> Perfil
					</Link>
				</Li>
			</ProfileLink>
		</Profile>
	);
}
