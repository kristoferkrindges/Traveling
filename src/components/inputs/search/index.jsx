import React, { useState, useEffect, useContext, useRef } from "react";
import { SearchBar } from "./style";
import { SearchIcon } from "../../icons/iO5Icons.styled";
import { SearchInput } from "../searchBar/style";
import ResultSearchUsersModal from "../../features/user/resultSearchUsers";
import { UserContext } from "../../../contexts/userContext";
import Loader from "../../loader";

export default function SearchTopMenu() {
	const { findAll } = useContext(UserContext);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");
	const [loader, setLoader] = useState(false);
	const searchInputRef = useRef(null);

	useEffect(() => {
		if (data.length === 0) {
			searchUsers();
		}
		document.addEventListener("click", handleGlobalClick);
		return () => {
			document.removeEventListener("click", handleGlobalClick);
		};
	}, []);

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			return (value.firstname + " " + value.lastname)
				.toLowerCase()
				.includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const searchUsers = async () => {
		setLoader(true);
		const users = await findAll();
		setData(users);
		setLoader(false);
	};

	const handlerSearch = async () => {
		setOpen(true);
	};

	const handleGlobalClick = (event) => {
		if (
			searchInputRef.current &&
			!searchInputRef.current.contains(event.target) &&
			!event.target.classList.contains("resultSearchUsersModal")
		) {
			setOpen(false);
			setWordEntered("");
			setFilteredData([]);
		}
	};

	return (
		<SearchBar ref={searchInputRef}>
			<SearchIcon />
			<SearchInput
				type="search"
				placeholder="Search"
				value={wordEntered}
				onChange={handleFilter}
				onClick={handlerSearch}
			/>
			{loader ? (
				<Loader />
			) : (
				open &&
				filteredData.length > 0 && (
					<ResultSearchUsersModal
						result={filteredData}
						className="resultSearchUsersModal"
					/>
				)
			)}
		</SearchBar>
	);
}
