import styled from "styled-components";
export const CircleContainer = styled.div`
	position: relative;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	cursor: pointer;
	background: ${({ theme }) => theme.background};
	display: flex;
	align-items: center;
	justify-content: center;

	& svg {
		width: 25px;
		height: 25px;
	}

	& svg:hover {
		transform: rotate(-10deg);
		opacity: 0.7;
	}
`;
