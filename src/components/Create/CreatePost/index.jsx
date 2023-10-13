import React, { useContext, useState } from "react";
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
import ModalPost from "../../Modal/ModalPost";
import { Context } from "../../../context/userContext";
import AvatarNone from "../../../assets/images/avatarnone.png";
export default function CreatePost() {
	const [modal, setModal] = useState(false);
	const { userInfo } = useContext(Context);
	function click() {
		if (modal) {
			setModal(false);
		} else {
			setModal(true);
		}
	}
	return (
		<Container>
			{modal ? <ModalPost click={click} userInfo={userInfo} /> : <></>}
			<Form onClick={click}>
				<ProfilePhoto>
					<img
						src={
							userInfo.photo || !userInfo.photo == ""
								? userInfo.photo
								: AvatarNone
						}
					/>
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
					Photo
				</Button>
				{/* <Button>
					<IoVideocam />
					Live video
				</Button> */}
			</Buttons>
		</Container>
	);
}
