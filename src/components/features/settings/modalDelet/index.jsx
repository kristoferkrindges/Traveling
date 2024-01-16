import React, { useContext, useEffect, useRef } from "react";
import { OverlayContainer } from "../../../containers/overlay.styled";
import { UserContext } from "../../../../contexts/userContext";
import { DeletContainer } from "./style";

export default function DeletModal({ setModalDelet }) {
	const { deleteAccount } = useContext(UserContext);

	const modalRef = useRef(null);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (modalRef.current && !modalRef.current.contains(event.target)) {
			setModalDelet(false);
		}
	};
	return (
		<OverlayContainer>
			<DeletContainer ref={modalRef}></DeletContainer>
		</OverlayContainer>
	);
}
