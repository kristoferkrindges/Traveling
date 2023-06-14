import styled from "styled-components";
export const SectionEvent = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;
export const Left = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
	cursor: pointer;
	&:last-child {
		margin: 0;
	}
`;
export const Right = styled.div``;
export const Photo = styled.div`
	position: relative;
	overflow: visible;
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;
export const MessageBody = styled.div``;
export const Name = styled.h5``;
export const TextMuted = styled.p`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.textMuted};
`;
