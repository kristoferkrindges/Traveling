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
								? { backgroundColor: "rgb(52, 131, 235)", top: "35px" }
								: null
						}
					/>
					<Legend
						style={search === "Unread" ? { color: "rgb(52, 131, 235)" } : null}
					>
						Unread
					</Legend>
				</Option>
				<Option onClick={searchAllNotification}>
					<Border
						style={
							search === "All"
								? { backgroundColor: "rgb(52, 131, 235)", top: "35px" }
								: null
						}
					/>
					<Legend
						style={search === "All" ? { color: "rgb(52, 131, 235)" } : null}
					>
						All
					</Legend>
				</Option>
				<Option onClick={searchFollowNotification}>
					<Border
						style={
							search === "Follow"
								? { backgroundColor: "rgb(52, 131, 235)", top: "35px" }
								: null
						}
					/>
					<Legend
						style={search === "Follow" ? { color: "rgb(52, 131, 235)" } : null}
					>
						Followers
					</Legend>
				</Option>
			</Options>
		</NotificationMenuContainer>
	);
}
