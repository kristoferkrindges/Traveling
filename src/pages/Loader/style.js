import styled from "styled-components";
export const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: ${({ theme }) => theme.background};
	width: 100vw;
`;

export const Img = styled.img`
	width: 320px;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.text};
	text-transform: uppercase;
	font-size: 2.5rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	margin-bottom: 5rem;
`;
