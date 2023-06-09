import React, { useState } from "react";
import { Nav, NavbarContainer, NavLink, Title, Create } from "./style";
import { Link } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary";
import ProfileButton from "../ProfileButton";
import SearchBar from "../SearchBar";

export default function TopMenu() {
	const [data, setData] = useState([
		{ product: "Maria" },
		{ product: "Mauro" },
	]);
	return (
		<Nav>
			<NavbarContainer>
				<NavLink to="/">
					<Title>Traveling</Title>
				</NavLink>
				<SearchBar placeholder="Search for posts" data={data} />
				<Create>
					<ButtonPrimary label="Create" />
					<ProfileButton />
				</Create>
			</NavbarContainer>
		</Nav>
	);
}
