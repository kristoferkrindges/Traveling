import React, { useContext, useState } from "react";
import { Heading } from "./style";
import { H4Title } from "../../titles/h4Title.styled";
import {
	CloseCircleIcon,
	EllipsIcon,
	PostIcon,
	ProfileIcon,
} from "../../icons/iO5Icons.styled";
import { ModalContext } from "../../../contexts/modalContext";
import EllipsMenu from "../../menus/ellips";

export default function HeadingContainer({ type, text, click }) {
	const [ellips, setEllips] = useState(false);

	const handlerEllips = () => {
		if (ellips) {
			if (click) {
				click();
			}
			setEllips(false);
		} else {
			setEllips(true);
		}
	};

	const optionsMenu = [
		{
			label: "Close",
			handler: handlerEllips,
			route: null,
			icon: <CloseCircleIcon />,
		},
	];

	return (
		<Heading>
			{type === "CreatePost" && <PostIcon />}
			{type === "EditInfoUser" && <ProfileIcon />}
			<H4Title>{text}</H4Title>
			<EllipsIcon onClick={handlerEllips} />
			{ellips && <EllipsMenu optionsMenu={optionsMenu} />}
		</Heading>
	);
}
