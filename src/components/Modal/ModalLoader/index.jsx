import React from "react";
import { Overlay, Modal } from "./style";
import Loader from "../../Loader";
export default function ModalPost() {
	return (
		<Overlay>
			<Modal>
				<Loader />
			</Modal>
		</Overlay>
	);
}