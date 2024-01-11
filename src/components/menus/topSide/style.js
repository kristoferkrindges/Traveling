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

	/* display: grid;
	grid-template-columns: 30vw auto 10vw;
	column-gap: 2rem; */

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
	/* width: 90%; */
`;

export const MidSideTop = styled.div`
	/* width: 100%; */
`;

export const RightSideTop = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	/* width: 100%; */
`;

// export const ContainerSideTop = styled.div`
// 	background: ${({ theme }) => theme.container};
// 	padding: ${size.sm};
// 	border-radius: ${size.lg};
// 	width: 80%;
// 	margin: 0 auto;
// 	display: grid;
// 	grid-template-columns: 18vw auto 18vw;
// 	column-gap: 2rem;
// 	position: relative;

// 	@media only screen and (max-width: 1200px) {
// 		width: 96%;
// 		grid-template-columns: 5rem auto 30vw;
// 		gap: 1rem;
// 	}

// 	@media only screen and (max-width: 992px) {
// 		grid-template-columns: 5rem auto 0;
// 	}
// `;
