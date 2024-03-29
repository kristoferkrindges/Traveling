import React, { useContext, useState } from "react";
import {
	EventContainer,
	HeaderEvent,
	BottomEvent,
	ContextPhoto,
	CirclePhoto,
	PeopleGoing,
	Title,
	MidEvent,
	MidContext,
	ContentMidContext,
	ButtonsCointainer,
	MidEventContainers,
	EventLayout,
	TypeEvent,
} from "./style";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import NoPicture from "../../../../assets/images/fundoblack.jpg";
import { AvatarPhoto } from "../../../images/avatar.styled";
import {
	CalendarIcon,
	CloseCircleIcon,
	DeletIcon,
	EditIcon,
	EllipsIcon,
	LocateIcon,
	MoreIcon,
	PriceIcon,
	ReportIcon,
} from "../../../icons/iO5Icons.styled";
import { UserContext } from "../../../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import EllipsMenu from "../../../menus/ellips";
import { LikedBy, MiniAvatar, Span } from "../../post/post/style";
import { EventContext } from "../../../../contexts/eventContext";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import { AssistantContext } from "../../../../contexts/assistantContext";
import CardFollowingsAndFollowers from "../../user/cardFollowingsAndFollowers";
import ViewMoreModal from "../viewMoreModal";

export default function Event({ handlerDelet, object, handlerModal }) {
	const { userInfo } = useContext(UserContext);
	const { formatDateString } = useContext(AssistantContext);
	const { toogleAttendEvent, deleteEvent } = useContext(EventContext);

	const navigate = useNavigate();

	const [ellips, setEllips] = useState(false);
	const [attendPress, setAttendPress] = useState(object.pressAttend);
	const [
		stateModalFollowingsAndFollowers,
		setStateModalFollowingsAndFollowers,
	] = useState(undefined);
	const [modalView, setModalView] = useState(false);

	const photoSrc = object.photo ? object.photo : NoPicture;

	const pressAttend = async () => {
		setAttendPress(attendPress ? false : true);
		await toogleAttendEvent(object.id);
	};

	const handlerEllips = (evt) => {
		evt.stopPropagation();
		ellips ? setEllips(false) : setEllips(true);
	};

	const handlerButtonEdit = (evt) => {
		handlerModal(object, true);
		handlerEllips(evt);
		return;
	};

	const handlerRoute = (evt, at) => {
		evt.stopPropagation();
		navigate(`/profile/${at}`);
		return;
	};

	const handlerDeleted = async (evt) => {
		evt.stopPropagation();
		handlerDelet(evt, object.id);
		await deleteEvent(object.id);
		handlerEllips(evt);
	};

	const optionsMenu = [
		{
			label: "Close",
			handler: handlerEllips,
			icon: <CloseCircleIcon />,
			route: null,
		},
		{
			label: "Edit",
			handler: handlerButtonEdit,
			icon: <EditIcon />,
			route: null,
		},
		{
			label: "Delet",
			handler: handlerDeleted,
			icon: <DeletIcon />,
			route: null,
		},
	];

	const optionsMenuNotUser = [
		{
			label: "Close",
			handler: handlerEllips,
			icon: <CloseCircleIcon />,
			route: null,
		},
		{
			label: "Report",
			handler: null,
			icon: <ReportIcon />,
			route: null,
		},
	];
	return (
		<EventContainer>
			<EventLayout>
				{stateModalFollowingsAndFollowers !== undefined && (
					<CardFollowingsAndFollowers
						id={object.id}
						type={stateModalFollowingsAndFollowers}
						setStateModalFollowingsAndFollowers={
							setStateModalFollowingsAndFollowers
						}
					/>
				)}
				{modalView && (
					<ViewMoreModal
						info={object.details}
						setModalView={setModalView}
						date={object.eventDate}
						ownerPhoto={object.userAllResponse.photo}
						ownerName={
							object.userAllResponse.firstname +
							" " +
							object.userAllResponse.lastname
						}
						handlerRoute={(evt) => handlerRoute(evt, object.userAllResponse.at)}
					/>
				)}
				<ContextPhoto
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),
                       rgba(0, 0, 0, 0.4)),url(${photoSrc})`,
					}}
				>
					<HeaderEvent>
						<CirclePhoto>
							<AvatarPhoto
								src={
									object.userAllResponse.photo ||
									!object.userAllResponse.photo === ""
										? object.userAllResponse.photo
										: AvatarNone
								}
								onClick={(evt) => handlerRoute(evt, object.userAllResponse.at)}
							/>
						</CirclePhoto>
						<CirclePhoto
							style={{ width: `45px`, height: `45px` }}
							onClick={(evt) => handlerEllips(evt)}
						>
							<EllipsIcon />
							{ellips && (
								<EllipsMenu
									optionsMenu={
										userInfo.at === object.userAllResponse.at
											? optionsMenu
											: optionsMenuNotUser
									}
								/>
							)}
						</CirclePhoto>
					</HeaderEvent>
					<BottomEvent>
						<LikedBy>
							{object.usersAttends &&
								object.usersAttends.map((value, key) => (
									<Span
										style={{
											width: `2rem`,
											height: `2rem`,
										}}
									>
										<MiniAvatar
											onClick={(evt) => handlerRoute(evt, value.at)}
											src={
												value.photo || !value.photo === ""
													? value.photo
													: AvatarNone
											}
											alt=""
										/>
									</Span>
								))}
							{object.attends > 1 && (
								<PeopleGoing
									onClick={() => setStateModalFollowingsAndFollowers("Attends")}
								>{`+ ${object.attends - 1} Going`}</PeopleGoing>
							)}
						</LikedBy>
					</BottomEvent>
				</ContextPhoto>
				<MidEvent>
					<TypeEvent>
						<PrimaryButton>{object.type}</PrimaryButton>
					</TypeEvent>
					<Title>{object.name}</Title>
					<MidEventContainers>
						<MidContext>
							<LocateIcon />
							<ContentMidContext>{`${object.address}, ${object.city}, ${object.zipCode}`}</ContentMidContext>
						</MidContext>
						<MidContext>
							<CalendarIcon />
							<ContentMidContext>
								{object.eventDate
									? formatDateString(object.eventDate)
									: "We don't have data yet"}
							</ContentMidContext>
						</MidContext>
						<MidContext>
							<PriceIcon />
							<ContentMidContext>
								R$ {object.price ? object.price : "Free"}
							</ContentMidContext>
						</MidContext>
					</MidEventContainers>
				</MidEvent>
				<ButtonsCointainer>
					<PrimaryButton onClick={pressAttend}>
						{attendPress ? "Not attend" : "Attend"}
					</PrimaryButton>
					<PrimaryButton>
						<MoreIcon onClick={() => setModalView(true)} />
					</PrimaryButton>
				</ButtonsCointainer>
			</EventLayout>
		</EventContainer>
	);
}
