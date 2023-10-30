import React from "react";
import Loader from "../../loader";
import { OverlayContainer } from "../../containers/overlayContainer.styled";
import { ModalContainer } from "../../containers/modalContainer.styled";

export default function ModalLoader() {
	return (
		<OverlayContainer>
			<ModalContainer top={`30%`}>
				<Loader />
			</ModalContainer>
		</OverlayContainer>
	);
}
