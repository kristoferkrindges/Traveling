import React from "react";
import {
	Banner,
	CardProfileContainer,
	Head,
	EditPhotoCover,
	Bottom,
	Photo,
	UserPhoto,
	Info,
	Name,
	Sign,
	Lists,
	List,
	Numbers,
} from "./style";
import { UserCircle } from "../../../icons/iO5Icons.styled";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import { BorderButton } from "../../../buttons/border/borderButton.styled";
export default function CardProfile({ type, user, handlerRoute }) {
	return (
		<CardProfileContainer onClick={(evt) => handlerRoute(evt)}>
			<Head>
				{user.banner || !user.banner === "" ? (
					<Banner src={user.banner} alt={"banner " + user.firstname} />
				) : null}
				<EditPhotoCover>
					<UserCircle />
				</EditPhotoCover>
			</Head>
			<Bottom>
				<Photo>
					<UserPhoto
						src={user.photo || !user.photo === "" ? user.photo : AvatarNone}
					/>
				</Photo>
				<Info>
					<Name>{user.firstname + " " + user.lastname}</Name>
					<Sign>@{user.at}</Sign>
				</Info>
				<Lists>
					<List>
						Posts<Numbers>{user.posts}</Numbers>
					</List>
					<List>
						Followers<Numbers>{user.followers}</Numbers>
					</List>
					<List>
						Following<Numbers>{user.followings}</Numbers>
					</List>
				</Lists>
				<BorderButton>Profile</BorderButton>
			</Bottom>
		</CardProfileContainer>
	);
}
