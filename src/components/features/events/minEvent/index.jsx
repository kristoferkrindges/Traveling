import React, { useContext, useState } from "react";
import {
	HeaderEvent,
	BottomEvent,
	ContextPhoto,
	CirclePhoto,
	PeopleGoing,
	Title,
	MidEvent,
} from "../event/style";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import NoPicture from "../../../../assets/images/fundoblack.jpg";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { useNavigate } from "react-router-dom";
import { LikedBy, MiniAvatar, Span } from "../../post/post/style";
import { EventContext } from "../../../../contexts/eventContext";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import { MinEventLayout } from "./style";

export default function MinEvent({ object }) {
	const { toogleAttendEvent } = useContext(EventContext);

	const navigate = useNavigate();

	const [attendPress, setAttendPress] = useState(object.pressAttend);

	const photoSrc = object.photo ? object.photo : NoPicture;

	const pressAttend = async () => {
		setAttendPress(attendPress ? false : true);
		await toogleAttendEvent(object.id);
	};

	const handlerRoute = (evt, at) => {
		evt.stopPropagation();
		navigate(`/profile/${at}`);
		return;
	};

	return (
		<MinEventLayout>
			<ContextPhoto
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),
                       rgba(0, 0, 0, 0.4)),url(${photoSrc})`,
					height: "180px",
				}}
			>
				<HeaderEvent>
					<CirclePhoto style={{ width: "40px", height: "40px" }}>
						<AvatarPhoto
							src={
								object.userAllResponse.photo ||
								!object.userAllResponse.photo === ""
									? object.userAllResponse.photo
									: AvatarNone
							}
							onClick={(evt) => handlerRoute(evt, object.userAllResponse.at)}
							style={{ width: "35px", height: "35px" }}
						/>
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
										src={value.photo}
										alt=""
									/>
								</Span>
							))}
						{object.attends > 1 && (
							<PeopleGoing>{`+ ${object.attends - 1} Going`}</PeopleGoing>
						)}
					</LikedBy>
				</BottomEvent>
			</ContextPhoto>
			<MidEvent>
				<Title style={{ fontSize: "1rem" }}>{object.name}</Title>
				<PrimaryButton onClick={pressAttend}>
					{attendPress ? "Not attend" : "Attend"}
				</PrimaryButton>
			</MidEvent>
		</MinEventLayout>
	);
}
