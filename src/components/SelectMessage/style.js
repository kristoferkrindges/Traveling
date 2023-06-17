import styled from "styled-components";
import { IoArrowForward } from "react-icons/io5";

export const Arrow = styled(IoArrowForward)`
	width: 20rem;
	height: 20rem;
	&:hover {
		cursor: pointer;
	}
`;
export const Container = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1.2rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	height: 85vh;

	@media only screen and (max-width: 992px) {
		display: none;
	}
`;

export const ProfilePhoto = styled.div`
	position: relative;
	overflow: visible;
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;

export const Heading = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3rem;

	svg {
		font-size: 1.4rem;
	}
`;
export const Title = styled.h4``;

export const Mid = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 5rem;

	svg {
		font-size: 1.4rem;
	}
`;

export const Text = styled.p`
	font-size: 2rem;
	font-weight: bold;
`;

export const Online = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.container};
	background-color: ${({ theme }) => theme.success};
`;
