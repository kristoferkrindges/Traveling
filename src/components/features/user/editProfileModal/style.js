import styled from "styled-components";

export const UserPicture = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 5vh;
	z-index: 100;
`;

export const Inputs = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 3rem;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
export const Controller = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	font-size: 100%;

	@media (max-width: 900px) {
		width: 80%;
	}
`;

export const Label = styled.span`
	display: flex;
	justify-content: flex-start;
	margin-left: 1.2rem;
	margin-bottom: 3%;
	font-size: 1.2em;
	color: ${({ theme }) => theme.title};

	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

export const ContainerInput = styled.div`
	position: relative;
	height: 45px;
	width: 100%;
	font-size: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	margin-bottom: 5%;
`;
export const InputName = styled.input`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: ${({ theme }) => theme.background};
	outline: none;
	padding-left: 20px;
	font-size: 1em;
	color: ${({ theme }) => theme.text};
	transition: background-color 0.5s ease-in;
	border: 1px solid ${({ theme }) => theme.background};
	transition: all 0.3s ease;

	@media (max-width: 580px) {
		font-size: 0.9em;
	}

	@media (max-width: 545px) {
		font-size: 0.8em;
	}

	@media (max-width: 520px) {
		font-size: 0.7em;
	}

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const InputDate = styled.input`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: ${({ theme }) => theme.background};
	outline: none;
	padding-left: 20px;
	padding-right: 10px;
	font-size: 1em;
	color: ${({ theme }) => theme.text};
	transition: background-color 0.5s ease-in;
	border: 1px solid ${({ theme }) => theme.background};
	transition: all 0.3s ease;

	@media (max-width: 580px) {
		font-size: 0.9em;
	}

	@media (max-width: 545px) {
		font-size: 0.8em;
	}

	@media (max-width: 520px) {
		font-size: 0.7em;
	}

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
	&::-webkit-calendar-picker-indicator {
		z-index: 999;
		opacity: 0;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 40px;
	background-color: ${({ theme }) => theme.secondColor};
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: ${({ theme }) => theme.textInverse};
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const DateBirth = styled.div`
	margin-top: 1rem;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${({ theme }) => theme.background};
	border-radius: 1rem;
	padding: 2rem 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const TitleBirth = styled.h2`
	font-weight: bold;
`;
export const ContextBirth = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.container};
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;

export const Birth = styled.h3`
	font-weight: 200;
`;
export const ContextCalendar = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;
	padding: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
`;
export const EditCalendar = styled.div`
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background-color: ${({ theme }) => theme.secondColor};
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.4rem;
	gap: 10px;
	&:hover {
		opacity: 0.8;
	}

	@media only screen and (max-width: 1100px) {
		font-size: 0.6rem;
	}
`;
