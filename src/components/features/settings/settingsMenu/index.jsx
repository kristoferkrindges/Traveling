import React from "react";
import {
	NotificationMenuContainer,
	Border,
} from "../../../menus/notiticationsSearch/style";
import HeadingContainer from "../../../containers/heading";
import { Legend, Option, Options } from "../../../menus/filterSearch/style";

export default function SettingsMenu({ search, setSearch }) {
	return (
		<NotificationMenuContainer>
			<HeadingContainer type={"Settings"} text={"Settings"} />
			<Options>
				<Option onClick={() => setSearch("Account")}>
					<Border
						style={
							search !== "Account" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend>Account</Legend>
				</Option>
				<Option onClick={() => setSearch("Privacy")}>
					<Border
						style={
							search !== "Privacy" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend>Privacy</Legend>
				</Option>
				<Option onClick={() => setSearch("More")}>
					<Border
						style={
							search !== "More" ? { backgroundColor: "transparent" } : null
						}
					/>
					<Legend>More</Legend>
				</Option>
			</Options>
		</NotificationMenuContainer>
	);
}
