import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const NotContentYet = styled.h4`
	text-align: center;
`;
export const ProfileContainer = styled.section`
	/* background-color: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	border-radius: ${size.lg};
	padding: ${size.sm};

	& div {
		background: transparent;
		box-shadow: none;
	} */
`;

export const ProfileNotFound = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.8rem;
	font-weight: 700;
`;
