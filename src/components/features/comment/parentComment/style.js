import styled from "styled-components";

export const Controller = styled.div`
	position: relative;
	display: flex;
	margin-top: 2rem;
	margin-bottom: 1rem;
`;
export const Extends = styled.div`
	margin-left: 0.4rem;
`;

export const Border = styled.div`
	position: absolute;
	padding: 1px;
	left: -1.4rem;
	top: 1.5rem;
	width: 1.5rem;
	border-top: 2px solid ${({ theme }) => theme.text};
`;
