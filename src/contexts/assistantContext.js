import React from "react";
import useAssistant from "../hooks/useAssistant";

const AssistantContext = React.createContext(null);

function AssistantProvider({ children }) {
	const {
		formatTimeDifference,
		formatTime,
		dateToSeconds,
		handleFilter,
		wordEntered,
		DateTimeConverter,
		convertToDateISOString,
		formatEventDate,
		formatDateString,
		formatDateViewEvent,
	} = useAssistant();
	return (
		<AssistantContext.Provider
			value={{
				formatTimeDifference,
				formatTime,
				dateToSeconds,
				handleFilter,
				wordEntered,
				DateTimeConverter,
				convertToDateISOString,
				formatEventDate,
				formatDateString,
				formatDateViewEvent,
			}}
		>
			{children}
		</AssistantContext.Provider>
	);
}

export { AssistantContext, AssistantProvider };
