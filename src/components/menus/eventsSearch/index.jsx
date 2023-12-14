import React from "react";
import HeadingContainer from "../../containers/heading";
import { Legend, Option, Options } from "../../menus/filterSearch/style";
import SearchBar from "../../inputs/searchBar";
import {
	NotificationMenuContainer,
	Border,
} from "../notiticationsSearch/style";
import { CreatedContainer } from "./style";
import { CreateIcon, OptionsIcon } from "../../icons/iO5Icons.styled";
import { PrimaryButton } from "../../buttons/primaryButton.styled";
import { CircleContainer } from "../../containers/circle.styled";

export default function EventSearchMenu({
	search,
	data,
	setFilteredData,
	searchMyEvents,
	searchAllEvents,
	searchMyEventsAttend,
	searchEventsNowMonth,
}) {
	return (
		<NotificationMenuContainer>
			<HeadingContainer type={"Events"} text={"Events"} />
			<CreatedContainer>
				<OptionsIcon />
				<CircleContainer>
					<CreateIcon />
				</CircleContainer>
			</CreatedContainer>
			<SearchBar
				data={data}
				setFilteredData={setFilteredData}
				type={"Events"}
			/>
			<Options>
				<Option onClick={searchAllEvents}>
					<Border
						style={search !== "All" ? { backgroundColor: "transparent" } : null}
					/>
					<Legend>All</Legend>
				</Option>
				<Option onClick={searchMyEvents}>
					<Border
						style={
							search !== "MyEvents" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend>Created</Legend>
				</Option>
				<Option onClick={searchMyEventsAttend}>
					<Border
						style={
							search !== "MyEventsAttend"
								? { backgroundColor: "transparent" }
								: null
						}
					/>
					<Legend>Subscribed</Legend>
				</Option>
				<Option onClick={searchEventsNowMonth}>
					<Border
						style={
							search !== "EventsNow" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend>Now</Legend>
				</Option>
			</Options>
		</NotificationMenuContainer>
	);
}
