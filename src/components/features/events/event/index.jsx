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
} from "./style";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { Edit } from "../../../containers/headPostComment/style";
import {
	CloseCircleIcon,
	DeletIcon,
	EditIcon,
	EllipsIcon,
	ReportIcon,
} from "../../../icons/iO5Icons.styled";
import { UserContext } from "../../../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import EllipsMenu from "../../../menus/ellips";

export default function Event({
	name,
	photo,
	creator,
	handlerEdit,
	handlerDelet,
}) {
	const { userInfo } = useContext(UserContext);

	const navigate = useNavigate();

	const [ellips, setEllips] = useState(false);

	const handlerEllips = (evt) => {
		evt.stopPropagation();
		ellips ? setEllips(false) : setEllips(true);
	};

	const handlerButtonEdit = (evt) => {
		handlerEdit();
		handlerEllips(evt);
		return;
	};

	const handlerRoute = (evt) => {
		evt.stopPropagation();
		navigate(`/profile/${creator.at}`);
		return;
	};

	const handlerDeleted = (evt) => {
		evt.stopPropagation();
		handlerDelet(evt);
		handlerEllips(evt);
	};

	const photoSrc = photo ? photo : AvatarNone;
	const [open, setOpen] = useState(false);

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
		<EventContainer
			style={
				open
					? { height: `590px`, transitionDelay: `0.5s` }
					: { height: `100px`, marginBottom: `5rem` }
			}
		>
			<ContextContainer>
				<HeaderEvent>
					<AvatarPhoto src={creator.photo} onClick={handlerRoute} />
					<Edit>
						<EllipsIcon onClick={(evt) => handlerEllips(evt)} />
						{ellips && (
							<EllipsMenu
								optionsMenu={
									userInfo.at === creator.at ? optionsMenu : optionsMenuNotUser
								}
							/>
						)}
					</Edit>
				</HeaderEvent>
				<ImgBox>
					<EventImage src={photoSrc} />
				</ImgBox>
				<Content>
					<Name>{name}</Name>
				</Content>
				<BottomEvent>oi</BottomEvent>
				<Toggle onClick={() => setOpen(open ? false : true)}>
					{/* <ArrowDownIcon style={open && { transform: `rotate(-180deg)` }} /> */}
					More
				</Toggle>
			</ContextContainer>
			<PorcentsContainer />
		</EventContainer>
	);
}
