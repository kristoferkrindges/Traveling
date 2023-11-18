import React from "react";
import { ProfilePhoto } from "../../user/userMessage/style";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { AvatarBox, AvatarDetail, AvatarName } from "./style";
import { AddStoriesIcon } from "../../../icons/iO5Icons.styled";
import AvatarNone from "../../../../assets/images/avatarnone.png";

export default function StorieAvatar({ user, type }) {
	return (
		<AvatarDetail>
			<AvatarBox>
				<AvatarPhoto
					src={user.photo || !user.photo === "" ? user.photo : AvatarNone}
				/>
				{type && <AddStoriesIcon />}
			</AvatarBox>
			<AvatarName>{user.firstname}</AvatarName>
		</AvatarDetail>
	);
}
