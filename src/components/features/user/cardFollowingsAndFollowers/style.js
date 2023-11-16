import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const FollowersAndFollowingsContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	min-width: 20vw;
	margin: 1rem 0 0 1rem;
	z-index: 500;
`;
