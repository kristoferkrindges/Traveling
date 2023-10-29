import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";

import { Navigation, ContainerIcon, Legend, BorderSelect } from "./style";
import { Link } from "react-router-dom";
import {
	ChatIcon,
	EventIcon,
	HomeIcon,
	NotificationIcon,
	ProfileIcon,
} from "../../icons/iconsI05.styled";

export default function FeaturesRoutedMenu() {
	const { userInfo } = useContext(UserContext);
	const { pathname } = useLocation();

	const [showLegendHome, setShowLegendHome] = useState(false);
	const [showLegendProfile, setShowLegendProfile] = useState(false);
	const [showLegendEvents, setShowLegendEvents] = useState(false);
	const [showLegendMessages, setShowLegendMessages] = useState(false);

	const handleMouseEnterHome = () => {
		setShowLegendHome(true);
	};

	const handleMouseLeaveHome = () => {
		setShowLegendHome(false);
	};

	const handleMouseEnterProfile = () => {
		setShowLegendProfile(true);
	};

	const handleMouseLeaveProfile = () => {
		setShowLegendProfile(false);
	};

	const handleMouseEnterEvents = () => {
		setShowLegendEvents(true);
	};

	const handleMouseLeaveEvents = () => {
		setShowLegendEvents(false);
	};

	const handleMouseEnterMessages = () => {
		setShowLegendMessages(true);
	};

	const handleMouseLeaveMessages = () => {
		setShowLegendMessages(false);
	};

	return (
		<Navigation>
			<ContainerIcon>
				<Link to={`/`}>
					<HomeIcon
						style={pathname === "/" ? { color: "hsl(252, 73%, 29%)" } : {}}
						onMouseEnter={handleMouseEnterHome}
						onMouseLeave={handleMouseLeaveHome}
					/>
				</Link>
				<BorderSelect
					style={
						pathname === "/" ? { backgroundColor: "hsl(252, 73%, 29%)" } : {}
					}
				/>
				{showLegendHome && <Legend>Home</Legend>}
			</ContainerIcon>

			<ContainerIcon>
				<Link to={`/profile/${userInfo.at}`}>
					<ProfileIcon
						style={
							pathname === `/profile/${userInfo.at}`
								? { color: "hsl(252, 73%, 29%)" }
								: {}
						}
						onMouseEnter={handleMouseEnterProfile}
						onMouseLeave={handleMouseLeaveProfile}
					/>
				</Link>
				<BorderSelect
					style={
						pathname === `/profile/${userInfo.at}`
							? { backgroundColor: "hsl(252, 73%, 29%)" }
							: {}
					}
				/>
				{showLegendProfile && <Legend>Profile</Legend>}
			</ContainerIcon>

			<ContainerIcon>
				<Link to={`/events`}>
					<EventIcon
						style={
							pathname === `/events` ? { color: "hsl(252, 73%, 29%)" } : {}
						}
						onMouseEnter={handleMouseEnterEvents}
						onMouseLeave={handleMouseLeaveEvents}
					/>
				</Link>
				<BorderSelect
					style={
						pathname === `/events`
							? { backgroundColor: "hsl(252, 73%, 29%)" }
							: {}
					}
				/>
				{showLegendEvents && <Legend>Events</Legend>}
			</ContainerIcon>

			<ContainerIcon>
				<Link to={`/messages`}>
					<ChatIcon
						style={
							pathname === `/messages` ? { color: "hsl(252, 73%, 29%)" } : {}
						}
						onMouseEnter={handleMouseEnterMessages}
						onMouseLeave={handleMouseLeaveMessages}
					/>
				</Link>
				<BorderSelect
					style={
						pathname === `/messages`
							? { backgroundColor: "hsl(252, 73%, 29%)" }
							: {}
					}
				/>
				{showLegendMessages && <Legend>Message</Legend>}
			</ContainerIcon>
		</Navigation>
	);
}
