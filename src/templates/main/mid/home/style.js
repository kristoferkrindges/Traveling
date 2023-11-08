import styled from "styled-components";
import { size } from "../../../../styles/variables";
export const PostAllContainer = styled.div`
	background-color: ${({ theme }) => theme.container};
	border-radius: ${size.lg};
	padding: ${size.sm};
	margin: 1rem 0;
	font-size: 0.85rem;
	line-height: 1.5;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	cursor: pointer;

	& a {
		color: ${({ theme }) => theme.text};
	}
	& img {
		cursor: pointer;
	}
`;
