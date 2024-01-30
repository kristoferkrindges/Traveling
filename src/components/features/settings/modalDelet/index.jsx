import React, { useContext, useEffect, useRef, useState } from "react";
import { OverlayContainer } from "../../../containers/overlay.styled";
import { UserContext } from "../../../../contexts/userContext";
import { AlertProceed, Confirm, DeletContainer } from "./style";
import { DangerIcon } from "../../../icons/bsIcons.styled";
import { ButtonsCointainer } from "../../events/event/style";
import { PrimaryButton } from "../../../buttons/primaryButton.styled";
import Loader from "../../../loader";
import { LoaderContainer } from "../../../containers/loader.styled";

export default function DeletModal({ setModalDelet }) {
	const { deleteAccount } = useContext(UserContext);

	const modalRef = useRef(null);

	const [progress, setProgress] = useState(false);

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

	const handlerDelet = async () => {
		setProgress(true);
		await deleteAccount();
		setProgress(false);
	};

	return (
		<OverlayContainer>
			<DeletContainer
				style={
					progress
						? { backgroundColor: `transparent`, boxShadow: "none" }
						: null
				}
				ref={modalRef}
			>
				{!progress ? (
					<>
						<DangerIcon />
						<AlertProceed>
							Your account will be deleted Permanently!
						</AlertProceed>
						<Confirm>Are you sure to proceed?</Confirm>
						<ButtonsCointainer style={{ justifyContent: "space-evenly" }}>
							<PrimaryButton onClick={() => setModalDelet(false)}>
								Cancel Process
							</PrimaryButton>
							<PrimaryButton
								onClick={handlerDelet}
								style={{ backgroundColor: "red" }}
							>
								Delet Account
							</PrimaryButton>
						</ButtonsCointainer>
					</>
				) : (
					<Loader />
				)}
			</DeletContainer>
		</OverlayContainer>
	);
}
