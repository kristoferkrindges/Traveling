import styled from "styled-components";
export const Container = styled.div`
	border-radius: 1rem;
	padding: 1rem;
	font-size: 0.85rem;
	line-height: 1.5;
`;

export const ContainerOptions = styled.div`
	border-radius: 1rem;
	padding: 1rem;
	font-size: 0.85rem;
	line-height: 1.5;
	margin-top: 3rem;
`;

export const ContextContainer = styled.div`
	background-color: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	z-index: 100;
`;
