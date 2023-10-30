import styled from "styled-components";

import {
	IoPersonCircleOutline,
	IoLockClosedOutline,
	IoLogoGoogle,
	IoMailOutline,
	IoPeopleCircleOutline,
	IoAtCircleOutline,
	IoHome,
	IoPersonCircle,
	IoChatbubble,
	IoNotifications,
	IoAirplane,
	IoSearchOutline,
	IoSettings,
	IoLogOut,
	IoMoon,
	IoSunny,
	IoImage,
	IoEllipsisHorizontal,
	IoCloudUpload,
	IoCloseCircle,
	IoExtensionPuzzle,
} from "react-icons/io5";
export const UserCircle = styled(IoPersonCircleOutline)``;
export const Mail = styled(IoMailOutline)``;
export const TwoPeople = styled(IoPeopleCircleOutline)``;
export const Lock = styled(IoLockClosedOutline)``;
export const At = styled(IoAtCircleOutline)``;
export const IconGoogle = styled(IoLogoGoogle)`
	stroke: white;
	color: white;
`;
export const HomeIcon = styled(IoHome)``;
export const ProfileIcon = styled(IoPersonCircle)``;
export const ChatIcon = styled(IoChatbubble)``;
export const NotificationIcon = styled(IoNotifications)``;
export const EventIcon = styled(IoAirplane)``;
export const SearchIcon = styled(IoSearchOutline)``;
export const SettingsIcon = styled(IoSettings)``;
export const LogoutIcon = styled(IoLogOut)``;
export const MoonIcon = styled(IoMoon)``;
export const SunIcon = styled(IoSunny)``;
export const PostIcon = styled(IoExtensionPuzzle)``;
export const ImageIcon = styled(IoImage)`
	/* margin-right: 5px;
	position: relative;
	top: 2px; */
`;
export const EllipsIcon = styled(IoEllipsisHorizontal)`
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;
export const CloudUploadIcon = styled(IoCloudUpload)`
	&:hover {
		opacity: 0.7;
		cursor: pointer;
	}
`;

export const DeletIcon = styled(IoCloseCircle)`
	&:hover {
		opacity: 0.7;
		cursor: pointer;
	}
`;
