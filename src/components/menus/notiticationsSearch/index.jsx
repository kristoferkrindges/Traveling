import React from "react";
import { MessagesContainer } from "../../features/messages/messages/style";
import HeadingContainer from "../../containers/heading";
import {
	Border,
	Legend,
	Option,
	Options,
} from "../../menus/filterSearch/style";
import SearchBar from "../../inputs/searchBar";
import { NotificationMenuContainer } from "./style";

export default function NotificationSearchMenu({
	search,
	data,
	setFilteredData,
	searchFollowNotification,
	searchAllNotification,
	searchUnreadNotification,
}) {
	return (
		<NotificationMenuContainer>
			<HeadingContainer type={"Notifications"} text={"Notifications"} />
			<SearchBar
				data={data}
				setFilteredData={setFilteredData}
				type={"Notifications"}
			/>
			<Options>
				<Option onClick={searchUnreadNotification}>
					<Border
						style={
							search === "Unread"
								? { backgroundColor: "hsl(252, 73%, 29%)", top: "35px" }
								: null
						}
					/>
					<Legend
						style={search === "Unread" ? { color: "hsl(252, 73%, 29%)" } : null}
					>
						Unread
					</Legend>
				</Option>
				<Option onClick={searchAllNotification}>
					<Border
						style={
							search === "All"
								? { backgroundColor: "hsl(252, 73%, 29%)", top: "35px" }
								: null
						}
					/>
					<Legend
						style={search === "All" ? { color: "hsl(252, 73%, 29%)" } : null}
					>
						All
					</Legend>
				</Option>
				<Option onClick={searchFollowNotification}>
					<Border
						style={
							search === "Follow"
								? { backgroundColor: "hsl(252, 73%, 29%)", top: "35px" }
								: null
						}
					/>
					<Legend
						style={search === "Follow" ? { color: "hsl(252, 73%, 29%)" } : null}
					>
						Followers
					</Legend>
				</Option>
			</Options>
		</NotificationMenuContainer>
	);
}
