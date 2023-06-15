import React, { useContext } from "react";
import { MainContainer, Container, Left, Middle, Right } from "./style";
import InfoUser from "../InfoUser";
import Stories from "../Stories";
import CreatePost from "../CreatePost";
import Feeds from "../Feeds";
import MessagesCard from "../MessagesCard";
import ControllerBoxChat from "../ControllerBoxChat";
import SideBar from "../SideBar";
import { MessageProvider } from "../../context/messageContext";
import Events from "../Events";
import MenuMobile from "../MenuMobile";
import { MenuContext } from "../../context/menuContext";
import Profile from "../Profile";
import CardProfile from "../CardProfile";
import OptionsProfile from "../OptionsProfile";
export default function Layout({ type }) {
	const { openMenu } = useContext(MenuContext);
	return (
		<MainContainer>
			<Container>
				<Left>
					{openMenu ? <MenuMobile /> : <></>}

					<InfoUser />
					<SideBar />
				</Left>
				<Middle>
					{type == "Home" ? (
						<>
							<Stories />
							<CreatePost />
							<Feeds />
						</>
					) : (
						<></>
					)}
					{type == "Profile" ? (
						<>
							<Profile />
						</>
					) : (
						<></>
					)}
				</Middle>
				<Right>
					<MessageProvider>
						<MessagesCard />
						<Events />
						<ControllerBoxChat />
					</MessageProvider>
				</Right>
			</Container>
		</MainContainer>
	);
}
