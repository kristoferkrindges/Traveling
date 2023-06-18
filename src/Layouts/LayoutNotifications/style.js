import styled from "styled-components";
import { IoNotificationsOutline } from "react-icons/io5";
export const IoNotifications = styled(IoNotificationsOutline)`
	&:hover {
		transform: rotate(-10deg);
		cursor: pointer;
		opacity: 0.7;
	}
`;
export const Container = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);

	@media only screen and (max-width: 992px) {
		/* display: none; */
	}
`;

export const ContainerNotifications = styled.div`
	border-radius: 1rem;
	padding: 1rem;
`;

export const Heading = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;

	svg {
		font-size: 1.4rem;
	}
`;
export const Title = styled.h4``;
