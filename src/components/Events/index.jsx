import React, { useState } from "react";
import { Container, Heading, Title, IoEvent } from "./style";
import Event from "./Event";

export default function Events() {
	const [event, setevent] = useState([
		{
			photo:
				"https://www.eventbrite.co.uk/blog/wp-content/uploads/2022/09/dance-event.jpg",
			name: "Fun Fast",
			date: "16/11/2023",
		},
		{
			photo:
				"https://img.freepik.com/vetores-premium/plano-de-fundo-do-filme-de-cinema-pipoca-pelicula-de-filme-ripa-ingressos-plano-de-fundo-do-tempo-do-filme_41737-248.jpg",
			name: "Cinema",
			date: "04/12/2023",
		},
	]);
	return (
		<Container>
			<Heading>
				<Title>Events</Title>
				<IoEvent />
			</Heading>
			<>
				{event.length > 0 &&
					event.map((value, key) => (
						<Event
							key={key}
							photo={value.photo}
							name={value.name}
							date={value.date}
						/>
					))}
			</>
		</Container>
	);
}
