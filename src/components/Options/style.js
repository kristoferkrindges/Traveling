import styled from "styled-components";
import {
	IoSettingsOutline,
	IoNotificationsOutline,
	IoHomeOutline,
	IoBookmarkOutline,
} from "react-icons/io5";

export const Settings = styled(IoSettingsOutline)``;
export const Notifications = styled(IoNotificationsOutline)``;
export const Home = styled(IoHomeOutline)``;
export const Bookmark = styled(IoBookmarkOutline)``;

export const Container = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1.2rem;
	margin-bottom: 1rem;
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	/* margin-bottom: 1rem; */

	svg {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.text};
		cursor: pointer;
	}
	svg:hover {
		color: ${({ theme }) => theme.secondColor};
	}
`;

export const Notify = styled.div`
	position: relative;
	overflow: visible;
`;

export const Numbers = styled.div`
	position: absolute;
	bottom: 15px;
	left: 10px;
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.container};
	background-color: ${({ theme }) => theme.secondColor};
	text-align: center;
`;

export const Number = styled.h5`
	text-align: center;
	margin-top: 0.19rem;
	font-size: 0.63rem;
`;
