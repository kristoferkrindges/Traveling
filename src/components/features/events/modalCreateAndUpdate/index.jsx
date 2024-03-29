import React, { useContext, useEffect, useRef, useState } from "react";
import { OverlayContainer } from "../../../containers/overlay.styled";
import HeadingContainer from "../../../containers/heading";
import { ModalContainer } from "../../../containers/modal.styled";
import { Content, Separator } from "../../post/modalCreatePost/style";
import { InputFile } from "../../user/profileInfo/style";
import { CamIcon } from "../../../icons/fAIcons.styled";
import {
	Inputs,
	Controller,
	Label,
	ContainerInput,
	InputName,
	TextInput,
	InputDate,
} from "../../user/editProfileModal/style";
import {
	ImageEvent,
	PhotoEventContainer,
	ControllerLast,
	PhotoContainer,
	EditPhoto,
	InputDetail,
	ContainerInputDetails,
} from "./style";

import {
	CalendarIcon,
	EventIcon,
	LocateIcon,
	MoreIcon,
	PriceIcon,
	TypeIcon,
} from "../../../icons/iO5Icons.styled";
import { SaveContainer } from "../../post/post/style";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import Loader from "../../../loader";
import { EventContext } from "../../../../contexts/eventContext";
import { UserContext } from "../../../../contexts/userContext";
import { AssistantContext } from "../../../../contexts/assistantContext";

export default function CreateAndUpdateModal({
	click,
	avatarNone,
	type,
	insertEvent,
	object,
}) {
	const { insert, update } = useContext(EventContext);
	const { userInfo } = useContext(UserContext);

	const { convertToDateISOString, formatEventDate } =
		useContext(AssistantContext);

	const modalRef = useRef(null);

	const [progress, setProgress] = useState(false);
	const [name, setName] = useState();
	const [city, setCity] = useState();
	const [address, setAddress] = useState();
	const [photo, setPhoto] = useState();
	const [zipCode, setZipCode] = useState();
	const [eventDate, setEventDate] = useState();
	const [filePhoto, setFilePhoto] = useState();
	const [typeEvent, setTypeEvent] = useState();
	const [detail, setDetail] = useState();
	const [price, setPrice] = useState();

	useEffect(() => {
		if (type) {
			if (object) {
				setName(object.name);
				setCity(object.city);
				setAddress(object.address);
				setPhoto(object.photo);
				setZipCode(object.zipCode);
				setEventDate(convertToDateISOString(object.eventDate));
				setTypeEvent(object.type);
				setPrice(object.price ? object.price : "Free");
				setDetail(object.details);
			}
		}
	}, [object]);

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

	const handlerButtonInsert = async (evt) => {
		const data = await insert(createEvent(evt), filePhoto);
		insertEvent(data);
		setProgress(false);
		click();
	};

	const handlePhoto = (evt) => {
		setProgress(true);
		const file = evt.target.files[0];
		if (!file) {
			return;
		} else {
			setFilePhoto(file);
			const reader = new FileReader();
			reader.onload = (evt) => {
				setPhoto(evt.target.result);
			};

			reader.readAsDataURL(file);
		}
		setProgress(false);
	};

	const handlerButtonUpdate = async (evt) => {
		const newEvent = await update(object.id, createEvent(evt), filePhoto);
		insertEvent(newEvent);
		setProgress(false);
		click();
	};
	const createEvent = (evt) => {
		evt.preventDefault();
		setProgress(true);
		const event = {
			name: name,
			eventDate: eventDate ? formatEventDate(eventDate) : "2024-04-25T13:50",
			city: city,
			address: address,
			zipCode: zipCode,
			photo: photo,
			type: typeEvent,
			details: detail,
			price: price,
			creatorId: userInfo.id,
		};
		return event;
	};
	return (
		<OverlayContainer>
			<ModalContainer top={!progress ? `6%` : `40%`}>
				{progress ? (
					<Loader />
				) : (
					<Content ref={modalRef}>
						<HeadingContainer
							type={"InsertEvent"}
							text={!type ? "Insert Event" : "Update Event"}
						/>
						<Separator />
						<PhotoEventContainer>
							<PhotoContainer>
								<ImageEvent src={photo || !photo === "" ? photo : avatarNone} />
								<InputFile
									type="file"
									id="photoevent"
									acceppt="image/*"
									onChange={handlePhoto}
								/>
								<EditPhoto htmlFor="photoevent">
									<CamIcon />
								</EditPhoto>
							</PhotoContainer>
						</PhotoEventContainer>
						<Inputs>
							<ControllerLast>
								<Label>Name Event</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
										minlength="3"
										maxlength="13"
									/>
									<TextInput>
										<EventIcon />
									</TextInput>
								</ContainerInput>
							</ControllerLast>
						</Inputs>
						<Inputs>
							<Controller>
								<Label>Price</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={price}
										onChange={(e) => {
											setPrice(e.target.value);
										}}
										minlength="3"
										maxlength="21"
									/>
									<TextInput>
										<PriceIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
							<Controller>
								<Label>City</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={city}
										onChange={(e) => {
											setCity(e.target.value);
										}}
										minlength="3"
										maxlength="21"
									/>
									<TextInput>
										<LocateIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
						</Inputs>
						<Inputs>
							<Controller>
								<Label>Address</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={address}
										onChange={(e) => {
											setAddress(e.target.value);
										}}
										minlength="3"
										maxlength="13"
									/>
									<TextInput>
										<LocateIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
							<Controller>
								<Label>Zip Code</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={zipCode}
										onChange={(e) => {
											setZipCode(e.target.value);
										}}
										minlength="3"
										maxlength="13"
									/>
									<TextInput>
										<LocateIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
						</Inputs>
						<Inputs>
							<Controller>
								<Label>Type</Label>
								<ContainerInput>
									<InputName
										type="text"
										value={typeEvent}
										onChange={(e) => {
											setTypeEvent(e.target.value);
										}}
										minlength="3"
										maxlength="13"
									/>
									<TextInput>
										<TypeIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
							<Controller>
								<Label>Date Event</Label>
								<ContainerInput>
									<InputDate
										type="datetime-local"
										value={eventDate}
										onChange={(e) => {
											const formattedDate = e.target.value
												.split("T")
												.join(" ")
												.substring(0, 16);
											setEventDate(formattedDate);
										}}
									/>
									<TextInput>
										<CalendarIcon />
									</TextInput>
								</ContainerInput>
							</Controller>
						</Inputs>
						<Inputs>
							<ControllerLast>
								<Label>Details</Label>
								<ContainerInputDetails>
									<InputDetail
										value={detail}
										onChange={(e) => {
											setDetail(e.target.value);
										}}
									/>
									<TextInput>
										<MoreIcon />
									</TextInput>
								</ContainerInputDetails>
							</ControllerLast>
						</Inputs>
						<Separator />
						<SaveContainer>
							<PrimaryButton
								onClick={!type ? handlerButtonInsert : handlerButtonUpdate}
							>
								{!type ? "Create" : "Save"}
							</PrimaryButton>
						</SaveContainer>
					</Content>
				)}
			</ModalContainer>
		</OverlayContainer>
	);
}
