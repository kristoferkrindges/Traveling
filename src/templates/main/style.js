import styled from "styled-components";
export const MainContainer = styled.main`
	position: relative;
	/* top: 5.4rem; */
	top: 1.5rem;
`;
export const GridContainer = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 18vw auto 20vw;
	column-gap: 2rem;
	position: relative;

	@media only screen and (max-width: 1400px) {
		width: 80%;
		grid-template-columns: 0 auto 30vw;
		gap: 1rem;
	}

	@media only screen and (max-width: 1200px) {
		width: 96%;
		grid-template-columns: 0 auto 30vw;
		gap: 1rem;
	}

	@media only screen and (max-width: 992px) {
		grid-template-columns: 5rem auto 0;
	}
`;
