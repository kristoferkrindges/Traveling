import React from "react";
import { H1 } from "./style";

export default function TitleH1({ text, font, marginBottom }) {
	return (
		<H1 fontSize={font} marginBottom={marginBottom}>
			{text}
		</H1>
	);
}
