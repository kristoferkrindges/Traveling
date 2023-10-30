import React, { useContext } from "react";
import { Heading } from "./style";
import { H4Title } from "../../titles/h4Title.styled";
import { EllipsIcon, PostIcon } from "../../icons/iO5Icons.styled";
import { ModalContext } from "../../../contexts/modalContext";
import EllipsMenu from "../../menus/ellips";

export default function HeadingContainer({ type, text, click }) {
	const { ellips, HandlerEllips } = useContext(ModalContext);
	return (
		<Heading>
			{type === "CreatePost" && <PostIcon />}
			<H4Title>{text}</H4Title>
			<EllipsIcon onClick={HandlerEllips} />
			{ellips && <EllipsMenu close={HandlerEllips} />}
		</Heading>
	);
}
