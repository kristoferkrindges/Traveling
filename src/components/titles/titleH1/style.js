import styled from "styled-components";

export const H1 = styled.h1`
	color: ${({ theme }) => theme.text};
	text-transform: uppercase;
	font-size: ${(prop) => prop.fontSize};
	letter-spacing: 0.5rem;
	font-weight: 600;
	line-height: 1.1em;
	margin-bottom: ${(prop) => prop.marginBottom};
`;
