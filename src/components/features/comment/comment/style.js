import styled from "styled-components";

export const Space = styled.span`
	margin-left: 2px;
`;

export const CommentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	height: 100%;
`;

export const Controller = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	margin-bottom: 1rem;
`;
export const Right = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const TopContainer = styled.div`
	margin-left: 1rem;
`;

export const Extends = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Border = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 1.4rem;
	margin-top: 1px;
	padding: 1px;
	/* height: 76%; */
	/* +6 */
	/* height: 83%; */
	height: 100%;
	/* +4 */
	border-left: 2px solid ${({ theme }) => theme.text};
`;
