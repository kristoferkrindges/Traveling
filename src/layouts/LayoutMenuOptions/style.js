import styled from "styled-components";

export const ContainerOptions = styled.div`
	border-radius: 1rem;
	padding: 1rem;
	font-size: 0.85rem;
	line-height: 1.5;
	margin-top: 4.5rem;
	margin-bottom: 1rem;
	background-color: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
