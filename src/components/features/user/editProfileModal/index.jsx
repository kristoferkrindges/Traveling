import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../contexts/userContext";
import { OverlayContainer } from "../../../containers/overlay.styled";
import HeadingContainer from "../../../containers/heading";
import { ModalContainer } from "../../../containers/modal.styled";
import { Content, Separator } from "../../post/modalCreatePost/style";
import {
	Banner,
	EditPhotoCover,
	EditPhotoProfile,
	Head,
	Image,
	InputFile,
	UserPhoto,
} from "../profileInfo/style";
import { CamIcon } from "../../../icons/fAIcons.styled";
import {
	UserPicture,
	Inputs,
	Controller,
	Label,
	ContainerInput,
	InputName,
	TextInput,
	InputDate,
} from "./style";
import { CalendarIcon, UserCircle } from "../../../icons/iO5Icons.styled";
import { AtIcon } from "../../../icons/rIIcons.styled";
import { SaveContainer } from "../../post/post/style";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import Loader from "../../../loader";

export default function EditProfileModal({ click, avatarNone }) {
	const { userInfo, update, updatePhoto, updateBanner } =
		useContext(UserContext);

	const modalRef = useRef(null);

	const [progress, setProgress] = useState(false);
	const [firstnameChange, setFirstnameChange] = useState(userInfo.firstname);
	const [lastnameChange, setLastnameChange] = useState(userInfo.lastname);
	const [atChange, setAtChange] = useState(userInfo.at);
	const [photo, setPhoto] = useState(userInfo.photo);
	const [banner, setBanner] = useState(userInfo.banner);

	useEffect(() => {
		setFirstnameChange(userInfo.firstname);
		setLastnameChange(userInfo.lastname);
		setPhoto(userInfo.photo);
		setAtChange(userInfo.at);
		setBanner(userInfo.banner);
	}, [
		userInfo.photo,
		userInfo.firstname,
		userInfo.lastname,
		userInfo.at,
		userInfo.banner,
	]);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			const isFileInputClick =
				event.target.id === "banneruser" ||
				event.target.id === "photouser" ||
				event.target.parentNode.id === "banneruser" ||
				event.target.parentNode.id === "photouser";

			if (!isFileInputClick) {
				click();
			}
		}
	};

	const handleUploadPhotoModal = async (evt) => {
		setProgress(true);
		const file = evt.target.files[0];
		if (!file) return;
		await updatePhoto(file);
		setProgress(false);
	};

	const handleUploadBanner = async (evt) => {
		setProgress(true);
		const file = evt.target.files[0];
		if (!file) return;
		await updateBanner(file);
		setProgress(false);
	};

	const handlerButtonUpdate = async (evt) => {
		evt.preventDefault();
		setProgress(true);
		const user = {
			firstname: firstnameChange,
			lastname: lastnameChange,
			at: atChange,
		};
		await update(user);
		setProgress(false);
		click();
	};

	return (
		<OverlayContainer>
			<ModalContainer top={!progress ? `7%` : `40%`}>
				{progress ? (
					<Loader />
				) : (
					<Content ref={modalRef}>
						<HeadingContainer type={"EditInfoUser"} text={"Edit profile"} />
						<Separator />
						<Head>
							{banner || banner === "" ? <Banner src={banner} /> : null}
							<InputFile
								type="file"
								id="banneruser"
								acceppt="image/*"
								onChange={handleUploadBanner}
							/>
							<EditPhotoCover
								htmlFor="banneruser"
								style={
									banner || !banner === ""
										? { background: "#2c2c6c", color: "white" }
										: null
								}
							>
								<CamIcon />
								Edit Cover Photo
							</EditPhotoCover>
						</Head>
						<UserPicture>
							<Image>
								<UserPhoto src={photo || !photo === "" ? photo : avatarNone} />
								<InputFile
									type="file"
									id="photouser"
									acceppt="image/*"
									onChange={handleUploadPhotoModal}
								/>
								<EditPhotoProfile htmlFor="photouser">
									<CamIcon />
								</EditPhotoProfile>
							</Image>
						</UserPicture>
						<Inputs>
							<Controller>
								<Label>Firstname</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={firstnameChange}
										onChange={(e) => {
											setFirstnameChange(e.target.value);
										}}
										minlength="3"
										maxlength="21"
									/>
									<TextInput>
										<UserCircle />
									</TextInput>
								</ContainerInput>
							</Controller>
							<Controller>
								<Label>Lastname</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={lastnameChange}
										onChange={(e) => {
											setLastnameChange(e.target.value);
										}}
										minlength="3"
										maxlength="21"
									/>
									<TextInput>
										<UserCircle />
									</TextInput>
								</ContainerInput>
							</Controller>
						</Inputs>
						<Inputs>
							<Controller>
								<Label>At</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={"@" + atChange}
										onChange={(e) => {
											setAtChange(e.target.value);
										}}
										minlength="3"
										maxlength="13"
									/>
									<TextInput>
										<AtIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
							<Controller>
								<Label>Birthdate</Label>
								<ContainerInput>
									<InputDate type="date" />
									<TextInput>
										<CalendarIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
						</Inputs>
						<Separator />
						<SaveContainer>
							<PrimaryButton onClick={handlerButtonUpdate}>Save</PrimaryButton>
						</SaveContainer>
					</Content>
				)}
			</ModalContainer>
		</OverlayContainer>
	);
}
