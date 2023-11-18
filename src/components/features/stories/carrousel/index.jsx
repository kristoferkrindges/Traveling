// import React, { useContext } from "react";
// import {
// 	Check,
// 	ArrowLeftContainer,
// 	ArrowRightContainer,
// 	CarrouselBody,
// } from "./style";
// import StorieAvatar from "../stories";
// import { ArrowLeftIcon, ArrowRightIcon } from "../../../icons/iOIcons.styled";
// import { UserContext } from "../../../../contexts/userContext";

// export default function Carrousel({ data }) {
// 	const { userInfo } = useContext(UserContext);

// 	const handleSlide = (direction) => {
// 		const slider = document.getElementsByClassName("carousel-body")[0];
// 		if (direction === "left") slider.scrollBy(-400, 0);
// 		else slider.scrollBy(400, 0);
// 	};

// 	return (
// 		<Check>
// 			<ArrowLeftContainer onClick={() => handleSlide("left")}>
// 				<ArrowLeftIcon />
// 			</ArrowLeftContainer>

// 			<ArrowRightContainer onClick={() => handleSlide("right")}>
// 				<ArrowRightIcon />
// 			</ArrowRightContainer>
// 			<CarrouselBody className="carousel-body">
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />
// 				<StorieAvatar user={userInfo} />

// 				{data.map((item) => {
// 					return <StorieAvatar key={item} data={item} />;
// 				})}
// 			</CarrouselBody>
// 		</Check>
// 	);
// }

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

export default function Carrousel({ data }) {
	const { userInfo } = useContext(UserContext);
	const carrouselBodyRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const handleSlide = (direction) => {
		const slider = carrouselBodyRef.current;

		if (direction === "left") {
			slider.scrollLeft -= slider.clientWidth; // Move para a esquerda pela largura do contêiner
		} else {
			slider.scrollLeft += slider.clientWidth; // Move para a direita pela largura do contêiner
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

	return (
		<Check>
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
				<StorieAvatar user={userInfo} type={true} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				<StorieAvatar user={userInfo} />
				{data.map((item) => (
					<StorieAvatar key={item} data={item} />
				))}
			</CarrouselBody>
		</Check>
	);
}
