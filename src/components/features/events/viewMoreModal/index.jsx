import React, { useContext, useEffect, useRef } from "react";
import { OverlayContainer } from "../../../containers/overlay.styled";
import HeadingContainer from "../../../containers/heading";
import {
	Details,
	DetailsContainer,
	Owner,
	Creator,
	Name,
	ViewMoreContainer,
	HeadingView,
} from "./style";
import { AssistantContext } from "../../../../contexts/assistantContext";
import { AvatarPhoto } from "../../../images/avatar.styled";
import { ModalContainer } from "../../../containers/modal.styled";

export default function ViewMoreModal({
	info,
	setModalView,
	date,
	ownerPhoto,
	ownerName,
	handlerRoute,
}) {
	const modalRef = useRef(null);

	const { formatDateViewEvent } = useContext(AssistantContext);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setModalView(false);
		}
	};

	const handlerClose = () => {
		setModalView(false);
	};

	return (
		<OverlayContainer>
			<ModalContainer top={"9%"}>
				<ViewMoreContainer ref={modalRef}>
					<HeadingView>
						<HeadingContainer
							type={"View"}
							text={"View More"}
							click={handlerClose}
						/>
					</HeadingView>
					<DetailsContainer>
						<Details>{info}</Details>
					</DetailsContainer>
					<Creator>
						<Owner>
							<AvatarPhoto src={ownerPhoto} onClick={handlerRoute} />
							<Name onClick={handlerRoute}>{ownerName}</Name>
						</Owner>
						{formatDateViewEvent(date)}
					</Creator>
				</ViewMoreContainer>
			</ModalContainer>
		</OverlayContainer>
	);
}
