import styled from "styled-components";
export const Friend = styled.div``;
export const Name = styled.h4``;
export const Request = styled.div`
	/* background-color: ${({ theme }) => theme.container}; */
	padding: 1rem;
	/* border-radius: 1rem; */
	margin-bottom: 0.7rem;
`;
export const Info = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
`;
export const ProfilePhoto = styled.div`
	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer;
	}
`;
export const ContainerName = styled.div``;
export const TextMuted = styled.p`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.textMuted};
`;
export const ActionButtons = styled.div`
	display: flex;
	gap: 1rem;
`;
