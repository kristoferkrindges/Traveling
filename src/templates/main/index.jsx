import React from "react";
import { MainContainer, GridContainer } from "./style";
import LeftTemplate from "./left";
import MidTemplate from "./mid";
import RightTemplate from "./right";

export default function MainTemplate({ type }) {
	return (
		<MainContainer>
			<GridContainer>
				<LeftTemplate />
				<MidTemplate type={type} />
				<RightTemplate type={type} />
			</GridContainer>
		</MainContainer>
	);
}
