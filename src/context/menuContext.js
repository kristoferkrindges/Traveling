import React, { useState } from "react";

const MenuContext = React.createContext(null);

function MenuProvider({ children }) {
	const [openMenu, setOpenMenu] = useState(false);
	function TryOpen() {
		if (openMenu) {
			setOpenMenu(false);
		} else {
			setOpenMenu(true);
		}
	}

	return (
		<MenuContext.Provider
			value={{
				openMenu,
				TryOpen,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
}

export { MenuContext, MenuProvider };
