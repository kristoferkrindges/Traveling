import React from "react";
import { Container, Left, Middle, Right } from "./style";
import InfoUser from "../InfoUser";

export default function Layout() {
	return (
		<Container>
			<Left>
				<InfoUser />
			</Left>
			<Middle></Middle>
			<Right></Right>
		</Container>
	);
}
