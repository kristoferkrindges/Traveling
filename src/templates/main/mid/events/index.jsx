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
	const [modal, setModal] = useState(false);
	const [object, setObject] = useState();
	const [type, setType] = useState(false);

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
			{filteredData ? (
				<>
					{filteredData.length > 0 ? (
						filteredData.map((value, key) => (
							<Event
								key={key}
								object={value}
								photo={value.photo}
								name={value.name}
								creator={value.userAllResponse}
								attendsUsers={value.usersAttends}
								attendsCount={value.attends}
								city={value.city}
								zipCode={value.zipCode}
								address={value.address}
								eventDate={value.eventDate}
								handlerModal={handlerModal}
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
