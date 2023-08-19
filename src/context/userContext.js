import { createContext } from "react";
import useAuth from "../hooks/useAuth";

const Context = createContext();
function UserProvider({ children }) {
	const {
		authenticated,
		register,
		login,
		userInfo,
		getToken,
		alterDarkMode,
		logout,
	} = useAuth();
	return (
		<Context.Provider
			value={{
				authenticated,
				register,
				login,
				userInfo,
				getToken,
				alterDarkMode,
				logout,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, UserProvider };
