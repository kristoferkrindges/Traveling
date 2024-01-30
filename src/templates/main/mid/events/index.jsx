import React, { useContext, useEffect, useState } from "react";
import { LoaderContainer } from "../../../../components/containers/loader.styled";
import Loader from "../../../../components/loader";
import { NotificationContainer, Title } from "../notification/style";
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
	const [modal, setModal] = useState(false);
	const [object, setObject] = useState();
	const [type, setType] = useState(false);
	const [stateLoader, setStateLoader] = useState(false);

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
		setStateLoader(true);
		if (!eventsAll) {
			const newEvents = await findAll();
			setEventsAll(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsAll);
		}
		setSearch("All");
		setStateLoader(false);
	};

	const searchMyEvents = async () => {
		// setEvents([]);
		setStateLoader(true);
		if (!myEvents) {
			const newEvents = await findMyEvents();
			setMyEvents(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(myEvents);
		}
		setSearch("MyEvents");
		setStateLoader(false);
	};

	const searchMyEventsAttend = async () => {
		// setEvents([]);
		setStateLoader(true);
		if (!myEventsAttend) {
			const newEvents = await findMyEventsAttend();
			setMyEventsAttend(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(myEventsAttend);
		}
		setSearch("MyEventsAttend");
		setStateLoader(false);
	};

	const searchEventsNowMonth = async () => {
		setStateLoader(true);
		setEvents([]);
		if (!myEventsAttend) {
			const newEvents = await findEventsNowMonth();
			setEventsNow(newEvents);
			setEvents(newEvents);
		} else {
			setEvents(eventsNow);
		}
		setSearch("EventsNow");
		setStateLoader(false);
	};

	const handlerModal = (obj, type) => {
		setObject(obj);
		setType(type ? type : false);
		setModal(modal ? false : true);
	};

	const insertEvent = (event) => {
		setEvents([event, ...events]);
	};

	const updateEvent = (newEvent) => {
		setEvents((prevEvents) =>
			prevEvents.map((event) => (event.id === newEvent.id ? newEvent : event))
		);
	};

	const handlerDelet = (evt, eventId) => {
		evt.preventDefault();
		const updatedEvents = events.filter((event) => event.id !== eventId);
		setEvents(updatedEvents);
	};

	return (
		<NotificationContainer>
			{modal && (
				<CreateAndUpdateModal
					click={handlerModal}
					type={type}
					avatarNone={AvatarNone}
					insertEvent={!type ? insertEvent : updateEvent}
					object={object}
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
			{stateLoader ? (
				<LoaderContainer>
					<Loader />
				</LoaderContainer>
			) : filteredData ? (
				<>
					{filteredData.length > 0 ? (
						filteredData.map((value, key) => (
							<Event
								key={key}
								object={value}
								handlerModal={handlerModal}
								handlerDelet={handlerDelet}
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
