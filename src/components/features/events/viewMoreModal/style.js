import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const ViewMoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	/* padding: ${size.sm}; */
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	width: 700px;
	margin: 0 0.5rem 0 1rem;
	max-height: 90vh;
	overflow-x: hidden;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	z-index: 999;
`;

export const DetailsContainer = styled.div`
	padding: 1.2rem;
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	/* max-width: 33.5vw; */
	gap: 1.5rem;
	margin-bottom: 1rem;
	width: 100%;
	color: ${({ theme }) => theme.text};
`;

export const Details = styled.p``;

export const DateEvent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* align-self: flex-end; */
	border-radius: ${size.lg};
	padding: 1.5rem;
	background-color: ${({ theme }) => theme.secondColor};
	color: ${({ theme }) => theme.textInverse};
	gap: 1rem;
	svg {
		font-size: 1.5rem;
	}
`;

export const HeadingView = styled.div`
	padding: 0.5rem 1rem;
`;

export const Creator = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	color: ${({ theme }) => theme.textInverse};
	background-color: ${({ theme }) => theme.secondColor};

	svg {
		font-size: 1.4rem;
	}
`;

export const Owner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 0.5rem;
`;

export const Name = styled.h4`
	cursor: pointer;
	&:hover {
		opacity: 0.7;
	}
`;
