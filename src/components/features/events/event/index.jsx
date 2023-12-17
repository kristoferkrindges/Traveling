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
	EventContext,
	TypeEvent,
} from "./style";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { Edit } from "../../../containers/headPostComment/style";
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
import { LikedBy, MiniAvatar, PeopleLike, Span } from "../../post/post/style";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";

export default function Event({
	name,
	photo,
	creator,
	handlerEdit,
	handlerDelet,
	attendsUsers,
	attendsCount,
	city,
	zipCode,
	address,
	eventDate,
	object,
}) {
	const { userInfo } = useContext(UserContext);

	const navigate = useNavigate();

	const [ellips, setEllips] = useState(false);
	const photoSrc = object.photo ? object.photo : AvatarNone;
	const [open, setOpen] = useState(false);

	const handlerEllips = (evt) => {
		evt.stopPropagation();
		ellips ? setEllips(false) : setEllips(true);
	};

	const handlerButtonEdit = (evt) => {
		handlerEdit();
		handlerEllips(evt);
		return;
	};

	const handlerRoute = (evt, at) => {
		evt.stopPropagation();
		navigate(`/profile/${at}`);
		return;
	};

	const handlerDeleted = (evt) => {
		evt.stopPropagation();
		handlerDelet(evt);
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
			<EventContext>
				<ContextPhoto
					style={{
						backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),
                       rgba(0, 0, 0, 0.4)),url(${photoSrc})`,
					}}
				>
					<HeaderEvent>
						<CirclePhoto>
							<AvatarPhoto
								src={object.userAllResponse.photo}
								onClick={(evt) => handlerRoute(evt, object.userAllResponse.at)}
							/>
						</CirclePhoto>
						<CirclePhoto style={{ width: `45px`, height: `45px` }}>
							<EllipsIcon onClick={(evt) => handlerEllips(evt)} />
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
							{object.usersAttends.map((value, key) => (
								<Span
									style={{
										width: `2rem`,
										height: `2rem`,
									}}
								>
									<MiniAvatar
										onClick={(evt) => handlerRoute(evt, value.at)}
										src={value.photo}
										alt=""
									/>
								</Span>
							))}
							{object.attendsCount > 1 && (
								<PeopleGoing>{`+ ${
									object.attendsCount - 1
								} Going`}</PeopleGoing>
							)}
						</LikedBy>
					</BottomEvent>
				</ContextPhoto>
				<MidEvent>
					<TypeEvent>
						<PrimaryButton>Party</PrimaryButton>
					</TypeEvent>
					<Title>Music in the Park: Summer Concert Series</Title>
					<MidEventContainers>
						<MidContext>
							<LocateIcon />
							<ContentMidContext>{`${address}, ${city}, ${zipCode}`}</ContentMidContext>
						</MidContext>
						<MidContext>
							<CalendarIcon />
							<ContentMidContext>
								{eventDate ? eventDate : "We don't have data yet"}
							</ContentMidContext>
						</MidContext>
						<MidContext>
							<PriceIcon />
							<ContentMidContext>{"Free"}</ContentMidContext>
						</MidContext>
					</MidEventContainers>
				</MidEvent>
				<ButtonsCointainer>
					<PrimaryButton>Attend</PrimaryButton>
					<PrimaryButton>
						<MoreIcon />
					</PrimaryButton>
				</ButtonsCointainer>
			</EventContext>
		</EventContainer>
	);
}
