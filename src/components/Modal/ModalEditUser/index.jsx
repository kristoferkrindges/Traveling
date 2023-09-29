import React, { useState, useContext } from "react";
import {
	Overlay,
	Modal,
	Content,
	Heading,
	Title,
	IoPerson,
	Ellips,
	DropMenu,
	Item,
	NavLink,
	Separator,
	UserCover,
	EditPhotoCover,
	FaCam,
	UserPhoto,
	Image,
	EditPhotoProfile,
	Inputs,
	Controller,
	ContainerInput,
	InputName,
	TextInput,
	RiAtt,
	Save,
	Label,
	InputDate,
	IoCalendar,
	InputFile,
} from "./style";
import ButtonPrimary from "../../ButtonPrimary";
import AvatarNone from "../../../assets/images/avatarnone.png";
import { Context } from "../../../context/userContext";

export default function ModalEditUser({ id = "overlay", clickClose }) {
	const { userInfo, update, updatePhoto, updateBanner } = useContext(Context);
	const [dropdown, setDropdown] = useState(false);
	const [firstnameChange, setFirstnameChange] = useState(userInfo.firstname);
	const [lastnameChange, setLastnameChange] = useState(userInfo.lastname);
	const [atChange, setAtChange] = useState(userInfo.at);

	function HandlerOpen() {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	}

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

	const handleOutsideClick = (e) => {
		if (e.target.id == id) clickClose();
	};

	async function handlerButtonUpdate(evt) {
		evt.preventDefault();
		const user = {
			firstname: firstnameChange,
			lastname: lastnameChange,
			at: atChange,
		};
		await update(user);
		clickClose();
	}

	return (
		<Overlay id={id} onClick={handleOutsideClick}>
			<Modal>
				<Content>
					<Heading>
						<IoPerson />
						<Title>Edit profile</Title>
						<Ellips onClick={HandlerOpen} />
						{dropdown ? (
							<DropMenu>
								<Item>
									<NavLink onClick={clickClose}>Close</NavLink>
									<NavLink>Other</NavLink>
								</Item>
							</DropMenu>
						) : (
							<></>
						)}
					</Heading>
					<Separator />
					<UserCover>
						<img
							src={
								userInfo.banner || !userInfo.banner == ""
									? userInfo.banner
									: AvatarNone
							}
							alt=""
						/>
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
					</UserCover>
					<UserPhoto>
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
					</UserPhoto>
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
									<IoPerson />
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
									<IoPerson />
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
									<RiAtt />
								</TextInput>
							</ContainerInput>
						</Controller>
						<Controller>
							<Label>Birthdate</Label>
							<ContainerInput>
								<InputDate type="date" />
								<TextInput>
									<IoCalendar />
								</TextInput>
							</ContainerInput>
						</Controller>
					</Inputs>
					<Save>
						<ButtonPrimary label={"Save"} click={handlerButtonUpdate} />
					</Save>
				</Content>
			</Modal>
		</Overlay>
	);
}
