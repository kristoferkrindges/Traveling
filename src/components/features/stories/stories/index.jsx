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
}) {
	// Verifica se data e data.userAllResponse existem antes de acessar propriedades
	const photoSrc = user && user && user.photo ? user.photo : AvatarNone;

	const firstName = user && user ? user.firstname : "";

	const at = user && user ? user.at : "";

	return (
		<AvatarDetail
			onClick={type ? handlerCreateStorie : () => searchStoriesUser(at)}
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
