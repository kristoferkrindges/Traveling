import React, { useRef, useEffect } from "react";
import { ControllerImage, Photo } from "./style";
import { OverlayContainer } from "../../containers/overlay.styled";
import { ModalContainer } from "../../containers/modal.styled";
import { CloseCircleIcon } from "../../icons/iO5Icons.styled";

export default function ViewImageModal({ image, handlerCloseModalPhoto }) {
	const modalRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			handlerCloseModalPhoto(event);
		}
	};

	return (
		<OverlayContainer>
			<ModalContainer top={`30%`}>
				<ControllerImage ref={modalRef}>
					<CloseCircleIcon onClick={(evt) => handlerCloseModalPhoto(evt)} />
					<Photo src={image} />
				</ControllerImage>
			</ModalContainer>
		</OverlayContainer>
	);
}
