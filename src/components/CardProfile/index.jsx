import React, { useState, useContext, useEffect } from "react";
import { ref, uploadBytesResumable } from "firebase/storage";
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
	InputFile,
} from "./style";
import ModalEditUser from "../Modal/ModalEditUser";
import { Context } from "../../context/userContext";
import AvatarNone from "../../assets/images/avatarnone.png";
import { storage } from "../../services/firebase";
export default function CardProfile() {
	const { userInfo, updatePhoto, updateBanner } = useContext(Context);
	const [modal, setModal] = useState(false);

	const handleUploadPhoto = (e) => {
		const file = e.target.files[0];
		if (!file) return;
		updatePhoto(file);
	};

	const handleUploadBanner = (e) => {
		const file = e.target.files[0];
		if (!file) return;
		updateBanner(file);
	};

	function clickClose() {
		setModal(false);
	}
	function clickOpen() {
		setModal(true);
	}
	return (
		<Container>
			<Head>
				{userInfo.banner || !userInfo.banner == "" ? (
					<img src={userInfo.banner} alt={"banner " + userInfo.firstname} />
				) : null}
				<InputFile
					type="file"
					id="banner"
					acceppt="image/*"
					onChange={handleUploadBanner}
				/>
				<EditPhotoCover htmlFor="banner">
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
					<InputFile
						type="file"
						id="photo"
						acceppt="image/*"
						onChange={handleUploadPhoto}
					/>
					<EditPhotoProfile htmlFor="photo">
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
