import React from "react";
import useAssistant from "../hooks/useAssistant";

const AssistantContext = React.createContext(null);

function AssistantProvider({ children }) {
	const { formatTimeDifference } = useAssistant();
	return (
		<AssistantContext.Provider
			value={{
				formatTimeDifference,
			}}
		>
			{children}
		</AssistantContext.Provider>
	);
}

export { AssistantContext, AssistantProvider };
