import styled from "styled-components";
import { IoCalendarClearOutline } from "react-icons/io5";

export const IoEvent = styled(IoCalendarClearOutline)`
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
	margin-top: 1rem;
	@media only screen and (max-width: 992px) {
		display: none;
	}
`;
export const Heading = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	svg {
		font-size: 1.4rem;
	}
`;
export const Title = styled.h4``;
