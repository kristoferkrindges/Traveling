import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const CreateStorieContainer = styled.section`
	position: relative;
	padding: ${size.sm};
	border-radius: ${size.lg};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	background-color: ${({ theme }) => theme.container};
	width: 500px;
	max-height: 750px;
	margin: 0 0.5rem 0 1rem;

	& svg {
		/* font-size: 5rem; */
		color: ${({ theme }) => theme.text};
	}
`;

export const IconContainer = styled.div`
	margin-top: 2.5rem;
	text-align: center;
	& svg {
		font-size: 3.5rem;
	}
`;

export const LabelFile = styled.label``;

export const BottomContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 1rem;
	width: 100%;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: space-between;
	width: 100%;
	margin-top: 1rem;
	svg {
		font-size: 1.4rem;
	}
`;

export const Preview = styled.div`
	height: 600px;
`;
