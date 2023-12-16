import React, { useContext, useState } from "react";
import {
	EventContainer,
	ContextContainer,
	ImgBox,
	Content,
	Name,
	Toggle,
	PorcentsContainer,
	EventImage,
	HeaderEvent,
	BottomEvent,
	ContextPhoto,
	CirclePhoto,
	PeopleGoing,
	Title,
	MidEvent,
	MidContext,
	ContentMidContext,
	MidTitle,
	ButtonsCointainer,
	MidEventContainers,
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
}) {
	const { userInfo } = useContext(UserContext);

	const navigate = useNavigate();

	const [ellips, setEllips] = useState(false);
	const photoSrc = photo ? photo : AvatarNone;
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
			<ContextPhoto
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),
                       rgba(0, 0, 0, 0.4)),url(${photo})`,
				}}
			>
				<HeaderEvent>
					<CirclePhoto>
						<AvatarPhoto
							src={creator.photo}
							onClick={(evt) => handlerRoute(evt, creator.at)}
						/>
					</CirclePhoto>
					<CirclePhoto style={{ width: `45px`, height: `45px` }}>
						<EllipsIcon onClick={(evt) => handlerEllips(evt)} />
						{ellips && (
							<EllipsMenu
								optionsMenu={
									userInfo.at === creator.at ? optionsMenu : optionsMenuNotUser
								}
							/>
						)}
					</CirclePhoto>
				</HeaderEvent>
				<BottomEvent>
					<LikedBy>
						{attendsUsers.map((value, key) => (
							<Span>
								<MiniAvatar
									onClick={(evt) => handlerRoute(evt, value.at)}
									src={value.photo}
									alt=""
								/>
							</Span>
						))}
						<Span>
							<MiniAvatar
								src={
									"https://images.squarespace-cdn.com/content/v1/5c9a71fd8665cf00012d9f8c/1573059208351-O2F605IU9Z4DBECZ1NE7/ONeg2019.GH_009_629.jpg?format=750w"
								}
								alt=""
							/>
						</Span>
						<Span>
							<MiniAvatar
								src={
									"https://images.squarespace-cdn.com/content/v1/5c9a71fd8665cf00012d9f8c/1573059208351-O2F605IU9Z4DBECZ1NE7/ONeg2019.GH_009_629.jpg?format=750w"
								}
								alt=""
							/>
						</Span>
						<Span>
							<MiniAvatar
								src={
									"https://images.squarespace-cdn.com/content/v1/5c9a71fd8665cf00012d9f8c/1573059208351-O2F605IU9Z4DBECZ1NE7/ONeg2019.GH_009_629.jpg?format=750w"
								}
								alt=""
							/>
						</Span>
						{attendsCount > 1 && (
							<PeopleGoing>{`+ ${attendsCount - 1} Going`}</PeopleGoing>
						)}
					</LikedBy>
				</BottomEvent>
			</ContextPhoto>
			<MidTitle>
				<Title>{name}</Title>
			</MidTitle>
			<MidEvent>
				<MidEventContainers>
					<MidContext>
						<LocateIcon />
						<ContentMidContext>{`${city}, ${zipCode}`}</ContentMidContext>
					</MidContext>
					<MidContext>
						<LocateIcon />
						<ContentMidContext>{address}</ContentMidContext>
					</MidContext>
					<MidContext>
						<CalendarIcon />
						<ContentMidContext>
							{eventDate ? eventDate : "We don't have data yet"}
						</ContentMidContext>
					</MidContext>
				</MidEventContainers>
			</MidEvent>
			<ButtonsCointainer>
				<PrimaryButton>Attend</PrimaryButton>
				<PrimaryButton>
					<MoreIcon />
				</PrimaryButton>
			</ButtonsCointainer>
		</EventContainer>
	);
}
