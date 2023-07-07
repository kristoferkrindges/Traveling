import styled from "styled-components";
export const ContainerOnly = styled.div`
	background-color: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
	background-color: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	margin: 1rem 0;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
