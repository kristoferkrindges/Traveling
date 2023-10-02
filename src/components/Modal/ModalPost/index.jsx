import React, { useState, useContext } from "react";
import {
	Overlay,
	Modal,
	Content,
	Heading,
	Title,
	IconPost,
	Ellips,
	DropMenu,
	Item,
	NavLink,
	User,
	ProfilePhoto,
	Ingo,
	Name,
	Small,
	Separator,
	Area,
	Form,
	TextArea,
	Send,
	Icons,
	Button,
	IoImages,
	IoEmoji,
	InputFile,
	SendPhoto,
	PreviewPhoto,
	Photo,
	EditPhoto,
	LabelFile,
	IoCloudUpload,
	DeletIcon,
} from "./style";
import AvatarNone from "../../../assets/images/avatarnone.png";
import ModalLoader from "../ModalLoader";
import { PostContext } from "../../../context/postContext";
import { format } from "date-fns-tz";

export default function ModalPost({ id = "modal", click, userInfo }) {
	const { insert } = useContext(PostContext);
	const [text, setText] = useState();
	const [dropdown, setDropdown] = useState(false);
	const [progress, setProgress] = useState(true);
	const [photo, setPhoto] = useState();
	const [imagePreview, setImagePreview] = useState(null);
	const HandlerOpen = () => {
		if (dropdown == false) {
			setDropdown(true);
		} else {
			setDropdown(false);
		}
	};
	const handleOutsideClick = (e) => {
		if (e.target.id == id) click();
	};

	async function handlerCreate(evt) {
		evt.preventDefault();
		setProgress(false);
		const brasiliaTimeZone = "America/Sao_Paulo";
		const brasiliaCurrentDateTime = new Date();
		const formattedDateTime = format(
			brasiliaCurrentDateTime,
			"yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
			{ timeZone: brasiliaTimeZone }
		);
		const post = {
			phrase: text,
			img: "",
			datePublic: formattedDateTime,
			creatorId: "",
		};
		await insert(post, photo);
		setProgress(true);
		click();
	}

	const handlePhoto = (e) => {
		const file = e.target.files[0];
		if (!file) {
			return;
		} else {
			setPhoto(file);
			const reader = new FileReader();
			reader.onload = (e) => {
				setImagePreview(e.target.result);
			};

			reader.readAsDataURL(file);
		}
	};
	const deletePhoto = (evt) => {
		evt.preventDefault();
		setImagePreview("");
		setPhoto("");
	};
	return (
		<>
			{progress ? (
				<Overlay id={id} onClick={handleOutsideClick}>
					<Modal>
						<Content>
							<Heading>
								<IconPost />
								<Title>Create Post</Title>
								<Ellips onClick={HandlerOpen} />
								{dropdown ? (
									<DropMenu>
										<Item>
											<NavLink onClick={click}>Close</NavLink>
											<NavLink>Other</NavLink>
										</Item>
									</DropMenu>
								) : (
									<></>
								)}
							</Heading>
							<Separator />
							<User>
								<ProfilePhoto>
									<img
										src={
											userInfo.photo || !userInfo.photo == ""
												? userInfo.photo
												: AvatarNone
										}
										alt=""
									/>
								</ProfilePhoto>
								<Ingo>
									<Name>{userInfo.firstname + " " + userInfo.lastname}</Name>
									<Small>Publish for everyone</Small>
								</Ingo>
							</User>
							<Area>
								<Form>
									<TextArea
										rows="1"
										placeholder="What's on your mind, Kristofer?"
										onChange={(e) => {
											setText(e.target.value);
										}}
										maxLength={140}
									></TextArea>
								</Form>
								{imagePreview ? (
									<Photo>
										<PreviewPhoto src={imagePreview} alt="" />
										<EditPhoto>
											<InputFile
												id="uploadBtn"
												type="file"
												onChange={handlePhoto}
											/>
											<LabelFile for="uploadBtn">
												<IoCloudUpload />
											</LabelFile>
											<DeletIcon onClick={deletePhoto} />
										</EditPhoto>
									</Photo>
								) : null}
							</Area>
							<Send>
								<Icons>
									<>
										<InputFile
											type="file"
											id="photo"
											acceppt="image/*"
											onChange={handlePhoto}
										/>
										<SendPhoto htmlFor="photo">
											<IoImages />
										</SendPhoto>
									</>
									<IoEmoji />
								</Icons>
								<Button
									onClick={(evt) => {
										handlerCreate(evt);
									}}
								>
									Post
								</Button>
							</Send>
						</Content>
					</Modal>
				</Overlay>
			) : (
				<ModalLoader />
			)}
		</>
	);
}
