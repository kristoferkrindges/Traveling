import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CountNotification } from "./style";
import { NotificationIcon } from "../../icons/iO5Icons.styled";
import { CircleContainer } from "../../containers/circleContainer.styled";
import { BorderSelect, Legend } from "../../menus/featuresRouted/style";
import { NotificationContext } from "../../../contexts/notificationContext";

export default function NotificationButton() {
	const { count, setCount } = useContext(NotificationContext);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const [showLegendNotifications, setShowLegendNotifications] = useState(false);
	const handleMouseEnterNotifications = () => {
		setShowLegendNotifications(true);
	};

	const handleMouseLeaveNotifications = () => {
		setShowLegendNotifications(false);
	};

	const clickNotificationIcon = () => {
		navigate("/notifications");
		setCount(0);
	};

	return (
		<CircleContainer>
			{count > 0 ? <CountNotification>{count}</CountNotification> : null}
			<NotificationIcon
				style={
					pathname === `/notifications` ? { color: "hsl(252, 73%, 29%)" } : {}
				}
				onMouseEnter={handleMouseEnterNotifications}
				onMouseLeave={handleMouseLeaveNotifications}
				onClick={clickNotificationIcon}
			/>
			<BorderSelect
				style={
					pathname === `/notifications`
						? { backgroundColor: "hsl(252, 73%, 29%)" }
						: {}
				}
			/>
			{showLegendNotifications && <Legend>Notifications</Legend>}
		</CircleContainer>
	);
}
