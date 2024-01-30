import React, { useContext, useRef, useState, useEffect } from "react";
import {
	Check,
	ArrowLeftContainer,
	ArrowRightContainer,
	CarrouselBody,
} from "./style";
import StorieAvatar from "../stories";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../icons/iOIcons.styled";
import { UserContext } from "../../../../contexts/userContext";
import CreateStorie from "../createStorie";
import InstaStorie from "../instaStories";
import { StorieContext } from "../../../../contexts/storieContext";

export default function Carrousel({ data, setStories, type, profile }) {
	const { userInfo } = useContext(UserContext);
	const { findStoriesByAt } = useContext(StorieContext);

	const carrouselBodyRef = useRef(null);

	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [modalCreateStorie, setModalCreateStorie] = useState(false);
	const [storieUser, setStoriesUser] = useState([]);
	const [instaStorie, setInstaStorie] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleSlide = (direction) => {
		const slider = carrouselBodyRef.current;

		if (direction === "left") {
			slider.scrollLeft -= slider.clientWidth;
		} else {
			slider.scrollLeft += slider.clientWidth;
		}
	};

	useEffect(() => {
		const checkScroll = () => {
			if (carrouselBodyRef.current) {
				const { scrollLeft, offsetWidth, scrollWidth } =
					carrouselBodyRef.current;
				const atStart = scrollLeft === 0;
				const atEnd = scrollLeft + offsetWidth >= scrollWidth - 1;

				setCanScrollLeft(!atStart);
				setCanScrollRight(!atEnd);
			}
		};

		const handleResize = () => {
			checkScroll();
		};

		if (carrouselBodyRef.current) {
			checkScroll();
			carrouselBodyRef.current.addEventListener("scroll", checkScroll);
			window.addEventListener("resize", handleResize);
		}

		return () => {
			if (carrouselBodyRef.current) {
				carrouselBodyRef.current.removeEventListener("scroll", checkScroll);
			}
			window.removeEventListener("resize", handleResize);
		};
	}, [carrouselBodyRef, data]);

	const handlerCreateStorie = () => {
		modalCreateStorie
			? setModalCreateStorie(false)
			: setModalCreateStorie(true);
	};

	const searchStoriesUser = async (at, index) => {
		const stories = await findStoriesByAt(at);
		setStoriesUser(stories);
		setCurrentIndex(index);
		handlerOpenInstaStories();
	};
	const handlerOpenInstaStories = () => {
		instaStorie ? setInstaStorie(false) : setInstaStorie(true);
	};

	const handlerDeletStorieUserCarrousel = (id) => {
		if (profile) {
			const updatedStories = data.filter((storie) => storie.id !== id);
			setStories(updatedStories);
		} else {
			if (!id) {
				const updatedStories = data.filter(
					(storie) => storie.at !== userInfo.at
				);
				setStories(updatedStories);
			}
		}
	};

	return (
		<Check>
			{modalCreateStorie && (
				<CreateStorie handlerCreateStorie={handlerCreateStorie} />
			)}
			<ArrowLeftContainer
				onClick={() => canScrollLeft && handleSlide("left")}
				style={{ display: canScrollLeft ? "flex" : "none" }}
			>
				<ArrowLeftIcon />
			</ArrowLeftContainer>

			<ArrowRightContainer
				onClick={() => canScrollRight && handleSlide("right")}
				style={{ display: canScrollRight ? "flex" : "none" }}
			>
				<ArrowRightIcon />
			</ArrowRightContainer>

			<CarrouselBody className="carousel-body" ref={carrouselBodyRef}>
				{type && (
					<StorieAvatar
						user={userInfo}
						type={type}
						handlerCreateStorie={handlerCreateStorie}
					/>
				)}
				{data &&
					data.map((item, index) => (
						<StorieAvatar
							key={item.id}
							user={item}
							type={false}
							profile={profile}
							searchStoriesUser={searchStoriesUser}
							index={index}
						/>
					))}
			</CarrouselBody>
			{instaStorie &&
				(storieUser && storieUser.length > 0 ? (
					<InstaStorie
						stories={storieUser}
						setStories={setStoriesUser}
						click={handlerOpenInstaStories}
						index={currentIndex}
						handlerDeletStorieUserCarrousel={handlerDeletStorieUserCarrousel}
					/>
				) : null)}
		</Check>
	);
}
