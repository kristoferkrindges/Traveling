import React, { useContext } from "react";
import { Form, ProfilePhoto, Input, CreateContainer } from "./style";
import { UserContext } from "../../../../contexts/userContext";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import { ImageIcon } from "../../../icons/iO5Icons.styled";
import { CircleContainer } from "../../../containers/circle.styled";
import { ModalContext } from "../../../../contexts/modalContext";
import ModalCreatePost from "../modalCreatePost";
import { AvatarPhoto } from "../../../images/avatar.styled";
export default function CreatePost() {
	const { userInfo } = useContext(UserContext);
	const { handlerModalCreatePost, modalCreatePost } = useContext(ModalContext);
	return (
		<>
			<CreateContainer onClick={handlerModalCreatePost}>
				<Form>
					<ProfilePhoto>
						<AvatarPhoto
							src={
								userInfo.photo || !userInfo.photo === ""
									? userInfo.photo
									: AvatarNone
							}
							alt={userInfo && userInfo.firstname}
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
