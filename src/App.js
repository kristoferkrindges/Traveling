import { GlobalStyle } from "./styles/GlobalStyles";
import React, { useState } from "react";
import { UserProvider } from "./context/userContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";
import Routed from "./routes/routed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { MenuProvider } from "./context/menuContext";
export const ThemeContext = React.createContext(null);

function App() {
	const [theme, setTheme] = useState("light");
	const themeStyle = theme === "light" ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ setTheme, theme }}>
			<ThemeProvider theme={themeStyle}>
				<GlobalStyle />
				<MenuProvider>
					<Routed></Routed>
				</MenuProvider>
				<ToastContainer></ToastContainer>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}

export default App;
