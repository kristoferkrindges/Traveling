import styled from "styled-components";
import { size } from "../../styles/variables";

export const ContainerPadding = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: ${size.sm};
	border-radius: ${size.sm};
	background-color: ${({ theme }) => theme.container};
	margin-top: ${size.sm};
`;
