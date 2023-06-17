import React, { useState, useContext } from "react";
import {
	Messages,
	Heading,
	Title,
	Mail,
	Search,
	SearchBar,
	SearchMessages,
	Category,
	Primary,
	General,
	Requests,
	Other,
} from "./style";
import MessagesList from "../MessagesList";
import FriendRequest from "../FriendRequest";
import SelectMessage from "../SelectMessage";

export default function MessagesCard({ chat, mini }) {
	// Render types
	const [activePrimary, setActivePrimary] = useState("active");
	const [activeGeneral, setActiveGeneral] = useState("");
	const [activeRequests, setActiveRequests] = useState("");
	function handlerActivePrimary() {
		setActivePrimary("active");
		setActiveGeneral("");
		setActiveRequests("");
	}
	function handlerActiveGeneral() {
		setActivePrimary("");
		setActiveGeneral("active");
		setActiveRequests("");
	}
	function handlerActiveRequests() {
		setActivePrimary("");
		setActiveGeneral("");
		setActiveRequests("active");
	}
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
						<Category>
							<Primary className={activePrimary} onClick={handlerActivePrimary}>
								Primary
							</Primary>
							<General className={activeGeneral} onClick={handlerActiveGeneral}>
								General
							</General>
							<Requests
								className={activeRequests}
								onClick={handlerActiveRequests}
							>
								Blocked(2)
							</Requests>
						</Category>
						{activePrimary || activeGeneral ? (
							<MessagesList type={mini} />
						) : (
							<FriendRequest />
						)}
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
					<Category>
						<Primary className={activePrimary} onClick={handlerActivePrimary}>
							Primary
						</Primary>
						<General className={activeGeneral} onClick={handlerActiveGeneral}>
							General
						</General>
						<Requests
							className={activeRequests}
							onClick={handlerActiveRequests}
						>
							Blocked(2)
						</Requests>
					</Category>
					{activePrimary || activeGeneral ? (
						<MessagesList type={mini} />
					) : (
						<FriendRequest />
					)}
				</Messages>
			)}
		</>
	);
}
