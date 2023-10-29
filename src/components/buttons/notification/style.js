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
`;
