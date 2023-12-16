import React, { useContext, useEffect, useState } from "react";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { NotificationContainer, Title } from "../notification/style";
import Notifications from "../../../../components/features/notifications";
import { EventContext } from "../../../../contexts/eventContext";
import EventSearchMenu from "../../../../components/menus/eventsSearch";
import CreateAndUpdateModal from "../../../../components/features/events/modalCreateAndUpdate";
import AvatarNone from "../../../../assets/images/avatarnone.png";
import Event from "../../../../components/features/events/event";

export default function EventMidTemplate() {
	const { findAll, findMyEvents, findMyEventsAttend, findEventsNowMonth } =
		useContext(EventContext);
	const [events, setEvents] = useState();
	const [eventsAll, setEventsAll] = useState();
	const [myEvents, setMyEvents] = useState();
	const [myEventsAttend, setMyEventsAttend] = useState();
	const [eventsNow, setEventsNow] = useState();
	const [filteredData, setFilteredData] = useState([]);
	const [search, setSearch] = useState("All");
	const [type, setType] = useState(true);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		if (!events) {
			searchAllEvents();
		}
	}, []);

	useEffect(() => {
		setFilteredData(events);
	}, [events]);

	const searchAllEvents = async () => {
		// setEvents([]);
		if (!eventsAll) {
			const newEvents = await findAll();
			console.log(newEvents);
			setEventsAll(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsAll);
		}
		setSearch("All");
	};

	const searchMyEvents = async () => {
		// setEvents([]);
		if (!myEvents) {
			const newEvents = await findMyEvents();
			console.log("if");
			setMyEvents(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(myEvents);
			console.log("else");
		}
		setSearch("MyEvents");
	};

	const searchMyEventsAttend = async () => {
		// setEvents([]);
		if (!myEventsAttend) {
			const newEvents = await findMyEventsAttend();
			setMyEventsAttend(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(myEventsAttend);
		}
		setSearch("MyEventsAttend");
	};

	const searchEventsNowMonth = async () => {
		setEvents([]);
		if (!myEventsAttend) {
			const newEvents = await findEventsNowMonth();
			setEventsNow(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsNow);
		}
		setSearch("EventsNow");
	};

	const handlerModal = () => {
		setModal(modal ? false : true);
	};

	const insertEvent = (event) => {
		setEvents([event, ...events]);
	};

	return (
		<NotificationContainer>
			{modal && (
				<CreateAndUpdateModal
					click={handlerModal}
					type={type}
					avatarNone={AvatarNone}
					insertEvent={insertEvent}
				/>
			)}
			<EventSearchMenu
				search={search}
				data={events}
				setFilteredData={setFilteredData}
				searchMyEvents={searchMyEvents}
				searchAllEvents={searchAllEvents}
				searchMyEventsAttend={searchMyEventsAttend}
				searchEventsNowMonth={searchEventsNowMonth}
				handlerModal={handlerModal}
			/>
			{filteredData ? (
				<>
					{filteredData.length > 0 ? (
						filteredData.map((value, key) => (
							<Event
								key={key}
								photo={value.photo}
								name={value.name}
								creator={value.userAllResponse}
								attendsUsers={value.usersAttends}
								attendsCount={value.attends}
								city={value.city}
								zipCode={value.zipCode}
								address={value.address}
								eventDate={value.eventDate}
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
