import styled from "styled-components";
import { size } from "../../../../styles/variables";
export const ContainerResult = styled.div`
	position: absolute;
	top: calc(100% + 20px);
	right: 0;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	background-color: ${({ theme }) => theme.container};
	border-radius: 2rem;
	padding: ${size.sm};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.7);
	width: 280px;
	transition: all 0.3s ease;
	& a {
		color: ${({ theme }) => theme.text};
	}
	z-index: 999;
`;
