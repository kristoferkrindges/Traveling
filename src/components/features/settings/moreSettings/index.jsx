import React from "react";
import { NotificationMenuContainer } from "../../../menus/notiticationsSearch/style";
import {
	ButtonSliderContainer,
	SettingsContext,
	TextItem,
	Order,
} from "../accountSettings/style";
import SliderButton from "../../../buttons/SliderButton";
import { CircleContainer } from "../../../containers/circle.styled";
import { CreateIcon } from "../../../icons/iO5Icons.styled";

export default function MoreSettings() {
	return (
		<SettingsContext>
			<NotificationMenuContainer style={{ width: "90%" }}>
				<Order>
					<TextItem>Alter password</TextItem>
					<CircleContainer>
						<CreateIcon />
					</CircleContainer>
				</Order>
			</NotificationMenuContainer>
		</SettingsContext>
	);
}
