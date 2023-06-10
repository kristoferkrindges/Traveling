import styled from "styled-components";

// Stories
export const MainContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 12rem;
	gap: 0.5rem;
`;
export const Story = styled.div`
	padding: 1rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: white;
	font-size: 0.75rem;
	width: 100%;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		display: block;
		width: 100%;
		height: 5rem;
		background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
		position: absolute;
		bottom: 0;
	}
`;
export const ProfilePhoto = styled.div`
	width: 2rem;
	height: 2rem;
	align-self: start;

	img {
		width: 45px;
		height: 45px;
		border-radius: 50%;
		border: 3px solid ${({ theme }) => theme.secondColor};
		object-fit: cover;
		cursor: pointer;
	}
`;
export const UserName = styled.p`
	z-index: 2;
`;
