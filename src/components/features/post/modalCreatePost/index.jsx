import React, { useState, useContext, useEffect, useRef } from "react";
import {
	Content,
	Separator,
	Area,
	Form,
	TextArea,
	Send,
	Icons,
	InputFile,
	SendPhoto,
	PreviewPhoto,
	Photo,
	EditPhoto,
	LabelFile,
} from "./style";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import { PostContext } from "../../../../contexts/postContext";
import { OverlayContainer } from "../../../containers/overlay.styled";
import HeadingContainer from "../../../containers/heading";
import UserMessages from "../../user/userMessage";
import {
	CloudUploadIcon,
	DeletIcon,
	ImageIcon,
} from "../../../icons/iO5Icons.styled";
import { AssistantContext } from "../../../../contexts/assistantContext";
import { ModalContainer } from "../../../containers/modal.styled";
import LoaderModal from "../../../modals/loader";
import { EmojiIcon } from "../../../icons/bsIcons.styled";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";

export default function ModalCreatePost({ click, userInfo }) {
	const { insert } = useContext(PostContext);
	const modalRef = useRef(null);
	const { formatTime } = useContext(AssistantContext);
	const [text, setText] = useState();
	const [progress, setProgress] = useState(true);
	const [photo, setPhoto] = useState();
	const [imagePreview, setImagePreview] = useState(null);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			click();
		}
	};
	const handlerCreate = async (evt) => {
		evt.preventDefault();
		setProgress(false);
		const post = {
			phrase: text,
			img: "",
			datePublic: formatTime(),
			creatorId: "",
		};
		await insert(post, photo);
		setProgress(true);
		click();
	};

	const handlePhoto = (evt) => {
		const file = evt.target.files[0];
		if (!file) {
			return;
		} else {
			setPhoto(file);
			const reader = new FileReader();
			reader.onload = (evt) => {
				setImagePreview(evt.target.result);
			};

			reader.readAsDataURL(file);
		}
	};
	const deletePhoto = (evt) => {
		evt.stopPropagation();
		setImagePreview("");
		setPhoto("");
	};
	return (
		<>
			{progress ? (
				<OverlayContainer>
					<ModalContainer top={`7%`}>
						<Content ref={modalRef}>
							<HeadingContainer text={"Create Post"} type={"CreatePost"} />
							<Separator />
							<UserMessages
								photo={
									userInfo.photo || !userInfo.photo === ""
										? userInfo.photo
										: AvatarNone
								}
								name={userInfo.firstname + " " + userInfo.lastname}
								message={"Publish for everyone"}
								online={false}
								type={false}
								at={userInfo.at}
							/>
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
										<PreviewPhoto
											src={imagePreview}
											alt=""
											style={{
												filter: "brightness(0.25) opacity(0.75)",
											}}
										/>
										<EditPhoto>
											<InputFile
												id="uploadBtn"
												type="file"
												onChange={handlePhoto}
											/>
											<LabelFile for="uploadBtn">
												<CloudUploadIcon />
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
											<ImageIcon />
										</SendPhoto>
									</>
									<EmojiIcon />
								</Icons>
								<PrimaryButton
									onClick={(evt) => {
										handlerCreate(evt);
									}}
								>
									Post
								</PrimaryButton>
							</Send>
						</Content>
					</ModalContainer>
				</OverlayContainer>
			) : (
				<LoaderModal />
			)}
		</>
	);
}
