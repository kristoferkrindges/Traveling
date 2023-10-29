import styled from "styled-components";
import { size } from "../../../styles/variables";

export const ContainerSideTop = styled.div`
	background: ${({ theme }) => theme.container};
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
	/* padding: ${size.sm}; */
	padding: 0.7rem;
	border-radius: 0 0 ${size.lg} ${size.lg};
	margin: 0 auto;
	width: 80%;
	display: flex;
	justify-content: space-between;
	/* position: sticky;
	top: 0;
	z-index: 999; */

	@media only screen and (max-width: 1200px) {
		width: 100%;
	}
`;
export const LeftSideTop = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`;

export const RightSideTop = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
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
