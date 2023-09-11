import React, { useState, useContext, useEffect } from "react";
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
} from "./style";
import ButtonPrimary from "../../ButtonPrimary";
import AvatarNone from "../../../assets/images/avatarnone.png";
import { Context } from "../../../context/userContext";

export default function ModalEditUser({ id = "overlay", clickClose }) {
	const { userInfo, update } = useContext(Context);
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
						<EditPhotoCover>
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
							<EditPhotoProfile>
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
