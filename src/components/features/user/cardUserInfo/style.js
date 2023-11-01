import styled from "styled-components";

export const Card = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background};
	height: 350px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 3.7rem;

	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;

export const BoxOne = styled.div`
	position: relative;
	width: 100%;
	height: 150px;
	background-color: ${({ theme }) => theme.secondColor};
	border-radius: 15px;

	&::before {
		content: "";
		position: absolute;
		top: 75px;
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
		/* bottom: -6px;
		left: 82px; */
		bottom: -1px;
		left: 80px;
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
	width: 90%;
	height: 190px;
	background-color: ${({ theme }) => theme.container};
	border-radius: 2rem; // 15px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

	&::before {
		content: "";
		position: absolute;
		bottom: 78px;
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
		top: -5px;
		left: 86px;
		/* top: -1px;
		left: 109px; */
		top: -1px;
		left: 88px;
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
	width: 160px;
	height: 160px;
	background: ${({ theme }) => theme.background};
	border-radius: 50%;
	border: 10px solid transparent;
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
	padding: 1.7rem 0.7rem 1.2rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1.2rem;
`;
export const Name = styled.h2`
	width: 100%;
	/* padding-left: 120px; */
	padding-left: 6.5rem;
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.text};

	span {
		font-size: 0.65rem;
		font-weight: 400;
		letter-spacing: 0.05em;
		color: ${({ theme }) => theme.text};
		text-transform: initial;
	}

	@media only screen and (max-width: 1600px) {
		font-size: 0.8rem;
		span {
			font-size: 0.5rem;
		}
	}

	@media only screen and (max-width: 1280px) {
		font-size: 0.7rem;
		span {
			font-size: 0.5rem;
		}
		letter-spacing: 0;
	}

	@media only screen and (max-width: 1100px) {
		font-size: 0.6rem;
		span {
			font-size: 0.4rem;
		}
		padding-left: 5.5rem;
	}

	@media only screen and (max-width: 980px) {
		font-size: 0.55rem;
		span {
			font-size: 0.38rem;
		}
		padding-left: 5.4rem;
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

	@media only screen and (max-width: 1600px) {
		top: 25px;
	}

	@media only screen and (max-width: 1280px) {
		top: 32px;
	}

	@media only screen and (max-width: 1100px) {
		top: 36px;
	}
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

	@media only screen and (max-width: 1600px) {
		font-size: 0.8rem;
		span {
			font-size: 1.5em;
		}
	}

	@media only screen and (max-width: 1300px) {
		font-size: 0.7rem;
		span {
			font-size: 1.2em;
		}
	}

	@media only screen and (max-width: 1100px) {
		font-size: 0.6rem;
		span {
			font-size: 1em;
		}
	}
`;
export const Button = styled.button`
	position: relative;
	top: 35px;
	border: none;
	outline: none;
	background: ${({ theme }) => theme.secondColor};
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	color: white;
	font-size: 1rem;
	border: 4px solid transparent;
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	/* box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4); */
	transition: 0.5s;
	/* text-transform: uppercase;
	letter-spacing: 0.2em; */
	&::before {
		content: "";
		position: absolute;
		top: 5px;
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
		top: 5px;
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

	@media only screen and (max-width: 1674px) {
		&::before {
			top: 0px;
		}
		&::after {
			top: 0px;
		}
	}

	@media only screen and (max-width: 1450px) {
		padding: 0.3rem 1.4rem;
		font-size: 0.8rem;
	}

	@media only screen and (max-width: 1280px) {
		top: 35px;
	}

	@media only screen and (max-width: 1100px) {
		top: 40px;
	}
`;
