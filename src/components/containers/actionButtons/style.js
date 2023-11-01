import styled from "styled-components";
export const ActionButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0.6rem;
	font-size: 1.3rem;
	font-weight: bold;
`;
export const InteractionButtons = styled.div`
	display: flex;
	gap: 2rem;

	& a {
		color: ${({ theme }) => theme.text};
	}
`;
export const BookMark = styled.div`
	display: flex;
	gap: 2rem;
`;
export const Icon = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	font-size: 1.3rem;
	svg {
		font-size: 1.3rem;
	}
`;
export const Numbers = styled.span`
	font-size: 0.8rem;
	/* color: ${({ theme }) => theme.textMuted}; */
`;
