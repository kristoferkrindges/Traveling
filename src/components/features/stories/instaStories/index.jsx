import React, { useContext, useState } from "react";
import { ContainerInstaStories } from "./style";
import Stories from "react-insta-stories";
import { OverlayContainer } from "../../../containers/overlay.styled";
import { ModalContainer } from "../../../containers/modal.styled";
import ItemStorie from "../itemStorie";

export default function InstaStorie({ stories, click }) {
	const story = stories.map((item, key) => ({
		content: (props) => (
			<ItemStorie
				key={key}
				user={item.userAllResponse}
				type={true}
				photo={item.video}
				click={click}
				time={item.datepublic}
				pressLike={item.pressLike}
				likes={item.likes}
			/>
		),
	}));

	const storyContainerStyles = {
		width: "auto",
		maxWidth: "100%",
		maxHeight: "100%",
		margin: "auto",
		borderRadius: "2rem",
	};

	return (
		<OverlayContainer>
			<ModalContainer top={`8%`}>
				<Stories
					stories={story}
					loop={true}
					defaultInterval={3500}
					width={520}
					height={820}
					preventDefault={true}
					storyContainerStyles={storyContainerStyles}
				/>
			</ModalContainer>
		</OverlayContainer>
	);
}
