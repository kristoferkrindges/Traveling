import styled from "styled-components";

export const CreateContainer = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 1.5rem;
`;

export const Buttons = styled.div`
	position: relative;
	padding: 0.4rem 1rem;
	background-color: ${({ theme }) => theme.container};
	display: flex;
	justify-content: space-around;
	gap: 1rem;
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	border-radius: 2rem;
	text-align: center;
	&::before {
		content: "";
		position: absolute;
		top: 0px;
		left: -21px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-right-radius: 20px;
		box-shadow: 5px -7px ${({ theme }) => theme.container};
	}
	&::after {
		content: "";
		position: absolute;
		top: 0px;
		right: -21px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-left-radius: 20px;
		box-shadow: -5px -7px ${({ theme }) => theme.container};
	}

	& svg {
		font-size: 1.6rem;
	}
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 1rem;
	background-color: ${({ theme }) => theme.container};
	padding: 0.4rem 1rem;
	border-radius: 2rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	cursor: pointer;
`;
export const ProfilePhoto = styled.div``;
export const Input = styled.input`
	justify-self: start;
	width: 100%;
	padding-left: 1rem;
	background: transparent;
	color: ${({ theme }) => theme.invertedBackground};
	margin-right: 1rem;
	cursor: pointer;
`;
