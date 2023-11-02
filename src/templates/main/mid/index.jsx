import React from "react";
import { MidContainer } from "./style";
import HomeMidTemplate from "./home";
import OnlyPostMidTemplate from "./onlyPost";

export default function MidTemplate({ type }) {
	return (
		<MidContainer>
			{type === "Home" && <HomeMidTemplate />}{" "}
			{type === "OnlyPost" && <OnlyPostMidTemplate />}
		</MidContainer>
	);
}
