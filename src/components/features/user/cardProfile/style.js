import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const CardProfileContainer = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	padding: ${size.sm};
	border-radius: ${size.lg};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	left: -1rem;
	top: -1rem;
	z-index: 999;
`;

export const Head = styled.div`
	position: relative;
	display: flex;
	overflow: hidden;
	border-radius: ${size.lg};
	width: 100%;
	height: 15vh;
	background-color: ${({ theme }) => theme.secondColor};
`;
export const Bottom = styled.div`
	position: relative;
	font-size: 0.85rem;
	line-height: 1.5;
	width: 100%;
	height: 20vh;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

export const Banner = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const EditPhotoCover = styled.label`
	position: absolute;
	top: 0.5rem;
	right: -0.5rem;
	padding: 0.6rem 1rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	/* background-color: ${({ theme }) => theme.secondColor};
	border: 1px solid ${({ theme }) => theme.text}; */
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

export const Photo = styled.div`
	position: absolute;
	top: -6rem;
	height: 140px;
	width: 140px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.background};
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

export const Info = styled.div`
	position: relative;
	top: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.text};
	/* margin-top: 2.5rem; */
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
	top: 25px;
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
