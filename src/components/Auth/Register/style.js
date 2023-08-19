import styled from "styled-components";
import {
	IoPersonCircleOutline,
	IoLockClosedOutline,
	IoLogoGoogle,
	IoMailOutline,
	IoPeopleCircleOutline,
	IoAtCircleOutline,
} from "react-icons/io5";

export const UserCircle = styled(IoPersonCircleOutline)``;
export const Mail = styled(IoMailOutline)``;
export const TwoPeople = styled(IoPeopleCircleOutline)``;
export const Lock = styled(IoLockClosedOutline)``;
export const At = styled(IoAtCircleOutline)``;

export const IconGoogle = styled(IoLogoGoogle)`
	stroke: white;
	color: white;
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: 2rem;
	margin-bottom: 2rem;
`;
export const ContainerRegister = styled.div`
	height: 100vh;
	display: grid;
	justify-content: center;
	align-items: center;
	padding: 0 1rem;
	@media only screen and (min-width: 968px) {
		grid-template-columns: 1fr 1.5fr;
		padding: 0 2rem;
	}
`;

export const Logo = styled.img`
	display: none;
	@media only screen and (min-width: 968px) {
		display: block;
		width: 700px;
		justify-self: center;
		background: linear-gradient(
			15deg,
			${({ theme }) => theme.secondColor} 20%,
			rgba(196, 196, 196, 0) 100%
		);
		border-radius: 1rem;
		padding: 1rem;
		box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
	}
`;

export const Form = styled.form`
	width: 290px;
	justify-self: center;
	& #marg {
		margin-bottom: 3rem;
	}
	@media only screen and (min-width: 968px) {
		width: 320px;
	}
`;

export const Fields = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 7% 93%;
	margin-bottom: 1rem;
	padding: 0.25rem 0;
	border-bottom: 1px solid ${({ theme }) => theme.secondColor};
`;

export const FormIcon = styled.div`
	font-size: 1.5rem;
`;

export const FormInput = styled.div`
	position: relative;
`;

export const Label = styled.label`
	display: block;
	position: absolute;
	left: 0.75rem;
	top: 0.25rem;
	font-size: 0.938rem;
	transition: 0.3s;
`;

export const Input = styled.input`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.75rem;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.text};
`;

export const OrderController = styled.p`
	display: block;
	text-align: right;
	margin-bottom: 2rem;
	font-size: 0.8rem;
	font-weight: 500;
	transition: 0.5s;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.secondColor};
		transition: 0.5s;
	}
`;

export const Button = styled.input`
	width: 100%;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	background: linear-gradient(
		15deg,
		${({ theme }) => theme.secondColor} 20%,
		rgba(196, 196, 196, 0) 100%
	);
	color: white;
	margin-bottom: 2rem;

	&:hover {
		background: linear-gradient(
			35deg,
			${({ theme }) => theme.secondColor} 20%,
			rgba(196, 196, 196, 0) 100%
		);
	}
`;

export const ContainerGoogle = styled.div`
	text-align: center;

	& a {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 30px;
		height: 30px;
		padding: 0.6rem 2rem;
		background: linear-gradient(
			15deg,
			${({ theme }) => theme.secondColor} 20%,
			rgba(196, 196, 196, 0) 100%
		);
		border-radius: 2rem;
		cursor: pointer;
		color: white;
	}
`;

export const Text = styled.span`
	display: block;
	font-size: 0.9rem;
	margin-bottom: 1rem;
`;
export const ContainerIcon = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
	padding: 0.5rem;
	background: linear-gradient(
		15deg,
		${({ theme }) => theme.secondColor} 20%,
		rgba(196, 196, 196, 0) 100%
	);
	border-radius: 50%;
	cursor: pointer;
	color: white;
	font-size: 1.25rem;

	&:hover {
		background: linear-gradient(
			35deg,
			${({ theme }) => theme.secondColor} 20%,
			rgba(196, 196, 196, 0) 100%
		);
	}
`;
