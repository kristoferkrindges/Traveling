import styled from "styled-components";
export const ContainerSticky = styled.div`
	height: max-content;
	position: sticky;
	top: 5.4rem;
	bottom: ${(props) => props.bottom};

	@media only screen and (max-width: 1200px) {
		width: 5rem;
		z-index: 5;
	}
`;
