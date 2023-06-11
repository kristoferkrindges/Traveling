import styled from "styled-components";
export const MainContainer = styled.main`
	position: relative;
	top: 5.4rem;
`;
export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 18vw auto 20vw;
	column-gap: 2rem;
	position: relative;
`;

export const Left = styled.div`
	height: max-content;
	position: sticky;
	top: 5.4rem;
`;
export const Middle = styled.div`
	/* margin-left: 12%; */
`;
export const Right = styled.div`
	height: max-content;
	position: sticky;
	top: 5.4rem;
	bottom: 0;
`;
