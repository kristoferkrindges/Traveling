import React, { useContext, useState } from "react";
import { NotificationMenuContainer } from "../../../menus/notiticationsSearch/style";
import {
	ButtonSliderContainer,
	SettingsContext,
	TextItem,
	Order,
} from "./style";
import SliderButton from "../../../buttons/SliderButton";
import { ThemeContext } from "../../../../provider/themeProvider";
import { UserContext } from "../../../../contexts/userContext";

export default function AccountSettings() {
	const { theme } = useContext(ThemeContext);
	const { alterDarkMode } = useContext(UserContext);
	const [active, setActive] = useState(theme === "dark" ? true : false);
	const [activeLanguage, setActiveLanguage] = useState(false);
	const alter = (evt) => {
		evt.preventDefault();
		setActive(active ? false : true);
		alterDarkMode();
	};
	const alterLanguage = (evt) => {
		evt.preventDefault();
		setActiveLanguage(activeLanguage ? false : true);
	};
	return (
		<SettingsContext>
			<NotificationMenuContainer style={{ width: "90%" }}>
				<Order>
					<TextItem>Dark Mode</TextItem>
					<ButtonSliderContainer>
						Light
						<SliderButton active={active} click={alter} />
						Dark
					</ButtonSliderContainer>
				</Order>
			</NotificationMenuContainer>
			<NotificationMenuContainer style={{ width: "90%" }}>
				<Order>
					<TextItem>Language</TextItem>
					<ButtonSliderContainer>
						EN
						<SliderButton active={activeLanguage} click={alterLanguage} />
						PT
					</ButtonSliderContainer>
				</Order>
			</NotificationMenuContainer>
		</SettingsContext>
	);
}
