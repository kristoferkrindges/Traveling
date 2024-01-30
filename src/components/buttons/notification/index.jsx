import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { BorderSelect, CountNotification } from "./style";
import { NotificationIcon } from "../../icons/iO5Icons.styled";
import { CircleContainer } from "../../containers/circle.styled";
import { Legend } from "../../menus/featuresRouted/style";
import { NotificationContext } from "../../../contexts/notificationContext";

export default function NotificationButton() {
	const { countUnreadNotifications } = useContext(NotificationContext);
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const [count, setCount] = useState();
	const [showLegendNotifications, setShowLegendNotifications] = useState(false);

	useEffect(() => {
		startCount();
	}, []);

	const handleMouseEnterNotifications = () => {
		setShowLegendNotifications(true);
	};

	const startCount = async () => {
		if (!count) {
			setCount(await countUnreadNotifications());
		}
	};

	const handleMouseLeaveNotifications = () => {
		setShowLegendNotifications(false);
	};

	const clickNotificationIcon = () => {
		setCount(0);
		navigate("/notifications");
	};
	return (
		<CircleContainer onClick={clickNotificationIcon}>
			{count > 0 && <CountNotification>{count}</CountNotification>}
			<NotificationIcon
				onMouseEnter={handleMouseEnterNotifications}
				onMouseLeave={handleMouseLeaveNotifications}
			/>
			<BorderSelect
				style={
					pathname !== `/notifications`
						? { backgroundColor: "transparent" }
						: {}
				}
			/>
			{showLegendNotifications && <Legend>Notifications</Legend>}
		</CircleContainer>
	);
}
