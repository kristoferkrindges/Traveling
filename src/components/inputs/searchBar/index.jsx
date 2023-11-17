import React, { useState, useEffect, useContext, useRef } from "react";
import { SearchBarContainer, SearchInput } from "./style";
import { SearchIcon } from "../../icons/iO5Icons.styled";

export default function SearchBar({ data, setFilteredData, type }) {
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		let newFilter;
		if (type === "Notifications") {
			newFilter = data.filter((value) => {
				return (value.creator.firstname + " " + value.creator.lastname)
					.toLowerCase()
					.includes(searchWord.toLowerCase());
			});
		} else {
			newFilter = data.filter((value) => {
				return (value.firstname + " " + value.lastname)
					.toLowerCase()
					.includes(searchWord.toLowerCase());
			});
		}

		if (searchWord === "") {
			setFilteredData(data);
		} else {
			setFilteredData(newFilter);
		}
	};
	return (
		<SearchBarContainer>
			<SearchIcon />
			<SearchInput
				type="search"
				placeholder={type === "Notifications" ? "Search for users" : "Search"}
				value={wordEntered}
				onChange={handleFilter}
			/>
		</SearchBarContainer>
	);
}
