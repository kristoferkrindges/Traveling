import React, { useState, useContext } from "react";
import {
	Container,
	Head,
	Bottom,
	Image,
	Info,
	Name,
	Sign,
	Lists,
	List,
	Button,
	FaEdit,
	EditPhotoProfile,
	FaCam,
	EditPhotoCover,
} from "./style";
import ModalEditUser from "../Modal/ModalEditUser";
import { Context } from "../../context/userContext";
import AvatarNone from "../../assets/images/avatarnone.png";
export default function CardProfile() {
	const [modal, setModal] = useState(false);
	const { userInfo } = useContext(Context);
	function clickClose() {
		setModal(false);
	}
	function clickOpen() {
		setModal(true);
	}
	return (
		<Container>
			<Head>
				<img
					src={
						userInfo.banner || !userInfo.banner == ""
							? userInfo.banner
							: AvatarNone
					}
					alt=""
				/>
				<EditPhotoCover>
					<FaCam />
					Edit Cover Photo
				</EditPhotoCover>
			</Head>
			<Bottom>
				<Image>
					<img
						src={
							userInfo.photo || !userInfo.photo == ""
								? userInfo.photo
								: AvatarNone
						}
					/>
					<EditPhotoProfile>
						<FaCam />
					</EditPhotoProfile>
				</Image>
				<Info>
					<Name>{userInfo.firstname + " " + userInfo.lastname}</Name>
					<Sign>@{userInfo.at}</Sign>
				</Info>
				<Lists>
					<List>
						Posts<span>{userInfo.posts}</span>
					</List>
					<List>
						Followers<span>{userInfo.followers}</span>
					</List>
					<List>
						Following<span>{userInfo.followings}</span>
					</List>
				</Lists>
				<Button onClick={clickOpen}>
					<FaEdit />
				</Button>
				{modal ? <ModalEditUser clickClose={clickClose} /> : <></>}
			</Bottom>
		</Container>
	);
}
