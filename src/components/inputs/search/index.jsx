import React from "react";

import { SearchBar, SearchMessages } from "./style";
import { SearchIcon } from "../../icons/iconsI05.styled";

export default function SearchInput() {
	return (
		<SearchBar>
			<SearchIcon />
			<SearchMessages type="search" placeholder="Search messages" />
		</SearchBar>
	);
}
