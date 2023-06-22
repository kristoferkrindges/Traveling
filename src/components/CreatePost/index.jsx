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
					<img src="https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg" />
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
