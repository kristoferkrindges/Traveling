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
		update,
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
				update,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, UserProvider };
