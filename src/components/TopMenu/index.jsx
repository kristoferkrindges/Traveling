import React, { useState } from "react";
import {
	Container,
	NavbarContainer,
	NavLink,
	Title,
	SearchBar,
	ContainerInput,
	InputSearch,
	TextInput,
	IconSearch,
	Create,
	Profile,
	ProfileLink,
	Li,
} from "./style";
import { Link } from "react-router-dom";

export default function TopMenu() {
	const [search, setSearch] = useState();
	const [hero, setHero] = useState(false);

	function HandlerOpen() {
		if (hero == false) {
			setHero(true);
		} else {
			setHero(false);
		}
	}
	return (
		<Container>
			<NavbarContainer>
				<NavLink to="/">
					<Title>Traveling</Title>
				</NavLink>
				<SearchBar>
					<ContainerInput>
						<TextInput>
							<IconSearch />
						</TextInput>
						<InputSearch
							type="text"
							placeholder=""
							value={search}
							onChange={(e) => {
								setSearch(e.target.value);
							}}
						/>
						<Create>
							<Profile>
								<img
									onClick={HandlerOpen}
									src={
										"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
									}
									alt=""
								/>
								<ProfileLink
									style={hero ? { display: "block" } : { display: "none" }}
								>
									<Li>
										<Link to="/">
											<IconSearch></IconSearch> Perfil
										</Link>
									</Li>
								</ProfileLink>
							</Profile>
						</Create>
					</ContainerInput>
				</SearchBar>
			</NavbarContainer>
		</Container>
	);
}
