import { useState } from "react";

export default function useModal() {
	const [menu, setMenu] = useState(false);

	function handlerMenu() {
		if (menu) {
			setMenu(false);
		} else {
			setMenu(true);
		}
	}

	return {
		menu,
		handlerMenu,
	};
}
