import React from "react";
import {
	Container,
	Heading,
	Title,
	IoNotifications,
	ContainerNotifications,
} from "./style";
import SelectOptions from "../../components/SelectOptions";
import ControllerNotifications from "../../Controllers/ControllerNotifications";
export default function LayoutNotifications() {
	return (
		<>
			<Container>
				<Heading>
					<Title>Notifications</Title>
					<IoNotifications />
				</Heading>
				<SelectOptions type="Notifications" />
			</Container>
			<ContainerNotifications>
				<ControllerNotifications />
			</ContainerNotifications>
		</>
	);
}
