import React, { useState } from "react";
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
export default function Login({ controllerOrder }) {
	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
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
						{!emailFocused ? <Label>Email</Label> : <></>}
						<Input
							type="text"
							onFocus={() => setEmailFocused(true)}
							onBlur={() => setEmailFocused(false)}
						/>
					</FormInput>
				</Fields>
				<Fields>
					<FormIcon>
						<Lock />
					</FormIcon>
					<FormInput>
						{!passwordFocused ? <Label>Password</Label> : <></>}
						<Input
							type="password"
							onFocus={() => setPasswordFocused(true)}
							onBlur={() => setPasswordFocused(false)}
						/>
					</FormInput>
				</Fields>
				<OrderController onClick={controllerOrder}>
					Don't have an account?
				</OrderController>
				<Button type="submit" value="Sign in"></Button>
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
