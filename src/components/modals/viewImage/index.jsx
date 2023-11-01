import React from "react";
import { ControllerImage, Photo } from "./style";
import { OverlayContainer } from "../../containers/overlay.styled";
import { ModalContainer } from "../../containers/modal.styled";
import { CloseCircleIcon } from "../../icons/iO5Icons.styled";

export default function ViewImageModal({ image, handlerCloseModalPhoto }) {
	return (
		<OverlayContainer>
			<ModalContainer top={`30%`}>
				<ControllerImage>
					<CloseCircleIcon onClick={(evt) => handlerCloseModalPhoto(evt)} />
					<Photo src={image} />
				</ControllerImage>
			</ModalContainer>
		</OverlayContainer>
	);
}
