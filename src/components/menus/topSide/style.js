import styled from "styled-components";
import { size } from "../../../styles/variables";

export const ContainerSideTop = styled.div`
	background: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	padding: 0.5rem;
	border-radius: 0 0 ${size.lg} ${size.lg};
	margin: 0 auto;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: sticky;
	top: 0;
	z-index: 999;

	@media only screen and (max-width: 1200px) {
		width: 96%;
	}

	@media only screen and (max-width: 992px) {
		width: 100%;
	}
`;
export const LeftSideTop = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const MidSideTop = styled.div``;

export const RightSideTop = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;
