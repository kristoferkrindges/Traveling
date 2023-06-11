import React from "react";
import {
	Container,
	Icons,
	Notify,
	Numbers,
	Home,
	Bookmark,
	Notifications,
	Settings,
	Number,
} from "./style";

export default function Options() {
	return (
		<Container>
			<Icons>
				<Home />
				<Bookmark />
				<Notify>
					<Notifications />
					<Numbers>
						<Number>99</Number>
					</Numbers>
				</Notify>
				<Settings />
			</Icons>
		</Container>
	);
}
