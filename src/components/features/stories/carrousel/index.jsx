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

export default function Carrousel({ data, type }) {
	const { userInfo } = useContext(UserContext);
	const carrouselBodyRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);
	const [modalCreateStorie, setModalCreateStorie] = useState(false);

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
	return (
		<Check>
			{modalCreateStorie && (
				<CreateStorie handlerCreateStorie={handlerCreateStorie} />
			)}
			<ArrowLeftContainer
				onClick={() => canScrollLeft && handleSlide("left")}
				style={{ display: canScrollLeft ? "block" : "none" }}
			>
				<ArrowLeftIcon />
			</ArrowLeftContainer>

			<ArrowRightContainer
				onClick={() => canScrollRight && handleSlide("right")}
				style={{ display: canScrollRight ? "block" : "none" }}
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
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				{data.map((item) => (
					<StorieAvatar key={item} user={item.userAllResponse} />
				))}
			</CarrouselBody>
		</Check>
	);
}
