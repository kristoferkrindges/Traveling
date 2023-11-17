import React, { useState } from "react";
import { ThemeProvider as ThemeStyle } from "styled-components";
import { GlobalStyle } from "../styles/globalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { darkTheme, lightTheme } from "../styles/theme";
import ProviderRoute from "../provider/providerRoute";
export const ThemeContext = React.createContext(null);

export default function ThemeProvider() {
	const [theme, setTheme] = useState("light");
	const themeStyle = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<ThemeStyle theme={themeStyle}>
				<GlobalStyle />
				<ProviderRoute></ProviderRoute>
				<ToastContainer />
			</ThemeStyle>
		</ThemeContext.Provider>
	);
}
