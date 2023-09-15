import styled from "styled-components";
import {
	IoEllipsisHorizontal,
	IoPersonCircleOutline,
	IoCalendarClearOutline,
} from "react-icons/io5";
import { FaUserEdit, FaCamera } from "react-icons/fa";
import { RiAttachmentLine } from "react-icons/ri";
import { NavLink as Link } from "react-router-dom";

export const IoPerson = styled(IoPersonCircleOutline)``;
export const IoCalendar = styled(IoCalendarClearOutline)``;
export const RiAtt = styled(RiAttachmentLine)``;
export const Ellips = styled(IoEllipsisHorizontal)`
	position: relative;
	cursor: pointer;
	&:hover {
		opacity: 0.5;
	}
`;

export const FaCam = styled(FaCamera)`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;

export const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
	z-index: 999;
`;

export const Modal = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 300;
	top: 9%;
	right: 1%;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	width: 700px;
`;

export const Heading = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg {
		font-size: 1.4rem;
	}
`;

export const Title = styled.h4``;

export const DropMenu = styled.ul`
	position: absolute;
	top: 80%;
	right: 0;
	background: ${({ theme }) => theme.container};
	padding: 0.5rem 0;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.9);
	border-radius: 1rem;
	opacity: 1;
	transition: all 0.3s ease;
	font-weight: 600;
	z-index: 2;
`;
export const Item = styled.li``;

export const NavLink = styled(Link)`
	cursor: pointer;
	font-weight: bold;
	padding: 0.5rem 1rem;
	display: flex;
	grid-gap: 10px;
	font-size: 0.85rem;
	color: ${({ theme }) => theme.text};
	align-items: center;
	transition: all 0.3s ease;
	&:hover {
		color: ${({ theme }) => theme.secondColor};
		background: ${({ theme }) => theme.background};
	}
`;

export const Separator = styled.div`
	border-top: 2px solid ${({ theme }) => theme.textInverse};
	margin-bottom: 1rem;
	margin-top: 1rem;
`;

export const UserCover = styled.div`
	position: relative;
	display: flex;
	border-radius: 1rem;
	overflow: hidden;
	width: 100%;
	height: 15vh;
	img {
		width: 100%;
		object-fit: cover;
	}
`;
export const UserPhoto = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border-radius: 1rem;
	//overflow: hidden;
	height: 6vh;
`;

export const EditPhotoCover = styled.label`
	position: absolute;
	top: 1rem;
	right: 1rem;
	padding: 0.6rem 1rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	&:hover {
		opacity: 0.8;
	}

	@media only screen and (max-width: 1100px) {
		font-size: 0.6rem;
	}
`;

export const Image = styled.div`
	position: absolute;
	top: -5rem;
	height: 150px;
	width: 150px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.container};
	z-index: 3;
	img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: 3px solid ${({ theme }) => theme.container};
		&:hover {
			opacity: 0.5;
		}
	}
`;

export const EditPhotoProfile = styled.label`
	position: absolute;
	bottom: 0.3rem;
	right: 1rem;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.container};
	border: 3px solid ${({ theme }) => theme.container};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	gap: 10px;
	z-index: 10;
	&:hover {
		opacity: 0.8;
	}
`;
export const Inputs = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 3rem;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
export const Controller = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	font-size: 100%;
`;

export const Label = styled.span`
	display: flex;
	justify-content: flex-start;
	margin-left: 1.2rem;
	margin-bottom: 3%;
	font-size: 1.2em;
	color: ${({ theme }) => theme.title};

	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

export const ContainerInput = styled.div`
	position: relative;
	height: 45px;
	width: 100%;
	font-size: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	margin-bottom: 5%;
`;
export const InputName = styled.input`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: ${({ theme }) => theme.background};
	outline: none;
	padding-left: 20px;
	font-size: 1em;
	color: ${({ theme }) => theme.text};
	transition: background-color 0.5s ease-in;
	border: 1px solid ${({ theme }) => theme.background};
	transition: all 0.3s ease;

	@media (max-width: 580px) {
		font-size: 0.9em;
	}

	@media (max-width: 545px) {
		font-size: 0.8em;
	}

	@media (max-width: 520px) {
		font-size: 0.7em;
	}

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const InputDate = styled.input`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: ${({ theme }) => theme.background};
	outline: none;
	padding-left: 20px;
	padding-right: 10px;
	font-size: 1em;
	color: ${({ theme }) => theme.text};
	transition: background-color 0.5s ease-in;
	border: 1px solid ${({ theme }) => theme.background};
	transition: all 0.3s ease;

	@media (max-width: 580px) {
		font-size: 0.9em;
	}

	@media (max-width: 545px) {
		font-size: 0.8em;
	}

	@media (max-width: 520px) {
		font-size: 0.7em;
	}

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
	&::-webkit-calendar-picker-indicator {
		z-index: 999;
		opacity: 0;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 40px;
	background-color: ${({ theme }) => theme.secondColor};
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const DateBirth = styled.div`
	margin-top: 1rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.background};
	border-radius: 1rem;
	padding: 2rem 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const TitleBirth = styled.h2`
	font-weight: bold;
`;
export const ContextBirth = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Birth = styled.h3`
	font-weight: 200;
`;
export const ContextCalendar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const EditCalendar = styled.div`
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.4rem;
	gap: 10px;
	&:hover {
		opacity: 0.8;
	}

	@media only screen and (max-width: 1100px) {
		font-size: 0.6rem;
	}
`;
export const Save = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;

export const InputFile = styled.input`
	display: none;
`;
