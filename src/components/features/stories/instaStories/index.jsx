import React, { useContext } from "react";
import Stories from "react-insta-stories";
import { OverlayContainer } from "../../../containers/overlay.styled";
import { ModalContainer } from "../../../containers/modal.styled";
import ItemStorie from "../itemStorie";
import { useState } from "react";
import { useEffect } from "react";
import { StorieContext } from "../../../../contexts/storieContext";

export default function InstaStorie({
	stories,
	setStories,
	click,
	index,
	handlerDeletStorieUserCarrousel,
}) {
	const { likeState, setLikeState } = useContext(StorieContext);
	const [stateStories, setStateStories] = useState(stories);
	const [storyKey, setStoryKey] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		setStateStories(stories);
	}, [stories]);

	useEffect(() => {
		setStoryKey((prevKey) => prevKey + 1);
	}, [stories]);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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

	const handlerDelet = (storieId) => {
		const updatedStories = stateStories.filter(
			(storie) => storie.id !== storieId
		);
		setStories(updatedStories);
		if (stateStories.length === 1) {
			handlerDeletStorieUserCarrousel();
			click();
		}
		handlerDeletStorieUserCarrousel(storieId);
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
					width={windowWidth > 551 ? 520 : windowWidth < 450 ? 320 : 420}
					height={820}
					preventDefault={true}
					storyContainerStyles={storyContainerStyles}
					currentIndex={index}
					onAllStoriesEnd={click}
				/>
			</ModalContainer>
		</OverlayContainer>
	);
}
