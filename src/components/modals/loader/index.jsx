import React from "react";
import Loader from "../../loader";
import { OverlayContainer } from "../../containers/overlay.styled";
import { ModalContainer } from "../../containers/modal.styled";

export default function LoaderModal() {
	return (
		<OverlayContainer>
			<ModalContainer top={`30%`}>
				<Loader />
			</ModalContainer>
		</OverlayContainer>
	);
}
