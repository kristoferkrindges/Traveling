import React, { useContext } from "react";
import { Form, ProfilePhoto, Input, CreateContainer, Buttons } from "./style";
import { UserContext } from "../../../../contexts/userContext";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import AvatarPhoto from "../../../images/avatar";
import { ImageIcon } from "../../../icons/iO5Icons.styled";
import { CircleContainer } from "../../../containers/circleContainer.styled";
import { ModalContext } from "../../../../contexts/modalContext";
import ModalCreatePost from "../modalCreatePost";
export default function CreatePost() {
	const { userInfo } = useContext(UserContext);
	const { handlerModalCreatePost, modalCreatePost } = useContext(ModalContext);
	return (
		<>
			<CreateContainer onClick={handlerModalCreatePost}>
				<Form>
					<ProfilePhoto>
						<AvatarPhoto
							photo={
								userInfo.photo || !userInfo.photo === ""
									? userInfo.photo
									: AvatarNone
							}
						/>
					</ProfilePhoto>
					<Input
						// disabled
						type="text"
						placeholder="What's on your mind, Kristofer?"
						onClick={handlerModalCreatePost}
					/>
					<CircleContainer>
						<ImageIcon />
					</CircleContainer>
				</Form>
				{/* <Buttons>
					<ImageIcon />
				</Buttons> */}
			</CreateContainer>
			{modalCreatePost && (
				<ModalCreatePost userInfo={userInfo} click={handlerModalCreatePost} />
			)}
		</>
	);
}
