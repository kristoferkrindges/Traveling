import React, { useContext } from "react";
import Stories from "react-insta-stories";
import { OverlayContainer } from "../../../containers/overlay.styled";
import { ModalContainer } from "../../../containers/modal.styled";
import ItemStorie from "../itemStorie";
import { useState } from "react";
import { useEffect } from "react";
import { StorieContext } from "../../../../contexts/storieContext";

export default function InstaStorie({ stories, setStories, click, index }) {
	const { likeState, setLikeState } = useContext(StorieContext);
	const [stateStories, setStateStories] = useState(stories);
	const [storyKey, setStoryKey] = useState(0);

	useEffect(() => {
		setStateStories(stories);
	}, [stories]);

	useEffect(() => {
		// Quando as histórias são alteradas, atualiza a chave única
		setStoryKey((prevKey) => prevKey + 1);
	}, [stories]);

	const story = stateStories.map((item, key) => ({
		content: ({ action, isPaused, onNext, onPrevious }) => (
			<ItemStorie
				key={item.id}
				id={item.id}
				user={item.userAllResponse}
				type={true}
				photo={item.video}
				click={click}
				time={item.datepublic}
				pressLike={item.id in likeState ? likeState[item.id] : item.pressLike}
				likes={item.likes}
				delet={handlerDelet}
				clickLike={handlerLike}
				action={action}
				isPaused={isPaused}
				onNext={onNext}
				onPrevious={onPrevious}
			/>
		),
	}));

	const handlerLike = (id, newPressLike, newLikes) => {
		setLikeState((prevState) => ({ ...prevState, [id]: newPressLike }));
		setStateStories((prevState) => {
			const updatedStories = [...prevState];
			const index = updatedStories.findIndex((story) => story.id === id);
			if (index !== -1) {
				updatedStories[index] = {
					...updatedStories[index],
					pressLike: newPressLike,
					likes: newLikes,
				};
				return updatedStories;
			}
			return prevState;
		});
	};

	// const handlerDelet = async (storieId) => {
	// 	setStories((prevStories) =>
	// 		prevStories.filter((storie) => storie.id !== storieId)
	// 	);

	// 	if (stories.length === 1) {
	// 		click();
	// 	}
	// 	setStoryKey((prevKey) => prevKey + 1);
	// };

	const handlerDelet = (storieId) => {
		const updatedStories = stateStories.filter(
			(storie) => storie.id !== storieId
		);
		setStories(updatedStories);
		setStateStories(updatedStories);
		if (stateStories.length === 1) {
			click();
		}
	};

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
					key={storyKey}
					stories={story}
					loop={true}
					isPaused={true}
					defaultInterval={4500}
					width={520}
					height={820}
					preventDefault={true}
					storyContainerStyles={storyContainerStyles}
					currentIndex={index}
					// onAllStoriesEnd={click}
				/>
			</ModalContainer>
		</OverlayContainer>
	);
}
