import React, { useState, useContext, useEffect } from "react";
import {
	Container,
	Heading,
	Title,
	IoNotifications,
	ContainerNotifications,
} from "./style";
import SelectOptionsNotification from "../../components/SelectOptions/SelectOptionsNotification";
import Notifications from "../../components/Notifications";
import Loader from "../../components/Loader";
import { NotificationContext } from "../../context/notificationContext";
export default function LayoutNotifications() {
	const { allNotifications, unreadNotifications, markNotificationAsRead } =
		useContext(NotificationContext);
	const [notifications, setNotifications] = useState();
	const [stateUnread, setStateUnread] = useState(false);

	useEffect(() => {
		if (!notifications) {
			searchUnreadNotification();
		}
	}, []);

	async function searchUnreadNotification() {
		setNotifications([]);
		const newNotifications = await unreadNotifications();
		setNotifications(newNotifications);
		if (!stateUnread) {
			await readNotifications(newNotifications);
		}
	}
	async function searchAllNotification() {
		setNotifications([]);
		const newNotifications = await allNotifications();
		setNotifications(newNotifications);
	}
	async function readNotifications() {
		await markNotificationAsRead(notifications);
		setStateUnread(true);
	}

	return (
		<>
			<Container>
				<Heading>
					<Title>Notifications</Title>
					<IoNotifications />
				</Heading>
				<SelectOptionsNotification
					searchAllNotification={searchAllNotification}
					searchUnreadNotification={searchUnreadNotification}
				/>
			</Container>
			<ContainerNotifications>
				{notifications ? (
					<>
						{notifications.length > 0 ? (
							notifications.map((value, key) => (
								<Notifications
									key={key}
									user={value.user}
									creator={value.creator}
									type={value.type}
									date={value.date}
								/>
							))
						) : (
							<Title>You have seen all your notifications</Title>
						)}
					</>
				) : (
					<Loader />
				)}
			</ContainerNotifications>
		</>
	);
}
