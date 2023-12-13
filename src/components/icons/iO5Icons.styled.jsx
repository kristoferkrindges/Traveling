import styled from "styled-components";

import {
	IoPeople,
	IoPerson,
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
	IoSearch,
	IoSettings,
	IoLogOut,
	IoMoon,
	IoSunny,
	IoImage,
	IoEllipsisHorizontal,
	IoCloudUpload,
	IoCloseCircle,
	IoExtensionPuzzle,
	IoHeartOutline,
	IoHeart,
	IoChatbubbleOutline,
	IoShareOutline,
	IoBookmarkOutline,
	IoBookmark,
	IoColorWand,
	IoTrash,
	IoAlertCircle,
	IoSend,
	IoArrowRedo,
	IoArrowUndo,
	IoCalendarClear,
	IoMail,
	IoAddCircle,
	IoPlay,
	IoPause,
} from "react-icons/io5";

export const PauseIcon = styled(IoPause)``;

export const PlayIcon = styled(IoPlay)``;

export const AddStoriesIcon = styled(IoAddCircle)``;

export const CalendarIcon = styled(IoCalendarClear)``;

export const ReplyIcon = styled(IoArrowRedo)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;

export const DontReplyIcon = styled(IoArrowUndo)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;

export const SendIcon = styled(IoSend)`
	stroke: white;
	color: white;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const UserCircle = styled(IoPerson)``;

export const Mail = styled(IoMailOutline)``;

export const FollowingsIcon = styled(IoPeople)``;

export const TwoPeople = styled(IoPeopleCircleOutline)``;

export const Lock = styled(IoLockClosedOutline)``;

export const At = styled(IoAtCircleOutline)``;

export const IconGoogle = styled(IoLogoGoogle)`
	stroke: white;
	color: white;
`;
export const HomeIcon = styled(IoHome)``;

export const ProfileIcon = styled(IoPersonCircle)``;

export const ChatIcon = styled(IoMail)``;

export const NotificationIcon = styled(IoNotifications)``;

export const EventIcon = styled(IoAirplane)``;

export const SearchIcon = styled(IoSearch)``;

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

export const HeartIcon = styled(IoHeartOutline)`
	&:hover {
		color: red;
		cursor: pointer;
	}
`;
export const HeartPressIcon = styled(IoHeart)`
	&:hover {
		color: white;
		cursor: pointer;
	}
`;

export const CommentIcon = styled(IoChatbubbleOutline)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;

export const CommentPressIcon = styled(IoChatbubble)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;

export const ShareIcon = styled(IoShareOutline)`
	&:hover {
		color: ${({ theme }) => theme.primary};
		cursor: pointer;
	}
`;

export const BookIcon = styled(IoBookmarkOutline)`
	&:hover {
		color: gold;
		cursor: pointer;
	}
`;
export const BookPressIcon = styled(IoBookmark)`
	color: gold;
	&:hover {
		color: white;
		cursor: pointer;
	}
`;
export const CloseCircleIcon = styled(IoCloseCircle)`
	cursor: pointer;
	z-index: 999;
	color: ${({ theme }) => theme.text};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;

export const EditIcon = styled(IoColorWand)`
	cursor: pointer;
`;

export const DeletIcon = styled(IoTrash)`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
		cursor: pointer;
	}
`;

export const ReportIcon = styled(IoAlertCircle)`
	cursor: pointer;
`;
