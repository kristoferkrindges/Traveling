import React from "react";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { AvatarBox, AvatarDetail, AvatarName, Add } from "./style";
import { AddStoriesIcon } from "../../../icons/iO5Icons.styled";
import AvatarNone from "../../../../assets/images/avatarnone.png";

export default function StorieAvatar({
	user,
	type,
	handlerCreateStorie,
	searchStoriesUser,
	profile,
	index,
}) {
	const photoSrc =
		user && user && user.photo
			? user.photo
			: user.video
			? user.video
			: AvatarNone;

	const firstName = user && user ? user.firstname : "";

	const at =
		user && user
			? user.at
				? user.at
				: user.userAllResponse
				? user.userAllResponse.at
				: ""
			: "";

	return (
		<AvatarDetail
			onClick={
				type
					? handlerCreateStorie
					: profile
					? () => searchStoriesUser(at, index)
					: () => searchStoriesUser(at)
			}
		>
			<AvatarBox>
				<AvatarPhoto src={photoSrc} />
				{type && (
					<Add>
						<AddStoriesIcon />
					</Add>
				)}
			</AvatarBox>
			<AvatarName>{firstName}</AvatarName>
		</AvatarDetail>
	);
}
