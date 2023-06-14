import styled from "styled-components";

export const Card = styled.div`
	position: relative;
	width: 320px;
	height: 430px;
	background-color: ${({ theme }) => theme.background};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

export const BoxOne = styled.div`
	position: relative;
	width: 110%;
	height: 200px;
	background-color: orange;
	border-radius: 15px;

	&::before {
		content: "";
		position: absolute;
		top: 105px;
		left: -1px;
		width: 23px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-bottom-left-radius: 20px;
		box-shadow: -6px 6px ${({ theme }) => theme.background};
	}
	&::after {
		content: "";
		position: absolute;
		bottom: -1px;
		left: 105px;
		width: 23px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-bottom-left-radius: 20px;
		box-shadow: -6px 6px ${({ theme }) => theme.background};
	}
`;
export const BoxTwo = styled.div`
	position: relative;
	width: 100%;
	height: 220px;
	background-color: ${({ theme }) => theme.container};
	border-radius: 15px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);

	&::before {
		content: "";
		position: absolute;
		bottom: 106px;
		left: -1px;
		width: 20px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-top-left-radius: 20px;
		box-shadow: -6px -6px ${({ theme }) => theme.background};
	}
	&::after {
		content: "";
		position: absolute;
		top: -1px;
		left: 109px;
		width: 20px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-top-left-radius: 20px;
		box-shadow: -6px -6px ${({ theme }) => theme.background};
	}
`;
export const Circle = styled.div`
	position: absolute;
	top: 50%;
	left: -70px;
	transform: translateY(-50%);
	width: 180px;
	height: 180px;
	background: green;
	border-radius: 50%;
	border: 10px solid ${({ theme }) => theme.background};
`;

export const Photo = styled.div`
	position: absolute;
	inset: 0;
	overflow: hidden;
	border-radius: 50%;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const Modal = styled.div`
	position: absolute;
	inset: 0;
	overflow: hidden;
	border-radius: 15px;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const Content = styled.div`
	position: absolute;
	inset: 0;
	padding: 30px 10px 20px;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 20px;
`;
export const Name = styled.h2`
	width: 100%;
	padding-left: 120px;
	text-transform: uppercase;
	font-size: 1.15em;
	letter-spacing: 0.1em;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.text};

	span {
		font-size: 0.75em;
		font-weight: 400;
		letter-spacing: 0.05em;
		color: ${({ theme }) => theme.text};
		text-transform: initial;
	}
`;
export const Lists = styled.ul`
	position: relative;
	top: 15px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: space-evenly;
	width: 100%;
	padding: 0 10px;
`;
export const List = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 10px;
	font-size: 0.85rem;
	font-weight: 500;
	color: #999;
	&:not(:last-child) {
		border-right: 1px solid #ccc;
	}
	span {
		font-size: 1.65em;
		color: ${({ theme }) => theme.text};
	}
`;
export const Button = styled.button`
	position: relative;
	top: 25px;
	border: none;
	outline: none;
	background: ${({ theme }) => theme.secondColor};
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: white;
	font-size: 1rem;
	border: 5px solid ${({ theme }) => theme.background};
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	transition: 0.5s;
	/* text-transform: uppercase;
	letter-spacing: 0.2em; */
	&::before {
		content: "";
		position: absolute;
		top: 24px;
		left: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-right-radius: 20px;
		box-shadow: 5px -7px ${({ theme }) => theme.container};
	}
	&::after {
		content: "";
		position: absolute;
		top: 24px;
		right: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-left-radius: 20px;
		box-shadow: -5px -7px ${({ theme }) => theme.container};
	}
	&:hover {
		opacity: 0.8;
		letter-spacing: 0.5em;
	}
`;
