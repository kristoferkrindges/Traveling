import styled from "styled-components";
import { FaUserEdit, FaCamera } from "react-icons/fa";

export const FaEdit = styled(FaUserEdit)``;
export const FaCam = styled(FaCamera)`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;

export const Container = styled.div`
	/* background-color: ${({ theme }) => theme.container}; */
	border-radius: 1rem;
	/* padding: 4px; */
	font-size: 0.85rem;
	line-height: 1.5;
	/* box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1); */
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
`;

export const Head = styled.div`
	position: relative;
	display: flex;
	border-radius: 1rem;
	overflow: hidden;
	width: 100%;
	height: 20vh;
	background-color: ${({ theme }) => theme.secondColor};
`;
export const Bottom = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 4px;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	width: 90%;
	height: 25vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const Image = styled.div`
	position: absolute;
	top: -7rem;
	height: 180px;
	width: 180px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.background};
`;

export const EditPhotoProfile = styled.label`
	position: absolute;
	bottom: 1rem;
	right: 1rem;
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.background};
	border: 3px solid ${({ theme }) => theme.background};
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

export const Info = styled.div`
	position: relative;
	/* top: 4rem; */
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.text};
	margin-top: 3.5rem;
`;

export const Name = styled.span`
	/* position: absolute;
	top: -3rem;
	left: 12rem; */
	margin-top: 2.5rem;
	font-weight: 600;
	letter-spacing: 0.1rem;
	font-size: 1.2rem;

	@media only screen and (max-width: 992px) {
		font-size: 1.2rem;
	}
`;

export const Sign = styled.span`
	font-size: 0.75rem;
	font-weight: 100;

	@media only screen and (max-width: 992px) {
		font-size: 0.7rem;
	}
`;

export const Lists = styled.ul`
	position: relative;
	top: 15px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-evenly;
	width: 100%;
	padding: 0 10px;
`;
export const List = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 10px;
	font-size: 1rem;
	font-weight: 200;
	/* color: #999; */
	color: ${({ theme }) => theme.text};
	&:not(:last-child) {
		border-right: 1px solid #ccc;
	}

	@media only screen and (max-width: 992px) {
		font-size: 0.8rem;
		span {
			font-size: 1.3em;
		}
	}
`;

export const Numbers = styled.span`
	font-size: 1.65em;
	color: ${({ theme }) => theme.text};
	font-weight: 700;

	@media only screen and (max-width: 992px) {
		font-size: 1.3em;
	}
`;

export const Space = styled.div`
	margin: 1rem;
`;
export const Button = styled.button`
	position: relative;
	top: 25px;
	border: none;
	outline: none;
	background: ${({ theme }) => theme.secondColor};
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: white;
	font-size: 1rem;
	border: 4px solid transparent;
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	transition: 0.5s;
	&::before {
		content: "";
		position: absolute;
		top: -9px;
		left: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-right-radius: 20px;
		box-shadow: 5px -7px ${({ theme }) => theme.container};
	}
	&::after {
		content: "";
		position: absolute;
		top: -9px;
		right: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-left-radius: 20px;
		box-shadow: -5px -7px ${({ theme }) => theme.container};
	}
	&:hover {
		opacity: 0.8;
		letter-spacing: 0.5em;
	}

	@media only screen and (max-width: 1674px) {
		&::before {
			top: 0px;
		}
		&::after {
			top: 0px;
		}
	}

	@media only screen and (max-width: 1450px) {
		padding: 0.3rem 1.4rem;
		font-size: 0.8rem;
	}

	@media only screen and (max-width: 1100px) {
		padding: 0.6rem 1.7rem;
		font-size: 0.8rem;
		&::before {
			top: -10px;
			left: -23px;
		}
		&::after {
			top: -10px;
			right: -23px;
		}
	}
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
	border: 1px solid ${({ theme }) => theme.text};
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

export const InputFile = styled.input`
	display: none;
`;

export const UserPhoto = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.background};
	border: 3px solid ${({ theme }) => theme.background};
	&:hover {
		opacity: 0.5;
	}
`;

export const Banner = styled.img`
	width: 100%;
	object-fit: cover;
`;
