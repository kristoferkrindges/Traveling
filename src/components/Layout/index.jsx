import React, { useContext } from "react";
import { MainContainer, Container, Left, Middle, Right } from "./style";
import InfoUser from "../InfoUser";
import Stories from "../Stories";
import CreatePost from "../CreatePost";
import Feeds from "../Feeds";
import MessagesCard from "../MessagesCard";
import ControllerBoxChat from "../../Controllers/ControllerBoxChat";
import SideBar from "../SideBar";
import { MessageProvider } from "../../context/messageContext";
import Events from "../Events";
import MenuMobile from "../MenuMobile";
import { MenuContext } from "../../context/menuContext";
import Profile from "../Profile";
import ControllerChat from "../../Controllers/ControllerChat";
export default function Layout({ type }) {
	const { openMenu } = useContext(MenuContext);
	return (
		<MessageProvider>
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
						{type == "Chat" ? (
							<>
								<ControllerChat />
							</>
						) : (
							<></>
						)}
					</Middle>
					<Right>
						{type == "Chat" ? (
							<MessagesCard chat={false} mini={false} />
						) : (
							<MessagesCard chat={false} mini={true} />
						)}
						{type == "Chat" ? <></> : <Events />}
						<ControllerBoxChat />
					</Right>
				</Container>
			</MainContainer>
		</MessageProvider>
	);
}
