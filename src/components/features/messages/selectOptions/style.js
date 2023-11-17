import styled from "styled-components";

export const Category = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 1rem;
	h6 {
		width: 100%;
		text-align: center;
		border-bottom: 4px solid ${({ theme }) => theme.container};
		padding-bottom: 0.5rem;
		font-size: 0.85rem;
		cursor: pointer;
	}
	& .active {
		border-color: ${({ theme }) => theme.invertedBackground};
	}
`;
export const Posts = styled.h6``;
