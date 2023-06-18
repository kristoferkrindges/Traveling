import styled from "styled-components";

export const Container = styled.div`
	height: max-content;
	position: sticky;
	top: 5.4rem;
	bottom: 0;
	@media only screen and (max-width: 992px) {
		display: none;
	}
`;
