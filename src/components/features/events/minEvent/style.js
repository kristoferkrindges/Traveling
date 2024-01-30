import styled from "styled-components";
export const MinEventLayout = styled.div`
	position: relative;
	font-size: 1rem;
	line-height: 1.5;
	width: 100%;

	& a {
		color: ${({ theme }) => theme.text};
	}
	& img {
		cursor: pointer;
	}
`;
