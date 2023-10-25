import React, { createContext } from "react";
import useNotification from "../hooks/useNotification";

const NotificationContext = createContext();

function NotificationProvider({ children }) {
	const {
		allNotifications,
		unreadNotifications,
		countUnreadNotifications,
		markNotificationAsRead,
		count,
	} = useNotification();
	return (
		<NotificationContext.Provider
			value={{
				allNotifications,
				unreadNotifications,
				countUnreadNotifications,
				markNotificationAsRead,
				count,
			}}
		>
			{children}
		</NotificationContext.Provider>
	);
}

export { NotificationContext, NotificationProvider };
