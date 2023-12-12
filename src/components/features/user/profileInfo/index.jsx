import React, { useState, useEffect, useContext } from "react";
import {
	ProfileInfoContainer,
	Image,
	UserPhoto,
	EditPhotoProfile,
	Banner,
	Bottom,
	EditPhotoCover,
	Head,
	Info,
	Numbers,
	Sign,
	List,
	Lists,
	Name,
} from "./style";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import { CamIcon, EditIcon } from "../../../icons/fAIcons.styled";
import { InputFile } from "../../post/modalCreatePost/style";
import { BorderButton } from "../../../buttons/border/borderButton.styled";
import LoaderModal from "../../../modals/loader";
import { UserContext } from "../../../../contexts/userContext";
import EditProfileModal from "../editProfileModal";
import ViewImageModal from "../../../modals/viewImage";
import CardFollowingsAndFollowers from "../cardFollowingsAndFollowers";
export default function ProfileInfo({
	user,
	equal,
	updatePhoto,
	updateBanner,
}) {
	const { follow } = useContext(UserContext);

	const [modal, setModal] = useState(false);
	const [progress, setProgress] = useState(false);
	const [followers, setFollowers] = useState(0);
	const [stateFollow, setStateFollow] = useState(false);
	const [photo, setPhoto] = useState(user.photo);
	const [name, setName] = useState(user.firstname + " " + user.lastname);
	const [at, setAt] = useState(user.at);
	const [banner, setBanner] = useState(user.banner);
	const [press, setPress] = useState(user.follow);
	const [id, setId] = useState(user.id);
	const [stateModalImage, setStateModalImage] = useState(false);
	const [
		stateModalFollowingsAndFollowers,
		setStateModalFollowingsAndFollowers,
	] = useState(undefined);

	useEffect(() => {
		setStateModalFollowingsAndFollowers(undefined);
		setPhoto(user.photo);
		setFollowers(user.followers || 0);
		setStateFollow(user.follow);
		setName(user.firstname + " " + user.lastname);
		setAt(user.at);
		setBanner(user.banner);
		setPress(user.follow);
		setId(user.id);
	}, [
		user.photo,
		user.followers,
		user.follow,
		user.firstname,
		user.lastname,
		user.at,
		user.banner,
		user.id,
	]);

	const handleUploadPhoto = async (e) => {
		setProgress(true);
		const file = e.target.files[0];
		if (!file) return;
		await updatePhoto(file);
		setProgress(false);
	};

	const handleUploadBanner = async (e) => {
		setProgress(true);
		const file = e.target.files[0];
		if (!file) return;
		await updateBanner(file);
		setProgress(false);
	};

	const handlerModalEdit = () => {
		modal ? setModal(false) : setModal(true);
	};
	const handlerFollow = async (evt) => {
		evt.preventDefault();
		setFollowers((previousValue) => {
			console.log(user.follow);
			if (stateFollow) {
				return previousValue - 1 <= 0 ? 0 : previousValue - 1;
			} else {
				return previousValue + 1;
			}
		});
		setStateFollow(stateFollow ? true : false);
		setPress(press ? false : true);
		await follow(user.id);
	};
	const handlerCloseModalPhoto = (evt) => {
		evt.stopPropagation();
		stateModalImage ? setStateModalImage(false) : setStateModalImage(true);
	};

	return (
		<>
			{progress && <LoaderModal />}
			<ProfileInfoContainer>
				<Head>
					{banner || !banner === "" ? <Banner src={banner} /> : null}
					{equal === "Owner" ? (
						<>
							<InputFile
								type="file"
								id="banner"
								acceppt="image/*"
								onChange={handleUploadBanner}
							/>
							<EditPhotoCover htmlFor="banner">
								<CamIcon />
								Edit Cover Photo
							</EditPhotoCover>
						</>
					) : null}
				</Head>
				<Bottom>
					{stateModalImage && (
						<ViewImageModal
							image={photo}
							handlerCloseModalPhoto={handlerCloseModalPhoto}
						/>
					)}
					<Image>
						<UserPhoto
							src={photo || !photo === "" ? photo : AvatarNone}
							onClick={handlerCloseModalPhoto}
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
									<CamIcon />
								</EditPhotoProfile>
							</>
						) : null}
					</Image>
					<Info>
						<Name>{name}</Name>
						<Sign>@{at}</Sign>
					</Info>
					<Lists>
						<List>
							Posts<Numbers>{user.posts}</Numbers>
						</List>
						<List
							onClick={() => setStateModalFollowingsAndFollowers("Followers")}
						>
							Followers<Numbers>{followers}</Numbers>
						</List>
						<List
							onClick={() => setStateModalFollowingsAndFollowers("Followings")}
						>
							Following<Numbers>{user.followings}</Numbers>
						</List>
					</Lists>
					{stateModalFollowingsAndFollowers !== undefined && (
						<CardFollowingsAndFollowers
							id={id}
							type={stateModalFollowingsAndFollowers}
							setStateModalFollowingsAndFollowers={
								setStateModalFollowingsAndFollowers
							}
						/>
					)}
					{equal === "Owner" ? (
						<BorderButton onClick={handlerModalEdit}>
							<EditIcon />
						</BorderButton>
					) : (
						<BorderButton onClick={handlerFollow}>
							{press ? "Unfollow" : "Follow"}
						</BorderButton>
					)}
					{modal ? (
						<EditProfileModal
							click={handlerModalEdit}
							avatarNone={AvatarNone}
						/>
					) : (
						<></>
					)}
				</Bottom>
			</ProfileInfoContainer>
		</>
	);
}
