import React, { useState, useContext } from "react";

import { MoonIcon, SunIcon } from "../../icons/iO5Icons.styled";
import { CircleContainer } from "../../containers/circleContainer.styled";
import { Legend } from "../../menus/featuresRouted/style";
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
		<CircleContainer>
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
		</CircleContainer>
	);
}
