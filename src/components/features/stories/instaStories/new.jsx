import React, { useState, useEffect } from "react";
import {
	ContainerInstaStories,
	NavButtons,
	Slide,
	SlideItems,
	SlideNext,
	SlidePrev,
	SlideThumb,
} from "./style";
import { OverlayContainer } from "../../../containers/overlay.styled";
import { ModalContainer } from "../../../containers/modal.styled";
import ItemStorie from "../itemStorie";

export default function InstaStorieNew({ stories, id, click }) {
	const [active, setActive] = useState(0);
	const [items, setItems] = useState([]);
	const [thumbItems, setThumbItems] = useState([]);
	let timeout;

	const activeSlide = (index) => {
		setActive(index);
		if (items && items.length > 0) {
			items.forEach((item) => item.classList.remove("active"));
			items[index].classList.add("active");
		}

		if (thumbItems && thumbItems.length > 0) {
			thumbItems.forEach((item) => item.classList.remove("active"));
			thumbItems[index].classList.add("active");
		}

		autoSlide();
	};

	const prev = () => {
		if (active > 0) {
			activeSlide(active - 1);
		} else if (items && items.length > 0) {
			activeSlide(items.length - 1);
		}
	};

	const next = () => {
		if (active < items.length - 1) {
			activeSlide(active + 1);
		} else if (items && items.length > 0) {
			activeSlide(0);
		}
	};

	const addNavigation = () => {
		const nextBtn = document.querySelector(`[data-slide="${id}"] .slide-next`);
		const prevBtn = document.querySelector(`[data-slide="${id}"] .slide-prev`);
		if (nextBtn && prevBtn) {
			nextBtn.addEventListener("click", next);
			prevBtn.addEventListener("click", prev);
		}
	};

	const addThumbItems = () => {
		const newThumbItems = Array.from(
			document.querySelector(`[data-slide="${id}"] .slide-thumb`)?.children ||
				[]
		);
		setThumbItems(newThumbItems);
	};

	const autoSlide = () => {
		clearTimeout(timeout);
		timeout = setTimeout(next, 5000);
	};

	useEffect(() => {
		const newItems = Array.from(
			document.querySelector(`[data-slide="${id}"] .slide-items`)?.children ||
				[]
		);
		setItems(newItems);
		addThumbItems();
		activeSlide(0);
		addNavigation();

		return () => {
			clearTimeout(timeout);
		};
	}, [id]);

	return (
		<OverlayContainer>
			<ModalContainer top={`8%`}>
				<Slide data-slide={id} className="slide">
					<SlideItems className="slide-items">
						<img
							src="https://s2-techtudo.glbimg.com/JsE244mucjKWLYtNgeiDyfVYlJQ=/0x129:1024x952/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png"
							alt="Img 1"
						/>
						<img
							src="https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg"
							alt="Img 2"
						/>
						<img
							src="https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg"
							alt="Img 3"
						/>
						<img
							src="https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg"
							alt="Img 4"
						/>
						{/* {stories.map((key, item) => (
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
						))} */}
					</SlideItems>
					<NavButtons className="slide-nav">
						<SlideThumb className="slide-thumb">
							<SlidePrev className="slide-prev">Prev</SlidePrev>
							<SlideNext className="slide-next">Next</SlideNext>
						</SlideThumb>
					</NavButtons>
				</Slide>
			</ModalContainer>
		</OverlayContainer>
	);
}
