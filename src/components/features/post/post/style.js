import styled from "styled-components";
import { size } from "../../../../styles/variables";

export const Container = styled.div`
	background-color: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	margin: 1rem 0;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);

	& a {
		color: ${({ theme }) => theme.text};
	}
`;

export const EditPhotoNoPhoto = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 3rem;
	color: white;
	margin-bottom: 1rem;
`;
