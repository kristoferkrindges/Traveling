import React, { useContext, useEffect, useState } from "react";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { NotificationContainer, Title } from "../notification/style";
import Notifications from "../../../../components/features/notifications";
import { EventContext } from "../../../../contexts/eventContext";
import EventSearchMenu from "../../../../components/menus/eventsSearch";
import HeadingContainer from "../../../../components/containers/heading";
import { CreatedContainer } from "./style";

export default function EventMidTemplate() {
	const { findAll, findMyEvents, findMyEventsAttend, findEventsNowMonth } =
		useContext(EventContext);
	const [events, setEvents] = useState();
	const [eventsAll, setEventsAll] = useState();
	const [myEvents, setMyEvents] = useState();
	const [myEventsAttend, setMyEventsAttend] = useState();
	const [filteredData, setFilteredData] = useState([]);
	const [search, setSearch] = useState("All");

	useEffect(() => {
		if (!events) {
			searchAllEvents();
		}
	}, []);

	useEffect(() => {
		setFilteredData(events);
	}, [events]);

	const searchAllEvents = async () => {
		setEvents([]);
		if (!eventsAll) {
			const newEvents = await findAll();
			setEventsAll(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsAll);
		}
		setSearch("All");
	};

	const searchMyEvents = async () => {
		setEvents([]);
		if (!myEvents) {
			const newEvents = await findMyEvents();
			setMyEvents(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsAll);
		}
		setSearch("MyEvents");
	};

	const searchMyEventsAttend = async () => {
		setEvents([]);
		if (!myEventsAttend) {
			const newEvents = await findMyEventsAttend();
			setMyEventsAttend(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsAll);
		}
		setSearch("MyEventsAttend");
	};

	const searchEventsNowMonth = async () => {
		setEvents([]);
		if (!myEventsAttend) {
			const newEvents = await findEventsNowMonth();
			setMyEventsAttend(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsAll);
		}
		setSearch("EventsNow");
	};

	return (
		<NotificationContainer>
			{/* <CreatedContainer>
				<HeadingContainer type={"Events"} text={"Events"} />
			</CreatedContainer> */}
			<EventSearchMenu
				search={search}
				data={events}
				setFilteredData={setFilteredData}
				searchMyEvents={searchMyEvents}
				searchAllEvents={searchAllEvents}
				searchMyEventsAttend={searchMyEventsAttend}
				searchEventsNowMonth={searchEventsNowMonth}
			/>
			{!filteredData ? (
				<>
					{filteredData.length > 0 ? (
						filteredData.map((value, key) => (
							<Notifications
								key={key}
								user={value.user}
								creator={value.creator}
								type={value.type}
								date={value.date}
							/>
						))
					) : (
						<Title>You have seen all your notifications</Title>
					)}
				</>
			) : (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			)}
		</NotificationContainer>
	);
}
