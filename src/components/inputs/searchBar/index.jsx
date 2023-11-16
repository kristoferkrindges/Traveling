import React, { useState, useEffect, useContext, useRef } from "react";
import { SearchBarContainer, SearchInput } from "./style";
import { SearchIcon } from "../../icons/iO5Icons.styled";

export default function SearchBar({ data, setFilteredData }) {
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			return (value.firstname + " " + value.lastname)
				.toLowerCase()
				.includes(searchWord.toLowerCase());
		});

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
				placeholder="Search"
				value={wordEntered}
				onChange={handleFilter}
			/>
		</SearchBarContainer>
	);
}
