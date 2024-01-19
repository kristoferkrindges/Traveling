import React, { createContext } from "react";
import useEvent from "../hooks/useEvent";

const EventContext = createContext();

function EventProvider({ children }) {
	const {
		findAll,
		findMyEvents,
		findMyEventsAttend,
		findEventsNowMonth,
		insert,
		update,
		deleteEvent,
		toogleAttendEvent,
		findUsersEvent,
		findRandomEvent,
		randomEvent,
		startRandomEvent,
	} = useEvent();

	return (
		<EventContext.Provider
			value={{
				findAll,
				findMyEvents,
				findMyEventsAttend,
				findEventsNowMonth,
				insert,
				update,
				deleteEvent,
				toogleAttendEvent,
				findUsersEvent,
				findRandomEvent,
				randomEvent,
				startRandomEvent,
			}}
		>
			{children}
		</EventContext.Provider>
	);
}

export { EventContext, EventProvider };
