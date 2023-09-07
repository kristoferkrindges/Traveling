import { AiOutlineHome } from "react-icons/ai";
import {
	IoPersonCircleOutline,
	IoNotificationsOutline,
	IoMailOutline,
} from "react-icons/io5";
export const SidebarData = [
	{
		label: "Home",
		icon: <AiOutlineHome />,
		to: "/",
		notification: 0,
	},
	{
		label: "Profile",
		icon: <IoPersonCircleOutline />,
		to: "/profile",
		notification: 0,
	},
	{
		label: "Messages",
		icon: <IoMailOutline />,
		to: "/messages",
		notification: 2,
	},
	{
		label: "Notifications",
		icon: <IoNotificationsOutline />,
		to: "/notifications",
		notification: 3,
	},
];
