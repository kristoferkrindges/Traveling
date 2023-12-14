import React from "react";
import HeadingContainer from "../../containers/heading";
import { Legend, Option, Options } from "../../menus/filterSearch/style";
import SearchBar from "../../inputs/searchBar";
import { NotificationMenuContainer, Border } from "./style";

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
							search !== "Unread" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend>Unread</Legend>
				</Option>
				<Option onClick={searchAllNotification}>
					<Border
						style={search !== "All" ? { backgroundColor: "transparent" } : null}
					/>
					<Legend>All</Legend>
				</Option>
				<Option onClick={searchFollowNotification}>
					<Border
						style={
							search !== "Follow" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend>Followers</Legend>
				</Option>
			</Options>
		</NotificationMenuContainer>
	);
}
