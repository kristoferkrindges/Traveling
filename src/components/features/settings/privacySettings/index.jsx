import React, { useState } from "react";
import { NotificationMenuContainer } from "../../../menus/notiticationsSearch/style";
import {
	ButtonSliderContainer,
	SettingsContext,
	TextItem,
	Order,
} from "../accountSettings/style";
import SliderButton from "../../../buttons/SliderButton";

export default function PrivacySettings() {
	const [protect, setProtect] = useState(false);
	const [request, setRequest] = useState(false);
	const alterProtect = (evt) => {
		evt.preventDefault();
		setProtect(protect ? false : true);
	};
	const alterRequest = (evt) => {
		evt.preventDefault();
		setRequest(request ? false : true);
	};
	return (
		<SettingsContext>
			<NotificationMenuContainer style={{ width: "90%" }}>
				<Order>
					<TextItem>Protect content</TextItem>
					<ButtonSliderContainer>
						All
						<SliderButton active={protect} click={alterProtect} />
						Followers
					</ButtonSliderContainer>
				</Order>
			</NotificationMenuContainer>
			<NotificationMenuContainer style={{ width: "90%" }}>
				<Order>
					<TextItem>Request follow</TextItem>
					<ButtonSliderContainer>
						No
						<SliderButton active={request} click={alterRequest} />
						Yes
					</ButtonSliderContainer>
				</Order>
			</NotificationMenuContainer>
		</SettingsContext>
	);
}
