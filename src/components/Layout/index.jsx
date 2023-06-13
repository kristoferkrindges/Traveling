import React from "react";
import { MainContainer, Container, Left, Middle, Right } from "./style";
import InfoUser from "../InfoUser";
import Stories from "../Stories";
import CreatePost from "../CreatePost";
import Feeds from "../Feeds";
import MessagesCard from "../MessagesCard";
import Options from "../Options";
import ControllerBoxChat from "../ControllerBoxChat";

export default function Layout() {
	return (
		<MainContainer>
			<Container>
				<Left>
					<InfoUser />
				</Left>
				<Middle>
					<Stories />
					<CreatePost />
					<Feeds />
				</Middle>
				<Right>
					<Options></Options>
					<MessagesCard />
					<ControllerBoxChat />
				</Right>
			</Container>
		</MainContainer>
	);
}
