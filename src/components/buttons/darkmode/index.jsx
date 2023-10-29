import React, { useState, useContext } from "react";

import {
	MoonIcon,
	NotificationIcon,
	SunIcon,
} from "../../icons/iconsI05.styled";
import { ContainerCircle } from "../../containers/containerCircle.styled";
import { BorderSelect, Legend } from "../../menus/featuresRouted/style";
import { ThemeContext } from "../../../provider/themeProvider";
import { UserContext } from "../../../contexts/userContext";

export default function DarkModeButton() {
	const { theme } = useContext(ThemeContext);
	const { alterDarkMode } = useContext(UserContext);
	const [showDarkModeLegend, setShowDarkModeLegend] = useState(false);
	const handleMouseEnterNotifications = () => {
		setShowDarkModeLegend(true);
	};

	const handleMouseLeaveNotifications = () => {
		setShowDarkModeLegend(false);
	};

	function handlerButton(evt) {
		evt.preventDefault();
		alterDarkMode();
	}

	return (
		<ContainerCircle>
			{theme === "dark" ? (
				<SunIcon
					onMouseEnter={handleMouseEnterNotifications}
					onMouseLeave={handleMouseLeaveNotifications}
					onClick={(evt) => {
						handlerButton(evt);
					}}
				/>
			) : (
				<MoonIcon
					onMouseEnter={handleMouseEnterNotifications}
					onMouseLeave={handleMouseLeaveNotifications}
					onClick={(evt) => {
						handlerButton(evt);
					}}
				/>
			)}
			{showDarkModeLegend && (
				<Legend>{theme === "dark" ? "light" : "dark"}</Legend>
			)}
		</ContainerCircle>
	);
}
