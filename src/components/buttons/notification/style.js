import styled from "styled-components";

export const CountNotification = styled.div`
	position: absolute;
	top: -5px;
	right: -8px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	cursor: pointer;
	background: ${({ theme }) => theme.secondColor};
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 0.7rem;
`;

export const BorderSelect = styled.div`
	position: absolute;
	width: 3rem;
	height: 3px;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.secondColor};
	right: 0;
	top: 3.4rem;
`;
