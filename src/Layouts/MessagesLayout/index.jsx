import React from "react";
import {
	Messages,
	Heading,
	Title,
	Mail,
	Search,
	SearchBar,
	SearchMessages,
	Other,
} from "./style";
import ControllerMessages from "../../Controllers/ControllerMessages";
import SelectMessage from "../../components/SelectMessage";
import SelectOptions from "../../components/SelectOptions";

export default function MessagesLayout({ chat, mini }) {
	return (
		<>
			{chat ? (
				<>
					<SelectMessage type="Message" />
					<Other>
						<Heading>
							<Title>Messages</Title>
							<Mail />
						</Heading>
						<SearchBar>
							<Search></Search>
							<SearchMessages type="search" placeholder="Search messages" />
						</SearchBar>
						<SelectOptions type="Messages" />
						<ControllerMessages type={mini} />
					</Other>
				</>
			) : (
				<Messages>
					<Heading>
						<Title>Messages</Title>
						<Mail />
					</Heading>
					<SearchBar>
						<Search></Search>
						<SearchMessages type="search" placeholder="Search messages" />
					</SearchBar>
					<SelectOptions type="Messages" />
					<ControllerMessages type={mini} />
				</Messages>
			)}
		</>
	);
}
