import React, { useState, useContext } from "react";
import {
	Nav,
	NavbarContainer,
	NavLink,
	Title,
	Create,
	IoAppss,
	Left,
} from "./style";
import ButtonPrimary from "../../ButtonPrimary";
import ProfileButton from "../../ProfileButton";
import SearchBar from "../../SearchBar";
import { MenuContext } from "../../../context/menuContext";
export default function TopMenu() {
	const { TryOpen } = useContext(MenuContext);
	const [data, setData] = useState([
		{ product: "Maria" },
		{ product: "Mauro" },
	]);
	return (
		<Nav>
			<NavbarContainer>
				<Left>
					<IoAppss onClick={TryOpen} />
					<NavLink to="/">
						<Title>Traveling</Title>
					</NavLink>
				</Left>

				<SearchBar placeholder="Search for posts" data={data} />
				<Create>
					<ButtonPrimary label="Post" />
					<ProfileButton />
				</Create>
			</NavbarContainer>
		</Nav>
	);
}
