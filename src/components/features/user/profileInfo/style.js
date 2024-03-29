import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const ProfileInfoContainer = styled.div`
	font-size: 0.85rem;
	line-height: 1.5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
`;

export const Head = styled.div`
	position: relative;
	display: flex;
	border-radius: ${size.lg};
	overflow: hidden;
	width: 100%;
	height: 180px;
	background-color: ${({ theme }) => theme.secondColor};
`;
export const Bottom = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: 4px;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	width: 90%;
	/* height: 25vh; */
	height: 250px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin-bottom: 5rem;
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
	bottom: 5px;
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
	font-weight: 500;
	cursor: pointer;
	color: ${({ theme }) => theme.text};
	&:not(:last-child) {
		border-right: 1px solid #ccc;
	}
	&:hover {
		opacity: 0.5;
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
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	color: ${({ theme }) => theme.textInverse};
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
		cursor: pointer;
	}
`;

export const Banner = styled.img`
	width: 100%;
	object-fit: cover;
`;
