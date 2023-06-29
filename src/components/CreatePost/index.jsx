import React, { useState } from "react";
import {
	Form,
	ProfilePhoto,
	Input,
	Container,
	Buttons,
	Button,
	IoImages,
	IoVideocam,
} from "./style";
import ButtonPrimary from "../ButtonPrimary";
import ModalPost from "../ModalPost";
import Kris from "../../assets/images/foto3.png";

export default function CreatePost() {
	const [modal, setModal] = useState(false);
	function click() {
		console.log("clicou!");
		if (modal) {
			setModal(false);
		} else {
			setModal(true);
		}
	}
	return (
		<Container>
			{modal ? <ModalPost click={click} /> : <></>}
			<Form onClick={click}>
				<ProfilePhoto>
					<img src={Kris} />
				</ProfilePhoto>
				<Input
					onClick={click}
					disabled
					type="text"
					placeholder="What's on your mind, Kristofer?"
				/>
				{/* <ButtonPrimary label="Create"></ButtonPrimary> */}
			</Form>
			<Buttons>
				<Button>
					<IoImages />
					Foto/Vídeo
				</Button>
				<Button>
					<IoVideocam />
					Vídeo ao vivo
				</Button>
			</Buttons>
		</Container>
	);
}
