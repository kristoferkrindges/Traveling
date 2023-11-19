import React, { useContext, useState, useEffect, useRef } from "react";
import {
	CreateStorieContainer,
	IconContainer,
	LabelFile,
	BottomContainer,
	ButtonsContainer,
	Preview,
} from "./style";

import { UserContext } from "../../../../contexts/userContext";
import { OverlayContainer } from "../../../containers/overlay.styled";
import { ModalContainer } from "../../../containers/modal.styled";
import { CamIcon } from "../../../icons/fAIcons.styled";
import HeadingContainer from "../../../containers/heading";
import ItemStorie from "../itemStorie";
import { InputFile } from "../../post/modalCreatePost/style";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import LoaderModal from "../../../modals/loader";
import { AssistantContext } from "../../../../contexts/assistantContext";
import { StorieContext } from "../../../../contexts/storieContext";

export default function CreateStorie({ handlerCreateStorie }) {
	const { userInfo } = useContext(UserContext);
	const { insert } = useContext(StorieContext);
	const { formatTime } = useContext(AssistantContext);
	const modalRef = useRef(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [photo, setPhoto] = useState();
	const [progress, setProgress] = useState(true);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

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

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			handlerCreateStorie();
		}
	};

	const handlerCreate = async (evt) => {
		evt.preventDefault();
		setProgress(false);
		const storie = {
			video: "",
			datePublic: formatTime(),
			creatorId: "",
		};
		await insert(storie, photo);
		// puxar stories principais ou add em react
		setProgress(true);
		handlerCreateStorie();
	};
	return (
		<>
			{progress ? (
				<OverlayContainer>
					<ModalContainer top={"9%"}>
						<CreateStorieContainer ref={modalRef}>
							<HeadingContainer
								text={"Create Storie"}
								type={"CreateStorie"}
								click={handlerCreateStorie}
							/>
							<InputFile id="uploadBtn" type="file" onChange={handlePhoto} />
							<BottomContainer>
								{!imagePreview ? (
									<IconContainer>
										<LabelFile for="uploadBtn">
											<CamIcon />
										</LabelFile>
									</IconContainer>
								) : (
									<>
										<Preview>
											<ItemStorie type={false} photo={imagePreview} />
										</Preview>
										<ButtonsContainer>
											<LabelFile for="uploadBtn">
												<CamIcon />
											</LabelFile>
											<PrimaryButton
												onClick={(evt) => {
													handlerCreate(evt);
												}}
											>
												Create
											</PrimaryButton>
										</ButtonsContainer>
									</>
								)}
							</BottomContainer>
						</CreateStorieContainer>
					</ModalContainer>
				</OverlayContainer>
			) : (
				<LoaderModal />
			)}
		</>
	);
}
