import React, { useContext, useState } from "react";
import { Heading } from "./style";
import { H4Title } from "../../titles/h4Title.styled";
import { EllipsIcon, PostIcon } from "../../icons/iO5Icons.styled";
import { ModalContext } from "../../../contexts/modalContext";
import EllipsMenu from "../../menus/ellips";

export default function HeadingContainer({ type, text, click }) {
	const [ellips, setEllips] = useState(false);
	const handlerEllips = (evt) => {
		// evt.stopPropagation();
		ellips ? setEllips(false) : setEllips(true);
	};
	const optionsMenu = [
		{
			label: "Close",
			handler: handlerEllips,
			route: null,
		},
	];
	return (
		<Heading>
			{type === "CreatePost" && <PostIcon />}
			<H4Title>{text}</H4Title>
			<EllipsIcon onClick={handlerEllips} />
			{ellips && <EllipsMenu optionsMenu={optionsMenu} />}
		</Heading>
	);
}
