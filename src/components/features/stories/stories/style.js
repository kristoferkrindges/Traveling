import styled from "styled-components";

export const AvatarDetail = styled.section`
	margin-left: 20px;
	text-align: center;
`;

export const AvatarBox = styled.div`
	position: relative;
	overflow: visible;
	width: 70px;
	height: 70px;
	aspect-ratio: 1/1;
	/* background-image: linear-gradient(160deg, #1d1ce5 5%, #ea047e, #ffd372); */
	background: linear-gradient(
		15deg,
		${({ theme }) => theme.secondColor} 50%,
		rgba(196, 196, 196, 0) 100%
	);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2px;
	font-size: 1.5rem;

	img {
		width: 65px;
		height: 65px;
		border-radius: 50%;
		margin: 3px;
		/* border: 3px solid white; */
		/* width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
		cursor: pointer; */
	}
`;

export const AvatarName = styled.p`
	font-size: 0.8rem;
	color: ${({ theme }) => theme.text};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
`;

export const Add = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.container};
	background-color: ${({ theme }) => theme.success};
`;
