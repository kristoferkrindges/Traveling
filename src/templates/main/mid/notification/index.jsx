import React, { useContext, useEffect, useState } from "react";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { NotificationContext } from "../../../../contexts/notificationContext";
import NotificationSearchMenu from "../../../../components/menus/notiticationsSearch";
import {
	NotificationContainer,
	NotificationContextContainer,
	Title,
} from "./style";
import Notifications from "../../../../components/features/notifications";

export default function NotificationMidTemplate() {
	const { allNotifications, unreadNotifications, markNotificationAsRead } =
		useContext(NotificationContext);
	const [notifications, setNotifications] = useState();
	const [notificationsAll, setNotificationsAll] = useState();
	const [notificationsUnread, setNotificationsUnread] = useState();
	const [notificationsFollow, setNotificationsFollow] = useState();
	const [filteredData, setFilteredData] = useState([]);
	const [stateUnread, setStateUnread] = useState(false);
	const [search, setSearch] = useState("Unread");

	useEffect(() => {
		if (!notifications) {
			searchUnreadNotification();
		}
	}, []);

	useEffect(() => {
		setFilteredData(notifications);
	}, [notifications]);
	console.log(notificationsUnread);
	const searchUnreadNotification = async () => {
		setNotifications([]);
		let newNotifications;
		if (!notificationsUnread) {
			newNotifications = await unreadNotifications();
			setNotificationsUnread(newNotifications);
			setNotifications(newNotifications);
		} else {
			setNotifications(notificationsUnread);
		}
		setSearch("Unread");
		// bug?
		if (!stateUnread) {
			await readNotifications(newNotifications);
		}
	};

	const searchAllNotification = async () => {
		setNotifications([]);
		if (!notificationsAll) {
			const newNotifications = await allNotifications();
			setNotificationsAll(newNotifications);
			setNotifications(newNotifications);
		} else {
			setNotifications(notificationsAll);
		}
		setSearch("All");
	};

	const searchFollowNotification = async () => {
		setNotifications([]);
		const newNotifications = await allNotifications();
		const newFilter = newNotifications.filter((value) => {
			return value.type === "FOLLOW";
		});
		if (!notificationsFollow) {
			setNotificationsFollow(newFilter);
			setNotifications(newFilter);
		} else {
			setNotifications(newFilter);
		}
		setSearch("Follow");
	};

	const readNotifications = async (newNotifications) => {
		await markNotificationAsRead(newNotifications);
		setStateUnread(true);
	};
	return (
		<NotificationContainer>
			<NotificationSearchMenu
				search={search}
				data={notifications}
				setFilteredData={setFilteredData}
				searchFollowNotification={searchFollowNotification}
				searchAllNotification={searchAllNotification}
				searchUnreadNotification={searchUnreadNotification}
			/>
			<NotificationContextContainer>
				{filteredData ? (
					<>
						{filteredData.length > 0 ? (
							filteredData.map((value, key) => (
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
					<LoaderContainer>
						<Loader />
					</LoaderContainer>
				)}
			</NotificationContextContainer>
		</NotificationContainer>
	);
}
