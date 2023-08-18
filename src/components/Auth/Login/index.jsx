import React, { useState, useContext } from "react";
import {
	ContainerLogin,
	Logo,
	Form,
	Title,
	Fields,
	FormIcon,
	UserCircle,
	FormInput,
	Label,
	Input,
	Lock,
	OrderController,
	Button,
	ContainerGoogle,
	Text,
	IconGoogle,
	ContainerIcon,
} from "./style";
import Infinite from "../../../assets/images/infinite-removebg-preview.png";
import { Context } from "../../../context/userContext";
export default function Login({ controllerOrder }) {
	const { login } = useContext(Context);
	
	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);

	const [emailChange, setEmailChange] = useState();
	const [passwordChange, setPassowordChange] = useState();

	function handlerButtonSignIn(evt) {
		evt.preventDefault();
		const user = {
			email: emailChange,
			password: passwordChange,
		};
		login(user);
	}

	return (
		<ContainerLogin>
			<Logo src={Infinite} />
			<Form action="">
				<Title>Login</Title>
				<Fields id="marg">
					<FormIcon>
						<UserCircle />
					</FormIcon>
					<FormInput>
						{!emailFocused && !emailChange ? <Label>Email</Label> : null}
						<Input
							type="text"
							onFocus={() => setEmailFocused(true)}
							onBlur={() => setEmailFocused(false)}
							onChange={(e) => {
								setEmailChange(e.target.value);
							}}
						/>
					</FormInput>
				</Fields>
				<Fields>
					<FormIcon>
						<Lock />
					</FormIcon>
					<FormInput>
						{!passwordFocused && !passwordChange ? (
							<Label>Password</Label>
						) : null}
						<Input
							type="password"
							onFocus={() => setPasswordFocused(true)}
							onBlur={() => setPasswordFocused(false)}
							onChange={(e) => {
								setPassowordChange(e.target.value);
							}}
						/>
					</FormInput>
				</Fields>
				<OrderController onClick={controllerOrder}>
					Don't have an account?
				</OrderController>
				<Button
					type="submit"
					value="Sign in"
					onClick={(evt) => {
						handlerButtonSignIn(evt);
					}}
				></Button>
				<ContainerGoogle>
					<Text>Our login with</Text>
					<ContainerIcon>
						<IconGoogle />
					</ContainerIcon>
				</ContainerGoogle>
			</Form>
		</ContainerLogin>
	);
}
