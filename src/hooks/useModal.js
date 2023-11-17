import { useState } from "react";

export default function useModal() {
	const [menu, setMenu] = useState(false);
	const [modalCreatePost, setModalCreatePost] = useState(false);
	const [ellips, setEllips] = useState(false);

	const handlerMenu = () => {
		if (menu) {
			setMenu(false);
		} else {
			setMenu(true);
		}
	};

	const handlerModalCreatePost = () => {
		if (modalCreatePost) {
			setModalCreatePost(false);
		} else {
			setModalCreatePost(true);
		}
	};

	const handlerEllips = () => {
		if (ellips === false) {
			setEllips(true);
		} else {
			setEllips(false);
		}
	};

	return {
		menu,
		handlerMenu,
		ellips,
		handlerEllips,
		modalCreatePost,
		handlerModalCreatePost,
	};
}
