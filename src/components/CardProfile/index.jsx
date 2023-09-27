import React, { useState, useEffect } from "react";
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
	UserPhoto,
	Banner,
	Space,
	Numbers,
} from "./style";
import ModalEditUser from "../Modal/ModalEditUser";
import AvatarNone from "../../assets/images/avatarnone.png";
import ControllerButtonFollow from "../../controllers/ControllerButtonFollow";
import Loader from "../Loader";
export default function CardProfile({
	user,
	equal,
	updatePhoto,
	updateBanner,
}) {
	const [modal, setModal] = useState(false);
	const [followers, setFollowers] = useState(0);
	const [stateFollow, setStateFollow] = useState(false);
	console.log(followers);
	console.log(user.followers);
	useEffect(() => {
		if (user) {
			setFollowers(user.followers || 0);
			setStateFollow(user.follow);
		}
	}, [user]);
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
	function follow() {
		setFollowers((previousValue) => {
			console.log(user.follow);
			if (stateFollow) {
				return previousValue - 1 <= 0 ? 0 : previousValue - 1;
			} else {
				return previousValue + 1;
			}
		});
		if (stateFollow) {
			setStateFollow(false);
		} else {
			setStateFollow(true);
		}
	}
	return user ? (
		<Container>
			<Head>
				{user.banner || !user.banner === "" ? (
					<Banner src={user.banner} alt={"banner " + user.firstname} />
				) : null}
				{equal === "Owner" ? (
					<>
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
					</>
				) : null}
			</Head>
			<Bottom>
				<Image>
					<UserPhoto
						src={user.photo || !user.photo === "" ? user.photo : AvatarNone}
					/>
					{equal === "Owner" ? (
						<>
							<InputFile
								type="file"
								id="photo"
								acceppt="image/*"
								onChange={handleUploadPhoto}
							/>
							<EditPhotoProfile htmlFor="photo">
								<FaCam />
							</EditPhotoProfile>
						</>
					) : null}
				</Image>
				<Info>
					<Name>{user.firstname + " " + user.lastname}</Name>
					<Sign>@{user.at}</Sign>
				</Info>
				<Lists>
					<List>
						Posts<Numbers>{user.posts}</Numbers>
					</List>
					<List>
						Followers<Numbers>{followers}</Numbers>
					</List>
					<List>
						Following<Numbers>{user.followings}</Numbers>
					</List>
				</Lists>
				{equal === "Owner" ? (
					<Button onClick={clickOpen}>
						<FaEdit />
					</Button>
				) : (
					<ControllerButtonFollow
						state={user.follow}
						id={user.id}
						func={() => follow()}
						card={true}
					/>
				)}
				{modal ? <ModalEditUser clickClose={clickClose} /> : <></>}
			</Bottom>
		</Container>
	) : (
		<Loader />
	);
}
