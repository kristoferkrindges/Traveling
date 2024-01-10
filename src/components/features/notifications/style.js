import styled from "styled-components";

import { size } from "../../../styles/variables";

export const NotificationContainer = styled.div`
	background-color: ${({ theme }) => theme.container};
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	border-left: 8px solid ${({ theme }) => theme.secondColor};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	margin-bottom: 1rem;
	border-radius: ${size.lg};
	padding: ${size.sm};
	width: 90%;
`;
export const Left = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	&:last-child {
		margin: 0;
	}

	@media only screen and (max-width: 1259px) {
		font-size: 0.75rem;
	}

	@media only screen and (max-width: 1200px) {
		font-size: 1rem;
	}

	@media only screen and (max-width: 622px) {
		font-size: 0.75rem;
	}

	@media only screen and (max-width: 450px) {
		font-size: 0.5rem;
	}
`;
export const Right = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.secondColor};
	width: 25px;
	height: 25px;
	padding: 1.3rem;
	border-radius: 10px;
	font-size: 1.5rem;

	svg {
		margin-top: 5px;
		color: #ffff;
	}

	@media only screen and (max-width: 502px) {
		width: 20px;
		height: 20px;
		font-size: 1rem;
		padding: 1rem;
	}

	@media only screen and (max-width: 400px) {
		display: none;
	}
`;
export const Photo = styled.div`
	display: flex;
	align-items: center;
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;
export const MessageBody = styled.div``;
export const Name = styled.h5`
	font-weight: bold;
`;
export const Question = styled.span`
	font-weight: 300;
`;
export const TextMuted = styled.p`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.textMuted};
	@media only screen and (max-width: 1259px) {
		font-size: 0.6rem;
	}

	@media only screen and (max-width: 1200px) {
		font-size: 0.8rem;
	}
	@media only screen and (max-width: 622px) {
		font-size: 0.6rem;
	}

	@media only screen and (max-width: 450px) {
		font-size: 0.4rem;
	}
`;
